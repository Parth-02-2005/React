import Card  from './components/card'
import './App.css'

function App() {
  let myObject = {
    name: "parth gandhi", age: 21
  }
  return (
    <>
    <Card username= "Details:" some = {myObject}/>
    </>
  )
}

export default App
