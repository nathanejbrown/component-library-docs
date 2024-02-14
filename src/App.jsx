import { Button, Card } from 'component-library'
import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/home/Home';

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
