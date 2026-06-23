import React, { useState } from "react";
import "./App.css";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const winner = calculateWinner(board);

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";

    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  };

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
  };

  const status = winner
    ? `Winner: ${winner}`
    : board.every((cell) => cell)
    ? "It's a Draw!"
    : `Turn: ${isXTurn ? "X" : "O"}`;

  return (
    <div className="container">
      <h1>Tic-Tac-Toe</h1>
      <h2>{status}</h2>

      <div className="board">
        {board.map((cell, index) => (
          <button
            key={index}
            className="square"
            onClick={() => handleClick(index)}
          >
            {cell}
          </button>
        ))}
      </div>

      <button className="restart" onClick={restartGame}>
        Restart Game
      </button>
    </div>
  );
}

function calculateWinner(board) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let line of lines) {
    const [a, b, c] = line;

    if (
      board[a] &&
      board[a] === board[b] &&
      board[a] === board[c]
    ) {
      return board[a];
    }
  }

  return null;
}

export default App;