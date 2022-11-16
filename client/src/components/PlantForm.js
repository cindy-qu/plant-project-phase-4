import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'

const PlantForm = ({user, setUpdatePlantPost}) => {
  console.log(user)
    const [errors, setErrors] = useState([]);
    //plant form state
    const [plantName, setPlantName] = useState("")
    const [image, setImage] = useState("")
    const [location, setLocation] = useState("")
    const [petSafe, setPetSafe] = useState(false)
    const [indoor, setIndoor] = useState(false)

    const history = useHistory();

    //handle/get values from all form inputs
    const handlePlantName = (e) => {
        setPlantName(e.target.value)
    }

    const handleImage = (e) => {
        setImage(e.target.value)
    }

    const handleLocation = (e) => {
        setLocation(e.target.value)
    }

    const handlePetSafeChecked = () => {
        setPetSafe(petSafe => !petSafe)
    }

    const handleIndoorChecked = () => {
        setIndoor(indoor => !indoor)
    }

//POST REQUEST to submit new plant
const handlePlantSubmit = (e) => {
    e.preventDefault();
    const formData = {
        plant_name: plantName,
        image: image,
        state: location,
        pet_safe: petSafe,
        indoor: indoor,
        user_id: user.id,
    }
    
    
    fetch(`/plant_posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
    })
    .then((res) => {
      if (res.ok) {
        res.json().then((userData) => {
            setUpdatePlantPost(userData)
          history.push('/myPlants')
        });
      } else {
        res.json().then((err) => setErrors(err.errors))
      }
    })

}
//render errors to li to display on page
const formErrorMsg = errors.map((err) => (
    <li key={err}>{err}</li>
    ))
    
  return (
    <div className='plant-form-container'>
        <h2>Add a new Plant!</h2>
        <form className="plant-form" autoComplete='off' onSubmit={handlePlantSubmit}>

            <label>Plant Name:</label>
            <input type='text'id="name" name="plant_name" value={plantName} onChange={handlePlantName} required/>

            <label>Image URL:</label>
            <input type='text'id="image" name="image" value={image} onChange={handleImage} required/>

            <label>State
            <select id="state" name="state" value={location} onChange={handleLocation} required>
                <option value="" disabled selected>Select your option</option>
                <option value="Alabama">Alabama</option>
                <option value="Arizona">Arizona</option>
                <option value="Arkansas">Arkansas</option>
                <option value="California">California</option>
                <option value="Colorado">Colorado</option>
                <option value="Connecticut">Connecticut</option>
                <option value="Delaware">Delaware</option>
                <option value="Florida">Florida</option>
                <option value="Georgia">Georgia</option>
                <option value="Hawaii">Hawaii</option>
                <option value="Idaho">Idaho</option>
                <option value="Illinois">Illinois</option>
                <option value="Indiana">Indiana</option>
                <option value="Iowa">Iowa</option>
                <option value="Kansas">Kansas</option>
                <option value="Kentucky">Kentucky</option>
                <option value="Louisiana">Louisiana</option>
                <option value="Maine">Maine</option>
                <option value="Maryland">Maryland</option>
                <option value="Massachusetts">Massachusetts</option>
                <option value="Michigan">Michigan</option>
                <option value="Minnesota">Minnesota</option>
                <option value="Mississippi">Mississippi</option>
                <option value="Missouri">Missouri</option>
                <option value="Montana">Montana</option>
                <option value="Nebraska">Nebraska</option>
                <option value="Nevada">Nevada</option>
                <option value="New Hampshire">New Hampshire</option>
                <option value="New Jersey">New Jersey</option>
                <option value="New Mexico">New Mexico</option>
                <option value="New York">New York</option>
                <option value="North Carolina">North Carolina</option>
                <option value="North Dakota">North Dakota</option>
                <option value="Ohio">Ohio</option>
                <option value="Oklahoma">Oklahoma</option>
                <option value="Oregon">Oregon</option>
                <option value="Pennsylvania">Pennsylvania</option>
                <option value="Rhode Island">Rhode Island</option>
                <option value="South Carolina">South Carolina</option>
                <option value="South Dakota">South Dakota</option>
                <option value="Tennessee">Tennessee</option>
                <option value="Texas">Texas</option>
                <option value="Utah">Utah</option>
                <option value="Vermont">Vermont</option>
                <option value="Washington">Washington</option>
                <option value="Washington">Washington</option>
                <option value="West">West Virginia</option>
                <option value="Wisconsin">Wisconsin</option>
                <option value="Wyoming">Wyoming</option>
            </select>
            </label>

            <label>Indoor
            <input type="radio" id="indoor" name="indoor" checked={indoor ? "checked" : ''} value={indoor} onChange={handleIndoorChecked} />
            </label>
        
            <label>Pet Safe
            <input type="radio" id="pet_safe" name="pet_safe" checked={petSafe ? "checked" : ''} value={petSafe} onChange={handlePetSafeChecked} />
            </label>

            <button id="add-btn"className='submit-btn' type="submit">ADD PLANT</button>
        </form>
        <ul>{formErrorMsg}</ul>
</div>

  )
}

export default PlantForm