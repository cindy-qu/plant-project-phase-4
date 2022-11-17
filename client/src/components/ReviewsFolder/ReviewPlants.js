import React from 'react'
import ReviewPlantsList from './ReviewPlantsList'

const ReviewPlants = ({ reviews, setUpdateReviews }) => {

  return (
    <div className='page-container'>
      <h1>My Reviews</h1>
      <ReviewPlantsList reviews={reviews}
      setUpdateReviews={setUpdateReviews}/>
    </div>
  )
}

export default ReviewPlants