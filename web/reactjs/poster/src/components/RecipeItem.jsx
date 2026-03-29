import React from 'react'
import { FcRating } from 'react-icons/fc'
import { IoMdGlobe } from 'react-icons/io'
import { VscSymbolEvent } from 'react-icons/vsc'

const RecipeItem = ({ recipe }) => {
    return (
        <div className='bg-white rounded-lg shadow p-1'>
            <div className='rounded relative'
                style={{
                    height: '150px',
                    backgroundImage: `url(${recipe.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
            >
                <span className="bg-white p-1 rounded-lg shadow flex items-center gap-1 absolute top-2 right-2">
                    <FcRating /> {recipe.rating}
                </span>
            </div>

            <div className='my-3 p-[1px] bg-gray-100 rounded-full'></div>

            <div className='font-bold text-xl'>
                {recipe.name}
            </div>

            <div className='my-3 p-[1px] bg-gray-100 rounded-full'></div>

            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-1'>
                    <VscSymbolEvent className='mt-[2px]' /> {recipe.difficulty}
                </div>
                <div className='h-fit p-[1px] w-[1px] bg-gray-100'>&nbsp;</div>
                <div className='flex items-center gap-1'>
                    <IoMdGlobe className='mt-[2px]' /> {recipe.cuisine}
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default RecipeItem
