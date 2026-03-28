import React, { useEffect, useState } from 'react'
import WebLayout from '../../layouts/WebLayout'
import axios from 'axios'

const Posts = () => {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/recipes")
        console.log(response)
        if (response.status == 200){
          setRecipes(response.data.recipes)
        } else {
          console.log("Error in fetching")
        }
      } catch (error) {
        console.log("ERR: ", error)
      }
    }

    getRecipes()
  }, [])

  return (
    <WebLayout>
      <div>
        <div className='grid grid-cols-12 gap-3'>
          { 
            recipes.length > 0 ?
            recipes.map((recipe, i) => {
              return (
                <div className='col-span-4' key={i}>
                  <div className='bg-white rounded-lg shadow p-1'>
                    <div className='rounded'
                      style={{
                        height: '150px',
                        backgroundImage: `url(${recipe.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                      }}
                    >
                    </div>

                      <div className='my-3 p-[1px] bg-gray-100 rounded-full'></div>

                    <div>
                      {recipe.name}
                    </div>
                  </div>
                </div>
              )
            }) : 
            <div>No data</div>
          }
        </div>
      </div>
    </WebLayout>
  )
}

export default Posts
