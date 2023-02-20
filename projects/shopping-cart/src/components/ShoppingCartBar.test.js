import React from "react";
import { cleanup, screen, waitFor, act } from "@testing-library/react";
import "@testing-library/jest-dom";

import { renderWithRouter } from "../testUtils";
import ShoppingCartBar from "./ShoppingCartBar";

//mocks
const mockfn = jest.fn();
const mockItems = [
    {name: "item 1", price: 40, quantity: 3, id: 25},
    {name: "item 2", price: 55, quantity: 1, id: 15},
    {name: "item 3", price: 70, quantity: 4, id: 7},
];
jest.mock("./CartItem", () => () => {
    return <mockCartItem data-testid="cart-item-1"/>;
});

//setup
afterEach(cleanup);

//tests
describe('ShoppingCartBar', () => {
    it('renders correct texts in header section', () => {
        const {user} = renderWithRouter(<ShoppingCartBar cartItems={[]} visibility={true} />);
        expect(screen.getByText('Cart')).toBeInTheDocument();
        expect(screen.getByText('Item')).toBeInTheDocument();
        expect(screen.getByText('Unit Price')).toBeInTheDocument();
        expect(screen.getByText('Quantity')).toBeInTheDocument();
        expect(screen.getByText('Total Price')).toBeInTheDocument();
    });

    it('renders correct texts in summary section', () => {
        const {user} = renderWithRouter(<ShoppingCartBar cartItems={[]} visibility={true} />);
        expect(screen.getByText('Total')).toBeInTheDocument();
        expect(screen.getByText('$0')).toBeInTheDocument();
        expect(screen.getByRole('button', {name: "Checkout"})).toBeInTheDocument();
    });

    it('renders correct summary total value', () => {
        const {user} = renderWithRouter(<ShoppingCartBar cartItems={mockItems} visibility={true} />);
        expect(screen.getByText('$455')).toBeInTheDocument();
    });

    it('renders cart items', () => {
        const {user} = renderWithRouter(<ShoppingCartBar cartItems={mockItems} visibility={true} />);
        expect(screen.getAllByTestId('cart-item-1')).toHaveLength(3);
    });

    it('visibility style depends on visibility prop', () => {
        renderWithRouter(<ShoppingCartBar cartItems={[]} visibility={false} />);
        expect(screen.getByText('Cart').parentElement).toHaveStyle('display: none');
        cleanup();
        renderWithRouter(<ShoppingCartBar cartItems={[]} visibility={true} />);
        expect(screen.getByText('Cart').parentElement).toHaveStyle('display: initial');
    });
});