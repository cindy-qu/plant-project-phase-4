import React from 'react'
import GlobalPlantCard from './GlobalPlantCard'

const GlobalPlantsList = ({plantPosts, my_user_id, setUpdateReviews}) => {

  const renderGlobalPlantCards = plantPosts.map((oneGlobalCard)=>{
    return (
      <GlobalPlantCard 
        key={oneGlobalCard.id}
        id={oneGlobalCard.id}
        username={oneGlobalCard.user.username}
        plant_name={oneGlobalCard.plant_name}
        image={oneGlobalCard.image}
        indoor={oneGlobalCard.indoor}
        state={oneGlobalCard.state}
        reviews={oneGlobalCard.reviews}
        my_user_id={my_user_id}
        pet_safe={oneGlobalCard.pet_safe}
        setUpdateReviews={setUpdateReviews}
      />
    )
  })
  
  return (
    <div>{renderGlobalPlantCards}</div>
  )
}

export default GlobalPlantsList

