import React from 'react';
import PlantasticImg from '../imagesFolder/Plantastic LOGO.png'
import PlantForm from './PlantForm';

function Home({user, setUpdatePlantPost}){
    return (
        <div className='home'>
            <img src={PlantasticImg} alt="" />
            <div className="home-intro">
                <PlantForm user={user} setUpdatePlantPost={setUpdatePlantPost}/>
                
            </div>
        </div>

    )
}
    
export default Home