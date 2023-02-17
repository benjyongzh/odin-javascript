import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import HomePage from "./HomePage";

afterEach(cleanup);

test('check texts', () => {
    render(
        <BrowserRouter>
            <HomePage />
        </BrowserRouter>
    );
    expect(screen.getByText('Pok-e-Mart')).toBeInTheDocument();
});