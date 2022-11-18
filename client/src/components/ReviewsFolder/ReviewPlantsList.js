import React from 'react'
import ReviewPlantsCard from './ReviewPlantsCard'

const ReviewPlantsList = ({ reviews, setUpdateReviews, setUpdateAfterDelete }) => {

  const renderReviewCard = reviews.map ((oneReview) => {
    return (
      <ReviewPlantsCard
       key={oneReview.id}
       comment={oneReview.comment}
       id={oneReview.id}
       image={oneReview.plant_post.image}
       setUpdateReviews={setUpdateReviews}
       setUpdateAfterDelete={setUpdateAfterDelete}/>

    )
  })
  
  return (
    <div>{renderReviewCard}</div>
  )
}

export default ReviewPlantsList