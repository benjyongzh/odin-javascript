import React from "react";
import { cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { renderWithRouter } from "../testUtils";
import HomePage from "./HomePage";

//mocks
const mockfn = jest.fn();

//setup
afterEach(cleanup);

//tests
describe('Home Page', () => {
    it('renders correct texts', () => {
        const {user} = renderWithRouter(<HomePage />);
        expect(screen.getByText('Pok-e-Mart')).toBeInTheDocument();
        expect(screen.getByRole('link')).toHaveTextContent('Store');
        expect(screen.getAllByRole('img').length).toStrictEqual(1);
    })

    it('link points to correct product URL', () => {
        const {user} = renderWithRouter(<HomePage />);
        const button = screen.getByRole("link", { name: "Store" });
        // await waitFor(() => {
            expect(button).toHaveAttribute('href', '/products')
        // });

    });
});