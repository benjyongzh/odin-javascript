import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Navbar from "./Navbar";

afterEach(cleanup);

test('check texts', () => {
    render(
        <BrowserRouter>
            <Navbar cartItems={{}} showCartState={jest.fn()} />
        </BrowserRouter>
    );
    expect(screen.getAllByRole('link').length).toStrictEqual(2);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByText('Cart')).toBeInTheDocument();
    // console.log(screen.getAllByRole('link').length);
});