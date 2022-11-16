import React from 'react'

const GlobalPlantCard = ({plant_name, image,indoor, pet_safe, state, username}) => {
  console.log(pet_safe)
  
  return (
    <div className="plant-card">
      <h3>{plant_name}</h3>
      <img src={image} alt={plant_name} />
      <p>{username}</p>
      <p>{indoor ? "Indoor Plant" : "Outdoor Plant"}</p>
      <p>{pet_safe ? "Pet Safe ✅" : "Unsafe for Pets"}</p>
      <p>Location: {state}</p>

  </div>
  )
}

export default GlobalPlantCard