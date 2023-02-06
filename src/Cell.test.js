import React from "react";
import {render} from '@testing-library/react'
import Cell from "./Cell";

test("renders without error", () => {
    render(<Cell />)
})