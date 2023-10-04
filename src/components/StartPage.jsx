import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MemoryContext } from '../context/MemoryContext'
import { easyElements } from '../data/Cards'
import { mediumElements } from '../data/Cards'
import { hardElements } from '../data/Cards'

const StartPage = () => {

    const navigate=useNavigate();

    const {setPlayers}=useContext(MemoryContext);
    const {setCards}=useContext(MemoryContext);
    const {shuffleArray}=useContext(MemoryContext);

    const [playerCount,setPlayerCount]=useState(0);
    const [difficulity,setDifficulity]=useState("");
    const [error,setError]=useState("");

    const updatePlayerCount=(e)=>{

        if(e.target.value!=''){
            setPlayerCount(Number( e.target.value));
        }
    }

    const updateDifficulity=(e)=>{

        if(e.target.value!=''){
            setDifficulity(e.target.value);
        }
    }

    const startGame=()=>{

        const tempPlayers=[];


        for(let i=1;i<=playerCount;i++){

            tempPlayers.push({
                id:i,
                point:0
            })
        }

        setPlayers(tempPlayers);


        if(difficulity=='easy'){

            shuffleArray(easyElements);
            setCards(easyElements);

        }else if(difficulity=='medium'){

            shuffleArray(mediumElements);
            setCards(mediumElements);

        }else if(difficulity=='hard'){

            shuffleArray(hardElements);
            setCards(hardElements);

        }

        if(playerCount && difficulity){ 

          setPlayerCount()
          navigate('/game');

        }else{
            
          setError("Fill in the required fields")
        }
    }


  return (
    <div className='flex flex-col justify-evenly items-center border-2 h-1/3 xs:w-1/2 lg:w-1/4 rounded-xl m-auto'>
      <select onChange={(e)=>updateDifficulity(e)} name="difficulity-input" id="difficulity-input" className='rounded-lg p-1'>
        <option value="">
            Select Difficulity Type
        </option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>

      </select>
      <select onChange={(e)=>updatePlayerCount(e)} name="player-count-input" id="player-count-input" className='rounded-lg p-1'>
        <option value="">
            Select Player Count
        </option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>

      </select>

      <button onClick={startGame} className='bg-[#00a884] p-2 rounded-xl border-1 border-white text-white'>Start Game</button>
      {error &&

        <p className='text-white'>{error}</p>
      }
    </div>
  )
}

export default StartPage
