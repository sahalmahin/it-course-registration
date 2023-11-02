import { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
import Header from './components/Header/Header'
import Marks from './components/Marks/Marks'

function App() {

  const [marks, setMarks] = useState([]);
  const [hour, setHour] = useState(0);


  const handleMark = (blog, time) => {


    const remainingHour = 20;
    if (hour >= remainingHour) {
      return alert('Credit limit has been exceeded');
    } else {
      setMarks([...marks, blog]);
      setHour(hour + time);
    }
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
