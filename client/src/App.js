import React, { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import MyPlants from './components/MyPlantsFolder/MyPlants'
import ReviewPlants from './components/ReviewsFolder/ReviewPlants';
import ReviewPlantsEdit from './components/ReviewsFolder/ReviewPlantsEdit'
import GlobalPlants from './components/GlobalPlantsFolder/GlobalPlants';
import LoginContainer from './components/LoginFolder/LoginContainer'
import EditPlantCard from './components/MyPlantsFolder/EditPlantCard'
import { Route, Switch } from 'react-router-dom'


function App() {
  const [user, setUser] = useState(null)
  const [errors, setErrors] = useState([])
  const [plantPosts, setPlantPosts]=useState([])
  const [updateReviews, setUpdateReviews] = useState([])
  const [updateAfterDelete, setUpdateAfterDelete] = useState(false)

  //this state causes the below useEffect to run by being updated when creating, editing, or deleting a plant post
  const [updatePlantPost, setUpdatePlantPost] = useState([])
  
  // auto-login if user_id in session and fetch user's plants and global plants
  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((userData) => {
          setUser(userData)
          fetchGlobalPlants();
        });
      }
    });

  }, [updatePlantPost, updateReviews, updateAfterDelete]);

  // Fetch request for global plants allowing for a user to fetch once when logged in!
  const fetchGlobalPlants = () => {
    fetch (`/plant_posts`)
    .then(res =>{
      if (res.ok){
        res.json().then(setPlantPosts)
      }else{
        res.json().then(data => setErrors(data.error))
      }
    })
  }

  console.log(plantPosts)
  

  if (!user) return <LoginContainer fetchGlobalPlants={fetchGlobalPlants} setUser={setUser} />
  

  return (
    <div className="App">
      <NavBar user={user} setUser={setUser}/>
      <Switch>

        <Route exact path="/">
          <Home user={user} setUpdatePlantPost={setUpdatePlantPost}/>
          {/* <PlantForm user={user} setUpdatePlantPost={setUpdatePlantPost} /> */}
        </Route>

        <Route exact path="/about">
          <About/>
        </Route>

        <Route exact path="/myPlants">
          <MyPlants user={user} setUpdateAfterDelete={setUpdateAfterDelete}/>
        </Route>

        <Route exact path="/myPlants/:id">
          <EditPlantCard 
            user={user}
            setUpdatePlantPost={setUpdatePlantPost}
          />
        </Route>

        <Route exact path="/reviews">
          <ReviewPlants reviews={user.reviews}
          setUpdateReviews={setUpdateReviews}
          setUpdateAfterDelete={setUpdateAfterDelete}
          />
        </Route>

        <Route exact path="/reviews/:id">
          <ReviewPlantsEdit reviews={user.reviews}
          setUpdateReviews={setUpdateReviews}/>
        </Route>

        <Route exact path="/globalPlants">
          <GlobalPlants
            plantPosts={plantPosts}
            errors={errors}
            user_id={user.id}
            setUpdateReviews={setUpdateReviews}
          />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
