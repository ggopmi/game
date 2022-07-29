import React, {useState} from 'react'
import Board from './Board'
import {calculateWinner} from '../helper'

import './Game.css'

export default function Game() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)
  const winner = calculateWinner(board)

  const handleClick = (index) => {
    const boardCopy = [...board]
    if (winner || boardCopy[index]) return

    boardCopy[index] = xIsNext ? 'X' : 'O'
    setBoard(boardCopy)
    setXIsNext(!xIsNext)
  }

  const startNewGame = () => {
    return <button className="start__btn" onClick={() => {
        setBoard(Array(9).fill(null))
        setXIsNext(true)
    }}>Clean up the board</button>
  }

  const gameStatus = () => {
    const allSquaresEntered = board.every(e => e != null)
    if(allSquaresEntered){
        return 'Draw, game is over'
    }
    return winner ? 'The winner is ' +  winner : 'Move of ' + (xIsNext ? 'X' : 'O')
  }

  return (
    <div className="wrapper">
        {startNewGame()}
        <Board squares={board} click={handleClick} />
        <p className="game__info">
            {gameStatus()}
        </p>
    </div>
  )
}
