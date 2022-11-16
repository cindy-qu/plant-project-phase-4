import React from 'react'
import {Link} from "react-router-dom";

const ReviewPlantsCard = ({ comment, id }) => {
  return (
    <div className="review-card">
      <h3>{comment}</h3>
      <button>Delete</button>
      <Link to={`/reviews/${id}/edit`}>Edit</Link>
    </div>
  )
}

export default ReviewPlantsCard