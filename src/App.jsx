import { useState } from 'react';
import './App.css'
import QuoteBox from './components/QuoteBox';
import db from "./db/quotes.json"


const arrayColors = ["#b31237", "#f03813", "#ff8826", "#ffb914", "#2c9fa3", "#c8ad8d"]

const getRandom = (arrayElements) => {
  const quantityValues = arrayElements.length;
  const randomIndex = Math.floor(Math.random() * quantityValues);
  return arrayElements[randomIndex];
}

function App() {

  const [quote, setQuote] = useState(getRandom(db))
  const [color, setColor] = useState(getRandom(arrayColors))

  const newQuote = () => {
    setQuote(getRandom(db))
    setColor(getRandom(arrayColors))
  }

  return (
    <div className="App" style={{ backgroundColor: color }}>
      <QuoteBox
        quote={quote}
        newQuote={newQuote}
        color={color}
      />
    </div>
  )
}

export default App
