import { useState } from "react"
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'


export function TicTacToe(){

    return(
      <div>
          Tic Tac Toe Game
          <Board/>
        </div>
      )
}
function Board(){
    const { width, height } = useWindowSize()

    const initial_board =[null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null]
    const [board,setBoard] = useState(initial_board)

    const [isXTurn,setisXTurn] = useState(true);
    
    const decideWinner = (board) =>{
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4 ,8],
            [2, 4, 6]
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];

            if (board[a]!== null && board[a] === board[b] && board[b] === board[c])
                {
                    console.log(a,b,c,lines[i])
                    console.log(board)
                    console.log("winner",board[a])
                    return board[a]
                }
            }
            return null;
        }

    const winner = decideWinner(board);

    const handleClick = (index) =>{
        console.log(index);

        if( !winner && !board[index]){
            const boardCopy = [...board];
            boardCopy[index] = isXTurn ? 'X' : 'O';
            setBoard(boardCopy);
            setisXTurn(!isXTurn)
        }
    }

    const restart = () =>{
        setBoard(initial_board);
        setisXTurn(true)

    }
    return(
        <div >    
        { winner ? <Confetti width={width} height={height} gravity={0.05} />: null}  
            <div className="board">
            {board.map((val,index) =><GameBox val={val} 
            onPlayerClick={()=>handleClick(index)}/>)}  
            </div>
            {winner ? <h2>Winner is :{winner}</h2> : null}
            <button onClick={restart}>Restart</button>

        {/* <GameBox /> 
          <GameBox />
          <GameBox />
          <GameBox />
          <GameBox />
          <GameBox />
          <GameBox />
          <GameBox />
        <GameBox /> */}
        </div>
    )
}

function GameBox({val,onPlayerClick}){
    // const [val,setVal] = useState("")
    // const val="X";
    const styles = {
        color: val ==='X' ? 'green' : 'red'
    }
    return(
        <div>
            <div style={styles} 
            onClick = {onPlayerClick}
                //onClick={()=>setVal(val === 'X' ? 'O' :'X')}
                
                className="gameBox">
                {val}
            </div>
        </div>
    )
}