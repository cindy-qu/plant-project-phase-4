import React from 'react'
import PlantList from "./PlantList"

const MyPlants = ({user, setUpdateAfterDelete}) => {
 
  const userPosts= user.plant_posts

  return (
    <div className="my-plants-page">
      <div className='page-container'>
        <h1>My Plants</h1>
        <PlantList
          userPosts={userPosts}
          setUpdateAfterDelete={setUpdateAfterDelete}
        />
      </div>
    </div>
  )
}

export default MyPlants