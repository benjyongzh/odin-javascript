import React from "react";
import { cleanup, screen, act, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import { fetchItemInfo as api } from "../api";
import { renderWithRouter } from "../testUtils";
import ProductDetails from "./ProductDetails";

//mocks
const mockQuantityChange = jest.fn();  
const mockAddToCart = jest.fn();  

jest.mock("./QuantityController", () => () => {
    return <mockQuantityController data-testid="mockQC" min={5} max={14} onQuantityChange={mockQuantityChange}/>;
});

jest.mock("../api");

//setup
beforeEach(() => {
    api.mockResolvedValue({
        name: "mockItemName",
        id: 27,
        cost: 723,
        description: "mock description",
        image: "http://image.png",
    });
});

afterEach(cleanup);

//tests
describe('ProductDetails', () => {
    it('renders fixed texts, QuantityController, and an image', () => {
        const {user} = renderWithRouter(<ProductDetails addItemToCart={mockAddToCart}/>);
        expect(screen.getByRole('button')).toHaveTextContent('Add To Cart');
        expect(screen.getAllByRole('img').length).toStrictEqual(1);
        expect(screen.getByTestId("mockQC")).toBeInTheDocument();
    });

    it('renders fetched info', async () => {
        const {user} = renderWithRouter(<ProductDetails addItemToCart={mockAddToCart}/>);
        await waitFor(() => {
            expect(screen.getByText('mockItemName')).toBeInTheDocument();
            expect(screen.getByText('mock description')).toBeInTheDocument();
            expect(screen.getByRole('img')).toHaveAttribute('alt', 'mockItemName');
        });

    });

    it('calls AddToCart when button is clicked', async () => {
        const {user} = renderWithRouter(<ProductDetails addItemToCart={mockAddToCart}/>);
        const button = screen.getByRole('button', {name: "Add To Cart"});

        act(() => {
            user.click(button);
        });

        await waitFor(() => {
            expect(mockAddToCart).toHaveBeenCalled();
        });
        
    });
});