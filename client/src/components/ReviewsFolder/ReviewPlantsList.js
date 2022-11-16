import React from 'react'
import ReviewPlantsCard from './ReviewPlantsCard'

const ReviewPlantsList = ({ reviews }) => {
  const renderReviewCard = reviews.map ((oneReview) => {
    return (
      <ReviewPlantsCard
       key={oneReview.id}
       comment={oneReview.comment}
       id={oneReview.id}/>
    )
  })
  
  return (
    <div>{renderReviewCard}</div>
  )
}

export default ReviewPlantsList