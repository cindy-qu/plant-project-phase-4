import React from 'react';
import Logo from '../imagesFolder/Plantastic LOGOcrop.jpeg'
import PlantForm from './PlantForm';

function Home({user, setUpdatePlantPost}){
    return (
        <div className='home'>
            <img src={Logo} alt="" />
            <div className="home-intro">
                <PlantForm user={user} setUpdatePlantPost={setUpdatePlantPost}/>
                
            </div>
        </div>

    )
}
    
export default Home