import {useState, useEffect } from "react";
import { Link, useParams} from 'react-router-dom'

const ReviewPlantsEdit = ({ reviews, setUpdateReviews }) => {
  console.log(reviews)
  
  const [updateReviewForm, setUpdateReviewForm] = useState("");
  const [updated, setUpdated] = useState(false)
  const [errors, setErrors] = useState([]);

//get plant_post id with useParams
  const paramsObj = useParams()
  const paramsId = parseInt(paramsObj.id)

  let matchReview = reviews.find(rev => rev.review.id === paramsId ? rev.review : '')

  console.log(matchReview)
  
  //set initial contents of review edit form to be original review
  useEffect(() => {
    setUpdateReviewForm(matchReview.review.comment)
  }, [paramsId])


//PATCH REQUEST to update review

function handleUpdate(e){
  e.preventDefault();
  fetch(`/reviews/${paramsId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      comment: updateReviewForm
    }),
  }).then((res) => {
    if (res.ok) {
      res.json().then((updateReview)=>{
        setUpdateReviews(updateReview)
        setUpdated(updated => !updated)
        setUpdateReviewForm('')
      });
    } else {
      res.json().then((err) => 
        setErrors(err.errors)
      );
    }
  })
}

const editMsgClassName = updated ? '' : 'hidden';

const formErrorMsg = errors.map((err) => (
  <p key={err}>{err}</p>

  ))
    return (
      <div className="edit-page">
        <form onSubmit={handleUpdate}>
        <h1 className="edit-form-title">Edit Review</h1>
        <textarea
          rows="4"
          value={updateReviewForm}
          onChange={(e) => setUpdateReviewForm(e.target.value)}
        />
      <br></br>
        <button className ="submit-btn"type="submit">Update Review</button>
      </form>

      <ul>{formErrorMsg}</ul>

      <div id="edit-complete-msg" className={editMsgClassName}>
                <h3>Edit complete!</h3>
                <Link to="/reviews">
                  <button className='submit-btn'>View My Reviews
                  </button>
                </Link>
        </div>
      </div>
      
    )
}

export default ReviewPlantsEdit