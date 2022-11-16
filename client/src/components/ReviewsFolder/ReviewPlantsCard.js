import React from 'react'
import {Link} from "react-router-dom";

const ReviewPlantsCard = ({ comment, id, image }) => {

  function handleDelete(){
    fetch(`/reviews/${id}`, {
      method: 'DELETE',
    })
  }
  
  return (
    <div className="review-card">
      <img src={image} alt={id} />
      <h3>{comment}</h3>
      <button onClick={handleDelete}>Delete</button>
      <button><Link to={`/reviews/${id}`}>Edit</Link></button>
    </div>
  )
}

export default ReviewPlantsCard