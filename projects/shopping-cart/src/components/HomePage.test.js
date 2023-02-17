import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import HomePage from "./HomePage";

afterEach(cleanup);

const mockfn = jest.fn();

const renderHomePage = () => {
    render(
        <BrowserRouter>
            <HomePage />
        </BrowserRouter>
    );
}

describe('Home Page', () => {
    it('renders correct texts', () => {
        renderHomePage();
        expect(screen.getByText('Pok-e-Mart')).toBeInTheDocument();
        expect(screen.getByRole('link')).toHaveTextContent('Store');
        expect(screen.getAllByRole('img').length).toStrictEqual(1);
    })
    
});