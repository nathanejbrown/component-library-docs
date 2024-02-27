import { Button, Card } from 'component-library'
import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path=":component"></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
