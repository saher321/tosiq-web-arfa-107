import React, { useRef } from 'react'

const UseeffectUseref = () => {

  let value1 = useRef(null)
  let value2 = useRef(null)
  const getValue = () => {
    let myvalue1 = Number(value1.current.value)
    let myvalue2 = Number(value2.current.value)
    console.log(myvalue1+myvalue2)
  }
  return (
    <div>
      <input ref={value1} type="text" placeholder="Enter value" />
      <input ref={value2} type="text" placeholder="Enter value" />

      <button onClick={getValue}>Get value</button>
    </div>
  )
}

export default UseeffectUseref
