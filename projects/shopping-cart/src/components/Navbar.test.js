import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import Navbar from "./Navbar";

afterEach(cleanup);

test.skip('check texts', () => {
    render(<Navbar />);
    expect(screen.getAllByRole('link').length).toStrictEqual(3);
});