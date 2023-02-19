import React from "react";
import { render, cleanup, screen, act, waitFor} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { createMemoryHistory } from "history";
import "@testing-library/jest-dom";
import { renderWithRouter } from "../testUtils";
import userEvent from "@testing-library/user-event";

import ItemCard from "./ItemCard";

import { fetchItemInfo as api } from "../api";

afterEach(cleanup);

const mockfn = jest.fn();
jest.mock("../api");

// const renderCard = () => {
//     act(() => {
//         render(
//             <BrowserRouter>
//                 <ItemCard itemName="mockItem" itemURL="#" addItemToCart={mockfn} />
//             </BrowserRouter>
//         );
//     });
// }

describe('item card', () => {

    it('has correct fixed texts', () => {
        const {user} = renderWithRouter(<ItemCard />);
        expect(screen.getByRole('button')).toHaveTextContent('Quick Add');
        expect(screen.getByRole('link')).toHaveTextContent('Details');
        expect(screen.getAllByRole('img').length).toStrictEqual(1);
    });

    it.only('Quick Add Button adds to cart', () => {
        const {user} = act(() => {
            renderWithRouter(<ItemCard itemName="mockItem" itemURL="#" addItemToCart={mockfn} />);
        })
        const button = screen.getByRole("button", { name: "Quick Add" });
        user.click(button);
        expect(mockfn).toHaveBeenCalled();
    });

    it('displays fetched data', async () => {
        api.mockResolvedValue({
            name: "mockItemName",
            id: 27,
            cost: 723,
            description: "mock description",
            image: "http://image.png",
        });

        const {user} = renderWithRouter(<ItemCard itemName="mockItem" itemURL="#" addItemToCart={mockfn} />);

        await waitFor(() => {
            expect(screen.getByText("mockItemName")).toBeInTheDocument();
        });
        await waitFor(() => {
            expect(screen.getByText("$ 723")).toBeInTheDocument();
        });
    });

    it('link points to correct product id', async () => {
        api.mockResolvedValue({
            name: "mockItemName",
            id: 27,
            cost: 723,
            description: "mock description",
            image: "http://image.png",
        });

        const history = createMemoryHistory(/* { initialEntries: ['/mock/route'] } */);
        // history.push = jest.fn();
        // const user = userEvent.setup();

        // renderCard();
        
        render(
            <BrowserRouter history={history}>
                <ItemCard itemName="mockItem" itemURL="#" addItemToCart={mockfn} />
            </BrowserRouter>
        );

        // expect(history.location.pathname).toEqual('/mock/route');

        const button = screen.getByRole("link", { name: "Details" });
        // act(() => {
            await userEvent.click(button);
        // });

        await waitFor(() => {
            // expect(history.location.pathname).toEqual('/products/27');
            expect(screen.getByText("mock description")).toBeInTheDocument();
        });

    });
});