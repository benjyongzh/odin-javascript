import React from "react";
import { cleanup, screen, waitFor, act } from "@testing-library/react";
import "@testing-library/jest-dom";

import { renderWithRouter } from "../testUtils";
import QuantityController from "./QuantityController";

//mocks
const mockfn = jest.fn();  

//setup
afterEach(cleanup);

//tests
describe('QuantityController', () => {
    it('renders correct texts', () => {
        const {user} = renderWithRouter(<QuantityController min={4} max={8} onQuantityChange={mockfn} />);
        expect(screen.getAllByRole('button').length).toStrictEqual(2);
        expect(screen.getByText('-')).toBeInTheDocument();
        expect(screen.getByText('+')).toBeInTheDocument();
        expect(screen.getByTestId('input-number')).toBeInTheDocument();
    });

    it('onQuantityChange() is called when user types input', async () => {
        const {user} = renderWithRouter(<QuantityController min={4} max={8} onQuantityChange={mockfn} />);
        const input = screen.getByTestId('input-number');
        act(() => {
            user.type(input, "7")
        });

        await waitFor(() => {
            expect(mockfn).toHaveBeenCalled();
        });
    });

    it('quantity is correct upon onQuantityChange()', async () => {
        const {user} = renderWithRouter(<QuantityController min={1} max={99} onQuantityChange={mockfn} />);
        const input = screen.getByTestId('input-number');
        act(() => {
            user.type(input, "7")
        });

        await waitFor(() => {
            expect(input.value).toBe("7");
        });
    });

    it('onQuantityChange() is called when button is pressed', async () => {
        const {user} = renderWithRouter(<QuantityController min={4} max={8} onQuantityChange={mockfn} />);
        const button = screen.getByText('+');
        const input = screen.getByTestId('input-number');
        act(() => {
            user.click(button)
        });

        await waitFor(() => {
            expect(mockfn).toHaveBeenCalled();
        });
    });

    it.skip('renders correct cart item quantity', async () => {
        const {user} = renderWithRouter(<QuantityController cartItems={["item 1", "item 2", "item 3"]} showCartState={mockfn} />);
        const button = screen.getByRole('button');

        await waitFor(() => {
            expect(button).toHaveTextContent("Cart (3)");
        });
    });
});