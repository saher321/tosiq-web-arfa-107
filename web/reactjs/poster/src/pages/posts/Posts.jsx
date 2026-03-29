import React, { useEffect, useState } from 'react'
import WebLayout from '../../layouts/WebLayout'
import RecipeItem from '../../components/RecipeItem'
import axios from 'axios'
import { Link } from 'react-router'
import { RECIPES } from '../../utils/APIS.jsx'

const Posts = () => {
  const [recipes, setRecipes] = useState([])

  const getRecipes = async () => {
      try {
        // const response = await axios.get("https://dummyjson.com/recipes")
        const response = await axios.get(RECIPES)
        console.log(response.data)
        if (response.status == 200){
          setRecipes(response.data.recipes)
        } else {
          console.log("Error in fetching")
        }
      } catch (error) {
        console.log("ERR: ", error)
      }
    }

  useEffect(() => {
    
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
                  <Link to={`/posts/${recipe.id}`}>
                    <RecipeItem recipe={recipe} />                  
                  </Link>
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
