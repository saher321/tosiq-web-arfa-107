import React, { useEffect, useState } from 'react'
import WebLayout from '../../layouts/WebLayout'
import { useParams } from 'react-router'
import axios from 'axios'
import { RECIPES } from '../../utils/APIS'

const PostDetails = () => {
    const [recipe, setRecipe] = useState(null)
    const params = useParams()

    const getRecipe = async () => {
        try {
            const response = await axios.get(RECIPES)
            
            let recipe = response.data.recipes.find((item) => {
                return item.id == params.id
            })
            setRecipe(recipe)

        } catch (error) {
            console.log("ERR: ", error)
        }
    }

    useEffect(() => {
        getRecipe()
    }, [])


  return (
    <WebLayout>
      <div>
        Detail page #{params.id}
      </div>
      <div className="">
      <div className="w-full bg-white rounded-xl shadow-sm overflow-hidden">

        {/* Image */}
        <img
          src={recipe?.image}
          alt={recipe?.name}
          className="w-full h-64 object-cover"
        />

        <div className="p-6 space-y-6">

          {/* Title */}
          <div>
            <h1 className="text-2xl font-semibold">{recipe?.name}</h1>
            <p className="text-sm text-gray-500 mt-1">
              ⭐ {recipe?.rating} ({recipe?.reviewCount}) • {recipe?.cuisine} • {recipe?.difficulty}
            </p>
          </div>

          {/* Info */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            {[
              { label: "Prep", value: `${recipe?.prepTimeMinutes} min` },
              { label: "Cook", value: `${recipe?.cookTimeMinutes} min` },
              { label: "Servings", value: recipe?.servings },
              { label: "Calories", value: `${recipe?.caloriesPerServing} kcal` },
            ].map((item, i) => (
              <div key={i} className="border rounded-lg p-3 text-center">
                <p className="text-gray-500">{item.label}</p>
                <p className="font-medium">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {recipe?.tags.map((tag, i) => (
              <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>

          {/* Ingredients */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Ingredients</h2>
            <ul className="list-disc list-inside space-y-1 text-sm">
              {recipe?.ingredients.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Instructions</h2>
            <ol className="list-decimal list-inside space-y-2 text-sm">
              {recipe?.instructions.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>

        </div>
      </div>
    </div>
    </WebLayout>
  )
}

export default PostDetails
