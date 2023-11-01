import { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
import Header from './components/Header/Header'
import Marks from './components/Marks/Marks'

function App() {

  const [marks, setMarks] = useState([]);
  const [credit, setCredit] = useState(0);
  // const [remaining, setRemaining] = useState(0);

  const handleMark = (blog, time) => {
    const newMarks = [...marks, blog];
    setMarks(newMarks);
    const newCredit = credit + time;
    setCredit(newCredit);
  }

  return (
    <>

      <Header></Header>
      <div className='flex justify-center gap-10'>
        <Cards handleMark={handleMark}></Cards>
        <Marks marks={marks} credit={credit}></Marks>
      </div>

    </>
  )
}

export default App
