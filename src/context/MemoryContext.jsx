import { createContext, useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const MemoryContext=createContext();

export const MemoryContextProvider=({children})=>{

    const [players,setPlayers]=useState([]);
    const [cards,setCards]=useState([]);

    const navigate=useNavigate();

    const shuffleArray=(array)=>array.sort(()=>Math.random()-0.5)

    const newGame = () => {
      
      cards.map((card)=>{
        card.state="false";
      })

      setCards([]);
      setPlayers([]);

      navigate('/')
    
    };
    
    useEffect(() => {
      if (cards.length===0 || players.length === 0) {
        navigate('/');
      }

    }, [cards, players]);

    const restartGame=()=>{

        players.map((player)=>{
          player.point=0;
        })

        cards.map((card)=>{
          card.state="false";
        })
    
        const tempArray=cards;
        shuffleArray(tempArray);
        setCards(tempArray);

        navigate('/game')
    
      }
    


    return(
    <MemoryContext.Provider value={{players,setPlayers,cards,setCards,shuffleArray,newGame,restartGame}}>
       {children}
    </MemoryContext.Provider>
    )
}