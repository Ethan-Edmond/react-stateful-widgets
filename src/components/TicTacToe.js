import React, { useState } from 'react';

function initialGame(){
  const game = [];
  for (let i = 0; i < 9; i++){
    let square = {
      x: i % 3,
      y: Math.floor(i / 3),
      value: null,
      id: i,
    };
    game.push(square);
  }
  return game;
}

export default function TicTacToe(props){
  const [game, setGame] = useState(initialGame());
  const [win, setWin] = useState(false);

  const checkWin = (game, playerString) => {
    let checkAry = [];

    for (let i = 0; i < 3; i++){ // 3 rows and 3 columns
      const row = game.filter(square => square.x === i);
      checkAry.push(row);
      const col = game.filter(square => square.y === i);
      checkAry.push(col);
    }
    // finding diagonals doesn't need an i variable
    const leftDiag = game.filter(square => square.x === square.y);
    checkAry.push(leftDiag);
    const rightDiag = game.filter(square => (square.x + square.y) === 2);
    checkAry.push(rightDiag);

    const reduceCount = (acc, square) => {
      return acc + (square.value === playerString);
    };
    const winCheck = line => line.reduce(reduceCount, 0) === 3;
    return checkAry.some(winCheck);
  };

  const checkWinnable = (game) => {

  };
  const lossPrevent = (game) => {

  };

  const playSquare = (square) => {
    const tempGame = [...game];
    if (!square.value && !win){
      tempGame[square.id].value = "X";
      if (checkWin(tempGame, "X")){
        setWin(true);
      } else if (checkWinnable(tempGame)){
        // win;
      } else {
        let lossPrevent = checkNextwin(tempGame);
        if (lossPrevent !== null){
          tempGame[lossPrevent].value = "O";
        } else {
          // make a random move
        }
      }
      setGame(tempGame);
    }
  };

  const resetGame = (event) => {
    setGame(initialGame());
    setWin(false);
  };

  return (
    <div className="widget-tictactoe container">
      <h2>Tic-Tac-Toe</h2>
      <div className="game">
        {
          game.map(square =>
              <div className="game-square" key={square.id} onClick={e => playSquare(square)}>
              {square.value}
            </div>
          )
        }
      </div>
        {
          win && <h3>"Win!"</h3>
        }
        <button onClick={resetGame}>Reset Game</button>
    </div>
  );
}
