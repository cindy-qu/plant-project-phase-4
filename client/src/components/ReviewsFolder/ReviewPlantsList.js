import React from 'react'
import ReviewPlantsCard from './ReviewPlantsCard'

const ReviewPlantsList = ({ reviews, setUpdateReviews, setUpdateAfterDelete }) => {
  // console.log(reviews)
  
  const renderReviewCard = reviews?.map ((oneReview) => {
    console.log(oneReview)
    
      return (
        <ReviewPlantsCard
         key={oneReview.review.id}
         review={oneReview}
         setUpdateReviews={setUpdateReviews}
         setUpdateAfterDelete={setUpdateAfterDelete}/>
      )
  })
  
  return (
    <div>{renderReviewCard}</div>
  )
}

export default ReviewPlantsList