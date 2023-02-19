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

    it('quantity is correct upon typing into input', async () => {
        const {user} = renderWithRouter(<QuantityController min={1} max={99} onQuantityChange={mockfn} />);
        const input = screen.getByTestId('input-number');
        act(() => {
            user.type(input, "7")
        });

        await waitFor(() => {
            expect(input.value).toBe("17");
        });
    });

    it('quantity is correctly capped by min and max', async () => {
        const {user} = renderWithRouter(<QuantityController min={4} max={9} onQuantityChange={mockfn} />);
        const input = screen.getByTestId('input-number');

        //test appending to existing number
        act(() => {
            user.type(input, "2")
        });
        await waitFor(() => {
            expect(input.value).toBe("9");
        });

        //test replacing existing number. hit max limit
        act(() => {
            user.type(input, "1", {
                initialSelectionStart: 0,
                initialSelectionEnd: 1
              })
        });
        await waitFor(() => {
            expect(input.value).toBe("4");
        });

        //test replacing existing number. hit min limit
        act(() => {
            user.type(input, "-3", {
                initialSelectionStart: 0,
                initialSelectionEnd: 1
              })
        });
        await waitFor(() => {
            expect(input.value).toBe("4");
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

    it('quantity is set correctly', async () => {
        const {user} = renderWithRouter(<QuantityController min={4} max={8} onQuantityChange={mockfn} />);
        const buttonAdd = screen.getByText('+');
        const input = screen.getByTestId('input-number');
        act(() => {
            user.click(buttonAdd)
        });
        await waitFor(() => {
            expect(input.value).toBe("5");
        });


        const buttonSubtract = screen.getByText('-');
        act(() => {
            user.click(buttonSubtract)
        });
        await waitFor(() => {
            expect(input.value).toBe("4");
        });
    });
});