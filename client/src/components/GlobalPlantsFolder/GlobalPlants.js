import React from 'react'
import GlobalPlantsList  from './GlobalPlantsList'

const GlobalPlants = ({plantPosts, errors}) => {
  console.log(plantPosts)
  
  return (
    <div>
      <h1>Global Plants</h1>
      <GlobalPlantsList
        plantPosts={plantPosts}
      />

      <h3>
        {errors}
      </h3>
      
    </div>
  )
}

export default GlobalPlants