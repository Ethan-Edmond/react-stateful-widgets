import React, { useState } from 'react';

const initialGame = [];
for (let i = 0; i < 3; i++){
  let yAry = [];
  for (let i = 0; i < 3; i++){
    yAry.push(null);
  }
  initialGame.push(yAry);
}

export default function TicTacToe(props){
  const [game, setGame] = useState(initialGame);
  return (
    <div className="widget-tictactoe container">
      <h2>Tic-Tac-Toe</h2>
      <div className="game">
      </div>
    </div>
  );
}
