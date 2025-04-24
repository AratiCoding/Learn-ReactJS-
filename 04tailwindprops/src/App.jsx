
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    name: "arati",
    RollNo:7,

  }
  let arr=[1,2,3];

  return (
    <>
      <Card username="chaicode" someObject={arr} btnText="visit me"/>
    
    </>
  )
}

export default App
