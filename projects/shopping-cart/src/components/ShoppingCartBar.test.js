import React from "react";
import { cleanup, screen, waitFor, act } from "@testing-library/react";
import "@testing-library/jest-dom";

import { renderWithRouter } from "../testUtils";
import ShoppingCartBar from "./ShoppingCartBar";

//mocks
const mockfn = jest.fn();  

//setup
afterEach(cleanup);

//tests
describe('ShoppingCartBar', () => {
    it('renders correct texts', () => {
        const {user} = renderWithRouter(<ShoppingCartBar cartItems={[]} visibility={true} />);
        expect(screen.getAllByRole('link').length).toStrictEqual(2);
        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('Products')).toBeInTheDocument();
        expect(screen.getByText('Cart')).toBeInTheDocument();
    });

    it('links have correct hrefs', () => {
        const {user} = renderWithRouter(<ShoppingCartBar cartItems={[]} visibility={true} />);
        const homeLink = screen.getByRole('link', {name: "Home"});
        expect(homeLink).toHaveAttribute('href', '/')
        const productsLink = screen.getByRole('link', {name: "Products"});
        expect(productsLink).toHaveAttribute('href', '/products')
    });


    it('toggles showCart()', async () => {
        const {user} = renderWithRouter(<ShoppingCartBar cartItems={[]} visibility={true} />);
        const button = screen.getByRole('button');
        act(() => {
            user.click(button)
        });

        await waitFor(() => {
            expect(mockfn).toHaveBeenCalled();
        });
    });

    it('renders correct cart item quantity', async () => {
        const {user} = renderWithRouter(<ShoppingCartBar cartItems={["item 1", "item 2", "item 3"]} visibility={true} />);
        const button = screen.getByRole('button');

        await waitFor(() => {
            expect(button).toHaveTextContent("Cart (3)");
        });
    });
});