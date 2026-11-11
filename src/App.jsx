import { useState } from 'react'
import './App.css'

import Card from "./components/Card"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card>
        <Card.Title>Warning</Card.Title>
        <Card.Message>The world is coming to an end!</Card.Message>
      </Card>
    </>
  )
}

export default App
