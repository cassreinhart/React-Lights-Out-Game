import React from "react";
import {render, fireEvent, getByText} from '@testing-library/react'
import Board from "./Board";

it('should render a board instance', () => {
    render(<Board />)
})

it('should match snapshot', () => {
    const{ asFragment } = render(<Board nrows={4} ncols={4} chanceLightStartsOn={1.0}  />);

    expect(asFragment()).toMatchSnapshot()
})

it('displays winning message when all lights are out', () => {
    const { getByText } = render(<Board nrows={4} ncols={4} chanceLightStartsOn={0.0}  />);
    const h2 = getByText("You Won!")

    expect(h2).toBeInTheDocument()
})

