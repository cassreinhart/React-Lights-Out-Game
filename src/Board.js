import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function Board({ nrows, ncols, chanceLightStartsOn }) {
  const [board, setBoard] = useState(createBoard());

  function getRandomFloat() {
    return Math.floor(Math.random() * 2);
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard() {
    let initialBoard = [];
    // TODO: create array-of-arrays of true/false values

    for (let i = 0; i < ncols; i++) {

      for(let j = 0; j < nrows; j++) {
        chanceLightStartsOn = 0 ? false : true;
        initialBoard.push([chanceLightStartsOn])
      }
    }
    return initialBoard;
  }

  function hasWon() {
    // TODO: check the board in state to determine whether the player has won.
    return <h2>"You Won"</h2>
  }

  function flipCellsAround(coord) {
    setBoard(oldBoard => {
      const [y, x] = coord.split("-").map(Number);

      const flipCell = (y, x, boardCopy) => {
        // if this coord is actually on board, flip it

        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
        return flipOtherCells(boardCopy);
      };

      // TODO: Make a (deep) copy of the oldBoard
      const boardCopy = [...oldBoard];

      const flipOtherCells = (y, x, boardCopy) => {
        if ((x - 1) >= 0 && (x - 1) < ncols && y >= 0 && y < nrows) {
          boardCopy[y][(x - 1)] = !boardCopy[y][(x - 1)];
        }
        if (x >= 0 && x < ncols && (y + 1) >= 0 && (y + 1) < nrows) {
          boardCopy[(y + 1)][x] = !boardCopy[(y + 1)][x];
        }
        if ((x + 1) >= 0 && (x + 1) < ncols && y >= 0 && y < nrows) {
          boardCopy[y][(x + 1)] = !boardCopy[y][(x + 1)];
        }
        if (x >= 0 && x < ncols && (y - 1) >= 0 && (y - 1) < nrows) {
          boardCopy[(y - 1)][x] = !boardCopy[(y - 1)][x];
        }
      }

      // TODO: in the copy, flip this cell and the cells around it
      flipCellsAround(boardCopy)
      
      // TODO: return the copy
      return boardCopy;
    });
  }

  // if the game is won, just show a winning msg & render nothing else

  // TODO

  // make table board
  return ()

  // TODO
}

export default Board;
