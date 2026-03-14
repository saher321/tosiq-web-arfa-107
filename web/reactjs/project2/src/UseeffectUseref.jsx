import React, { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
const UseeffectUseref = () => {
  const [recipes, setRecipes] = useState([])
  const [data, setData] = useState(12)
  const [isLoading, setIsLoading] = useState(false)

  let value1 = useRef(null)
  let value2 = useRef(null)

  const getValue = () => {
    let myvalue1 = Number(value1.current.value)
    let myvalue2 = Number(value2.current.value)
    console.log(myvalue1+myvalue2)

    setData(data+1)
  }

  useEffect(()=>{
    console.log("Runs on every time")
  })
  useEffect(()=>{
    console.log("Runs on specific state change")
  }, [data])

  
  const getRecipes = async () => {
    try {
      setIsLoading(true)
      const response = await axios.get("https://dummyjson.com/recipes")
      if (response.data && response.data.recipes){
        setRecipes(response.data.recipes)
        setIsLoading(false)
        // setRecipes([])
      }
    } catch (error) {
      setIsLoading(false)
      console.log("ERR: ", error)
    }
  }
  
  useEffect(()=>{
    getRecipes()
    console.log("Runs on page load")
  }, [])


  return (
    <div>
      <h1>Data is {data} - {recipes.length}</h1>
      <input ref={value1} type="text" placeholder="Enter value" />
      <input ref={value2} type="text" placeholder="Enter value" />

      <button onClick={getValue}>Get value</button>
      <hr />
      {/* recipes data */}

      {
        isLoading ? "Loading..." :
        
        recipes.length > 0 ? 
        <ol>
          { recipes.map((recipe, i) => {
            return (
              <li key={i}>{recipe.name}</li>
            )
          })
          }
        </ol> :
        <div>No records were found!</div>
      }

    </div>
  )
}

export default UseeffectUseref
