import React from "react";
import { render, cleanup, screen, act, waitFor} from "@testing-library/react";
import "@testing-library/jest-dom";

import { fetchItemInfo as api } from "../api";
import { renderWithRouter } from "../testUtils";
import ItemCard from "./ItemCard";

//mocks
const mockfn = jest.fn();
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
})

afterEach(cleanup);

//tests
describe('item card', () => {

    it('renders correct fixed texts', async () => {
        const {user} = renderWithRouter(<ItemCard />);
        await waitFor(() => {
            expect(screen.getByRole('button')).toHaveTextContent('Quick Add');
            expect(screen.getByRole('link')).toHaveTextContent('Details');
            expect(screen.getAllByRole('img').length).toStrictEqual(1);
        });
    });

    it('Quick Add Button adds to cart', async () => {
        const {user} = renderWithRouter(<ItemCard itemName="mockItem" itemURL="#" addItemToCart={mockfn} />);
        const button = screen.getByRole("button", { name: "Quick Add" });

        user.click(button);

        await waitFor(() => {
            expect(mockfn).toHaveBeenCalled();
        });
    });

    it('displays fetched data', async () => {
        const {user} = renderWithRouter(<ItemCard itemName="mockItem" itemURL="#" addItemToCart={mockfn} />);

        await waitFor(() => {
            expect(screen.getByText("mockItemName")).toBeInTheDocument();
        });
        await waitFor(() => {
            expect(screen.getByText("$ 723")).toBeInTheDocument();
        });
    });

    it('link points to correct product id', async () => {
        const {user} = renderWithRouter(<ItemCard itemName="mockItem" itemURL="#" addItemToCart={mockfn} />);
        const button = screen.getByRole("link", { name: "Details" });
        await waitFor(() => {
            expect(button).toHaveAttribute('href', '/products/27')
        });

    });
});