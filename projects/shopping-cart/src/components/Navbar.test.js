import React from "react";
import { cleanup, screen, waitFor, act } from "@testing-library/react";
import "@testing-library/jest-dom";

import { renderWithRouter } from "../testUtils";
import Navbar from "./Navbar";

//mocks
const mockfn = jest.fn();  

//setup
afterEach(cleanup);

//tests
describe('Navbar', () => {
    it('renders correct texts', () => {
        const {user} = renderWithRouter(<Navbar cartItems={{}} showCartState={mockfn} />);
        expect(screen.getAllByRole('link').length).toStrictEqual(2);
        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('Products')).toBeInTheDocument();
        expect(screen.getByText('Cart')).toBeInTheDocument();
    });

    it('toggles showCart()', async () => {
        const {user} = renderWithRouter(<Navbar cartItems={{}} showCartState={mockfn} />);
        const button = screen.getByRole('button');
        act(() => {
            user.click(button)
        });

        await waitFor(() => {
            expect(mockfn).toHaveBeenCalled();
        });
    });
});