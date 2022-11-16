import React from 'react'
import ReviewPlantsList from './ReviewPlantsList'

const ReviewPlants = ({ reviews, deleteReviews }) => {

  return (
    <div>
      <ReviewPlantsList reviews={reviews}
      deleteReviews={deleteReviews}/>
    </div>
  )
}

export default ReviewPlants