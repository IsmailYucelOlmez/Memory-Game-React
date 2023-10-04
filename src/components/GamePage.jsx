import React, { useContext, useEffect, useState } from 'react'
import { MemoryContext } from '../context/MemoryContext';
import { useNavigate } from 'react-router-dom';

const GamePage = () => {
 
  const {cards}=useContext(MemoryContext);
  const {players}=useContext(MemoryContext); 
  const {newGame}=useContext(MemoryContext);
  const {restartGame}=useContext(MemoryContext);

  const cardSections=document.querySelectorAll(".card");

  const [rownumber,setRownumber]=useState(0);
  const [playerRow,setPlayerRow]=useState(1);
  const [value1,setValue1]=useState(0);
  const [value2,setValue2]=useState(0);

  const navigate=useNavigate();


  const finishGame=(finish)=>{

    if(finish){
    
      resetData();

      navigate('/finish');
    }
   
  }

  const resetData=()=>{

    setRownumber(0);
    setPlayerRow(1);
    setValue1(0);
    setValue2(0);

  }

  const win=()=>{
    
    if(value1==value2){

      players.map((player,i)=>{
        if(i+1==playerRow){
          player.point+=10;
        }
      })

      let finished=true;

      cards.map((card)=>{

        if(card.value==value1 || card.value==value2){
            
          card.state="done";
        }

        if(card.state!="done"){

          finished=false; 
        }
          
      })
  
        finishGame(finished);
    }
  }

  
  const nextRow=()=>{

    for(let card of cardSections){

      card.disabled=true;
    }

    setTimeout(()=>{

      for(let card of cardSections){
   
        card.disabled=false;
      }

      cards.map((card)=>{

        if(card.state!="done") card.state="false"
      })

      win();

      setPlayerRow((prev)=>prev==players.length ? 1 :prev+1)

      setRownumber(0);
      setValue1(0);
      setValue2(0);
      
     },2000)
    
  }
  


  const selectCard=(e)=>{

    if(value1==0){
      setValue1(e.target.textContent)
    }
    else{
      setValue2(e.target.textContent);
    }

    cards.map((card)=>{

      if(cards.indexOf(card)==e.currentTarget.id){
       
        card.state='true'; 
      }
    })  
    
    setRownumber((prev)=>prev+1);
    
  }

  useEffect(()=>{
    
    if(rownumber==2){

       nextRow();
    }

  },[rownumber])


  return (
    <div className='h-4/5 mt-8 flex justify-around'>
        

        <div className='w-1/5 bg-[#3c6e71] flex flex-col items-center justify-evenly text-white rounded-lg'>

          <div className='m-2 w-full xs:flex xs:flex-col xs:justify-evenly xs:items-center lg:flex-row lg:items-center'>   
            <button onClick={()=>{resetData(); newGame();}} className='bg-[#00a884] border hover:border-0 xs:m-0 xs:p-2 p-2 m-2 rounded-lg '>New Game</button>
            <button onClick={()=>{resetData(); restartGame();}} className='bg-[#e63946] border hover:border-0 p-2 m-2 rounded-lg'>Restart</button>
          </div> 

          {
              players.map((player,i)=>(

                <div key={i} className='w-full  my-2 p-2 bg-[#284b63] '>

                  <div className='flex justify-between items-center'>
                    <p>Player {i+1}</p>

                    {playerRow==i+1 && 
                  
                      <div className='bg-green-500 h-4 w-4 rounded-full'></div>
                    }

                  </div>
                  
                  <p className='text-3xl mt-2'>{player.point}</p>   

                </div>
                
              ))
          }

      

        </div>

        <div className=' border-2 flex justify-center items-center flex-wrap w-3/4 rounded-lg'>
          {
            cards.map((card,i)=>(

              <button id={i} key={i} disabled={card.state=="done" || card.state=="true"} onClick={(e)=>{selectCard(e)}} className={`${card.state=="true" ? "text-[#bc4749]":"text-[#f2e8cf]"} ${card.state!="done" ? "bg-[#f2e8cf]":"bg-[#bc4749]"} card p-2 my-2 rounded-lg flex items-center justify-center xs:mx-2 xs:w-10 xs:h-9 sm:w-11 md:w-12 md:h-12 lg:h-16 2xl:mx-8`}>
                <p className='text-xl'>{card.value}</p>
              </button>
              
            ))
          }
        </div>

    </div>
  )
}

export default GamePage
