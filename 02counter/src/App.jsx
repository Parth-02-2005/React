import './App.css'
import {useState} from 'react'

function App() {

  let [counter, setcounter] = useState(0)

  const addValue = () => {
    if(counter >= 30) {
      return counter;
    } else {
      setcounter(counter + 1)
    }
    
    console.log(counter);
  }

  const removeValue = () => {
    if(counter <= 0){
      return counter;
    }else {setcounter(counter - 1);}
    console.log(counter);
  }

  return (
    <>
      <h1>Parth Gandhi</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
