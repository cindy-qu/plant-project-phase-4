import React from 'react'
import GlobalPlantsList  from './GlobalPlantsList'


const GlobalPlants = ({plantPosts, errors, user_id}) => {


  return (
    <div>
      <h1>Global Plants</h1>
      <GlobalPlantsList
        plantPosts={plantPosts}
        my_user_id={user_id}
      />

      <h3>
        {errors}
      </h3>
      
    </div>
  )
}

export default GlobalPlants