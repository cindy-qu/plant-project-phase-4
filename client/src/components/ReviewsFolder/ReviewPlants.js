import React from 'react'
import ReviewPlantsList from './ReviewPlantsList'

const ReviewPlants = ({ reviews }) => {

  return (
    <div>
      <ReviewPlantsList reviews={reviews}/>
    </div>
  )
}

export default ReviewPlants