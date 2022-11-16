import React from 'react'
import ReviewPlantsList from './ReviewPlantsList'

const ReviewPlants = ({ reviews, setUpdateReviews }) => {

  return (
    <div>
      <ReviewPlantsList reviews={reviews}
      setUpdateReviews={setUpdateReviews}/>
    </div>
  )
}

export default ReviewPlants