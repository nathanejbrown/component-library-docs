import { useState } from 'react'
import { Button, Card, Nav } from 'component-library'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, Outlet, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/home/Home';

const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={ <App/> }>
    <Route path='button' element={ <Button/> }/>
  </Route>
));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="button" element={<Button title="test" />}></Route>
          <Route path="card" element={<Card title="Look a card" />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
