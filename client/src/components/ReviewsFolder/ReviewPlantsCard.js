import { useState } from 'react'
import {Link} from "react-router-dom"
import ModalComponent from '../ModalComponent'

const ReviewPlantsCard = ({ review, setUpdateAfterDelete }) => {

  const [openModal, setOpenModal] = useState(false)

  function handleDelete(){
    fetch(`/reviews/${review.id}`, {
      method: 'DELETE',
    })
    .then(setUpdateAfterDelete)
  }

    //open/close modal
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);
  // console.log(review)
  
  return (
    <div className="review-card plant-card">
      <h2>{review.plant_post.plant_name}</h2>
      <img src={review.plant_post?.image} alt={review.plant_post?.plant_name} />
      <h3>{review.review.comment}</h3>

      <Link to={`/reviews/${review.review.id}`}>
      <button className= "edit-btn">Edit</button>
      </Link>

      <button className= "delete-btn" onClick={handleOpen}>X</button>

      <ModalComponent openModal={openModal} handleDelete={handleDelete} handleClose={handleClose}/>

    </div>
  )
}

export default ReviewPlantsCard