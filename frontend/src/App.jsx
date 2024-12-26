
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/main.jsx'
import Game from './pages/game.jsx'
import Tutorial from './pages/tutorial.jsx'
import GameOver from './pages/gameover.jsx'


function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Main/>} />
          <Route path = "/main" element={<Main/>} />
          <Route path = "/game" element={<Game/>} />
          <Route path = "/tutorial" element={<Tutorial/>} />
          <Route path = "/gameover" element={<GameOver/>} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App
