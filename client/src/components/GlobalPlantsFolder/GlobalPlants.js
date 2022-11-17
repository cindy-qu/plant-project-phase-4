import React from 'react'
import GlobalPlantsList  from './GlobalPlantsList'


const GlobalPlants = ({plantPosts, errors, user_id, setUpdateReviews}) => {


  return (
    <div className='page-container global-page' >
      <h1>Global Plants</h1>
      <GlobalPlantsList
        plantPosts={plantPosts}
        my_user_id={user_id}
        setUpdateReviews={setUpdateReviews}
      />

      <h3>
        {errors}
      </h3>
      
    </div>
  )
}

export default GlobalPlants