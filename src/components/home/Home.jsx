import { useState } from 'react'
import { Button, Card, Nav } from 'component-library'
import './Home.css'
import { createBrowserRouter, createRoutesFromElements, Route, Outlet, Routes } from 'react-router-dom';

// const appRouter = createBrowserRouter(createRoutesFromElements(
//   <Route path='/' element={ <App/> }>
//     <Route path='button' element={ <Button title="test"/> }/>
//   </Route>
// ));

function Home() {
  const [count, setCount] = useState(0)

  let handleClick = () => {
    setCount((count) => count + 1)
  }

  let navItems = [
    'First',
    'Second',
    'Third'
  ]

  return (
    <div className='nav-container2'>
      <Nav items={navItems}></Nav>
      <Outlet/>
      {/* <Button type="submit" title="Button" onClick={handleClick}>
        <h1>Count: {count}</h1>
      </Button>
      <Card title="Look I made a card">

      </Card> */}
    </div>
  )
}

export default Home