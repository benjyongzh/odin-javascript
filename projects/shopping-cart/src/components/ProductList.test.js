import React from "react";
import { cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { renderWithRouter } from "../testUtils";
import ProductList from "./ProductList";

//mocks
const mockfn = jest.fn();  

jest.mock("./ItemCard", () => () => {
    return <mockItemCard data-testid="item-card-1"/>;
});

//setup
afterEach(cleanup);

//tests
describe('ProductList', () => {
    it('renders input bar', () => {
        const {user} = renderWithRouter(<ProductList products={[]} addItemToCart={mockfn}/>);
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('renders correct placeholder in input', () => {
        const {user} = renderWithRouter(<ProductList products={[]} addItemToCart={mockfn}/>);
        const input = screen.getByRole('textbox');
        expect(input).toHaveAttribute("placeholder", "search for item");

    });

    it('renders ItemCards', async () => {
        const {user} = renderWithRouter(<ProductList products={["item 1", "item 2"]} addItemToCart={mockfn}/>);
        expect(screen.getAllByTestId("item-card-1")).toHaveLength(2);
    });
});