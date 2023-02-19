import React from "react";
import { cleanup, screen, waitFor, act } from "@testing-library/react";
import "@testing-library/jest-dom";

import { renderWithRouter } from "../testUtils";
import ProductsPage from "./ProductsPage";
import { createMemoryHistory } from "history";

//mocks
const mockfn = jest.fn();  

//setup
afterEach(cleanup);

//tests
describe('ProductsPage', () => {
    it('renders correct texts', () => {
        const {user} = renderWithRouter(<ProductsPage />);
        expect(screen.getAllByRole('link').length).toStrictEqual(2);
        expect(screen.getByText('Pokeballs')).toBeInTheDocument();
        expect(screen.getByText('Potions')).toBeInTheDocument();
    });

    it('links have correct hrefs', () => {
        const {user} = renderWithRouter(<ProductsPage />);
        const pokeballLink = screen.getByRole('link', {name: "Pokeballs"});
        expect(pokeballLink).toHaveAttribute('href', '/pokeballs')
        const potionLink = screen.getByRole('link', {name: "Potions"});
        expect(potionLink).toHaveAttribute('href', '/potions')
    });

});