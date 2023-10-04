import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import StartPage from './components/StartPage'
import GamePage from './components/GamePage'
import ResultPage from './components/ResultPage'

function App() {

  return (
    <div id='App' className='flex flex-col items-center bg-[#176B87] h-screen font-oswald'>
      <header className='flex justify-center p-3 bg-cyan-500 w-full'>
        <h1 className='text-3xl text-white '>
          Memory Game
        </h1>
      </header>

      <Routes>
        <Route path='/' element={<StartPage/>} />
        <Route path='/game' element={<GamePage/>} />
        <Route path='/finish' element={<ResultPage/>} />
      </Routes>

    </div>
  )
}

export default App
