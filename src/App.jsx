import { useState } from 'react'
import { Button, Card } from 'component-library'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let handleClick = () => {
    setCount((count) => count + 1)
  }

  return (
    <div className='container'>
      <Button type="submit" title="Button" onClick={handleClick}>
        <h1>Count: {count}</h1>
      </Button>
      <Card title="Look I made a card">

      </Card>
    </div>
  )
}

export default App
