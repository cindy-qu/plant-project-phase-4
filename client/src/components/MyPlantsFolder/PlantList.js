import React from 'react'
import PlantCard from './PlantCard.js'

const PlantList = ({userPosts, setUpdateAfterDelete}) => {
  const renderPlantCard = userPosts.map ((onePlantCard) => {
    return(
      <PlantCard
        key={onePlantCard.id}
        post_id={onePlantCard.id}
        name={onePlantCard.plant_name}
        image={onePlantCard.image} 
        indoor={onePlantCard.indoor}
        pet_safe={onePlantCard.pet_safe}
        state={onePlantCard.state}
        setUpdateAfterDelete={setUpdateAfterDelete}
      />
    )
  })
  return (
    <div>
      {renderPlantCard}
    </div>
  )
}

export default PlantList