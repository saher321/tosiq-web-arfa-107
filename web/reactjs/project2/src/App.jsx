import { useState } from "react"

const App = () => {
  // const [ value, setValue ] = useState(["Red", "Green", "Blue"])
  const [ value, setValue ] = useState(10)
  console.log(value)

  const [ count, setCount ] = useState(0)

  const add = () => {
    // if (count == 5) return alert("TOO MANY ATTEMPTS")
    setCount(count + 1)
  }

  const minus = () => {
    if (count < 1) return null;
    setCount(count-1)
  }
  // const updateColors = () => {
  //   // const newValue = [...value, "Purple"]
    
  //   let newValue = 20
  //   setValue(newValue)
  //   console.log("Updated values", value)
  // }

  return (
    <>
    <div>Update value by pressing Update button</div>
    {/* <button onClick={updateColors}>Update Colors</button> */}

    <br />

    <button onClick={add}>Add value</button>
    <div>{count}</div>
    <button onClick={minus}>Remove value</button>
    </>
  )

}

export default App