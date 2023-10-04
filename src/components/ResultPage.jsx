import React, { useContext } from 'react'
import { MemoryContext } from '../context/MemoryContext'

const ResultPage = () => {

  const {players}=useContext(MemoryContext);
  const {newGame}=useContext(MemoryContext);
  const {restartGame}=useContext(MemoryContext);

  players.sort((a, b) => b.point - a.point);

  
  //const maxPointPlayer = players.reduce((max, current) => {
  //  return current.point > max.point ? current : max;
  //}, players[0]);

  const sortByIndex=()=>{

    players.sort((a,b)=>a.id - b.id)
  }

  return (
    <div className='mt-12 p-3 bg-slate-600 flex flex-col items-center rounded-lg'>
      <div className='mb-5 text-white flex flex-col items-center'>
        <p className='text-3xl'>Winner</p>
        <p className='text-xl'>Player {players[0].id}</p>
      </div>

      {
        players.map((player,i)=>(

          <div key={i} className='bg-cyan-600 text-white w-48 p-2 m-2 flex justify-between rounded-sm'>
            <p>Player {player.id}</p>
            <p>{player.point}</p>
          </div>
        ))
      }

      <div className='flex flex-col'>

        <button onClick={newGame} className='p-2 mt-5 mx-3 bg-[#00a884] border hover:border-0 text-white rounded-lg'>New Game</button>
        <button onClick={()=>{sortByIndex(); restartGame();}} className='p-2 mt-5 mx-3 bg-[#d8315b] border hover:border-0 text-white rounded-lg'>Restart</button>

      </div>
     
    </div>
  )
}

export default ResultPage
