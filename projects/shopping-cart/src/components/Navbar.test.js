import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Navbar from "./Navbar";

afterEach(cleanup);

const mockfn = jest.fn();

const renderNavbar = () => {
    render(
        <BrowserRouter>
            <Navbar cartItems={{}} showCartState={mockfn} />
        </BrowserRouter>
    );
}

describe('Navbar', () => {

    it('renders correct texts', () => {
        renderNavbar();
        expect(screen.getAllByRole('link').length).toStrictEqual(2);
        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('Products')).toBeInTheDocument();
        expect(screen.getByText('Cart')).toBeInTheDocument();
    });
});