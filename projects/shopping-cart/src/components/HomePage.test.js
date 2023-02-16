import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import HomePage from "./HomePage";

afterEach(cleanup);

test('check texts', () => {
    render(<HomePage />);
    expect(screen.getByText('Pok-e-Mart')).toBeInTheDocument();
});