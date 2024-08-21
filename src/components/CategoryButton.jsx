import React from 'react'
import useCategoryStore from '../store/useCategoryStore'

const CategoryButton = ({category: {id,name,isActive},current}) => {
  const {activeCategory} = useCategoryStore()

  const handleClick = () => {
    activeCategory(id)
  }
  return (
    <button onClick={handleClick}  className={`${ isActive && "bg-black text-white " } border-2 rounded-md text-wrap  border-black px-4 py-2 me-2`}>{name}</button>
    
  )
}

export default CategoryButton