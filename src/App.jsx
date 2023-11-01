import { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
import Header from './components/Header/Header'
import Marks from './components/Marks/Marks'

function App() {

  const [marks, setMarks] = useState([]);
  const [hour, setHour] = useState(0);


  const handleMark = (blog, time) => {
    const newMarks = [...marks, blog];
    setMarks(newMarks);
    const newCredit = hour + time;
    setHour(newCredit);
    // const remaining = marks.filter(mark => mark.id === id)
    // setMarks(remaining);
    // alert('Already added');
  }

  return (
    <>

      <Header></Header>
      <div className='flex justify-center gap-10'>
        <Cards handleMark={handleMark}></Cards>
        <Marks marks={marks} hour={hour} ></Marks>
      </div>

    </>
  )
}

export default App
