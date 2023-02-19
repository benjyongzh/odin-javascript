import React from "react";
import { cleanup, screen, act, waitFor} from "@testing-library/react";
import "@testing-library/jest-dom";

import { fetchItemInfo as api } from "../api";
import { renderWithRouter } from "../testUtils";
import CartItem from "./CartItem";

//mocks
const mockfn = jest.fn();
jest.mock("../api");

//setup
beforeEach(() => {
    api.mockResolvedValue({
        name: "mockItemName",
        id: 27,
        cost: 26,
        shortDescription: "mock short description",
        image: "http://image.png",
    });
})

afterEach(cleanup);

//tests
describe('item card', () => {
    it('displays quantity', async () => {
        const {user} = renderWithRouter(<CartItem quantity={4} id={62} />);
        expect(screen.getByText('4')).toBeInTheDocument();
    });

    it('displays fetched data', async () => {
        const {user} = renderWithRouter(<CartItem quantity={4} id={62} />);

        await waitFor(() => {
            expect(screen.getByText('mockItemName')).toBeInTheDocument();
            expect(screen.getByText('mock short description')).toBeInTheDocument();
            expect(screen.getByText('26')).toBeInTheDocument();
            expect(screen.getByText('104')).toBeInTheDocument();
            expect(screen.getByRole('img')).toHaveAttribute('alt', 'mockItemName');
        });
    });
});