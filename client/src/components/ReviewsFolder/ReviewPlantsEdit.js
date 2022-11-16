import { useEffect, useState } from "react";


const ReviewPlantsEdit = ({ reviews }) => {
  const [description, setDescription] = useState("");



    return (
 
      
        <form>
        <h2>Editing Review</h2>
       
        <textarea
        placeholder="show original comment here"
          rows="4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      <br></br>
        <button type="submit">Update Review</button>
      </form>
    )
}

export default ReviewPlantsEdit