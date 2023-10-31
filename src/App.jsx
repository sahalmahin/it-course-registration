import { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
import Header from './components/Header/Header'
import Marks from './components/Marks/Marks'

function App() {

  const [marks, setMarks] = useState([]);

  const handleMark = blog => {
    const newMarks = [...marks, blog];
    setMarks(newMarks);
  }

  return (
    <>

      <Header></Header>
      <div className='flex justify-center gap-10'>
        <Cards handleMark={handleMark}></Cards>
        <Marks marks={marks}></Marks>
      </div>

    </>
  )
}

export default App
