import React from "react";
import { render, cleanup, screen, act, waitFor} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import ItemCard from "./ItemCard";

import { fetchItemInfo as api } from "../api";

afterEach(cleanup);

const mockfn = jest.fn();
jest.mock("../api")

const renderCard = () => {
    act(() => {
        render(
            <BrowserRouter>
                <ItemCard itemName="mockItem" itemURL="#" addItemToCart={mockfn} />
            </BrowserRouter>
        );
    });
}

describe('item card', () => {

    it('has correct texts', () => {
        renderCard();
        expect(screen.getByRole('button')).toHaveTextContent('Quick Add');
        expect(screen.getByRole('link')).toHaveTextContent('Details');
        expect(screen.getAllByRole('img').length).toStrictEqual(1);
    });

    it('Quick Add Button adds to cart', () => {
        renderCard();
        const button = screen.getByRole("button", { name: "Quick Add" });
        userEvent.click(button);
        expect(mockfn).toHaveBeenCalled();
    });

    it('displays fetched data', async () => {
        api.mockResolvedValue({
            name: "mockItemName",
            id: 27,
            cost: 723,
            image: "http://image.png",
        });

        renderCard();

        await waitFor(() => {
            expect(screen.getByText("mockItemName")).toBeInTheDocument();
        });
        await waitFor(() => {
            expect(screen.getByText("$ 723")).toBeInTheDocument();
        });
    });
});