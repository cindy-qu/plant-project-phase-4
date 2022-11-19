import React from 'react'
import Anna_about from '../imagesFolder/Anna_about.jpeg'
import Brooke_about from '../imagesFolder/Brooke_about2.jpg'
import Cindy_about from '../imagesFolder/Cindy_about.jpg'
import Mustafa_about from '../imagesFolder/Mustafa_about.jpg'

const About = () => {
  return (
    <div className="about-container">
    <div className='about'>
    <h1>About</h1>
    <p>
       Welcome to our Plantastic! This app is made for plant lovers! Create an account or login upon opening the app. Add a plant post and interact with others through commenting on the global plants part of the application. Like, edit, and delete posts and comments at your leisure!
    </p>
    <h2>Application Coding Details</h2>
    <p>
        This application utilizes elements of React (JavaScript, CSS, HTML, JSX) and Ruby on Rails to create a cohesive front and back end experience.
    </p>

    <h3>Phase 4 Requirements Met Through this Project</h3>
      <ul>
        <li>Uses a Rails API backend with a React frontend.</li>
        <li>Has at least three models on the backend, that include the following:</li>
          <ul>
            <li>At least two one-to-many relationships.</li>
            <li>At least one reciprocal many-to-many relationship (implemented by using 2 has-many-through relationships). Has a joins table. This joins table has a user submittable attribute.</li>
          </ul>
        <li>Has full CRUD actions for at least one resource.</li>
        <li>Has a minimum of create and read actions for EACH resource.</li>
        <li>Has at least three different client-side routes using React Router. Be sure to include a nav bar or other UI element that allows users to navigate between routes.</li>
        <li>Implements authentication/authorization, including password protection. A user must be able to: -sign up with a new user account, -log in to the site with a secure password and stay logged in via user ID in the session hash, and log out of the site.</li>
      </ul>
    <h3>About the Creators</h3>
    <p>
      Anna Schmidt, Brooke Ross, Cindy Qu, and Mustafa Rizvi are software engineering students at Flatiron School.
    </p>
    <h3>Connect with them all on LinkedIn here: </h3>
        
    <div className="about-photos">
        <div className= "about-information">
            <img src={Anna_about} alt="Anna" />
            <a href="https://www.linkedin.com/in/annaschmidt1697/" target="blank" rel="noreferrence">Anna <i className="fa-brands fa-linkedin" /></a> 
            <p>Anna's favorite plant is... a Tillandsia!</p>
        </div>
        <div className="about-information"> 
            <img src= {Brooke_about} alt="Brooke"/>
            <a href="https://www.linkedin.com/in/brooke-ross-se/" target="blank"rel="noreferrence" >Brooke <i className="fa-brands fa-linkedin" /></a> 
            <p>Brooke's favorite plant is... a Myrtillocactus geometrizans!</p>
        </div>           
        <div className="about-information"> 
            <img src={Cindy_about} alt="Cindy" />
            <a href="https://www.linkedin.com/in/cindy-qu/" target="blank" rel="noreferrence" >Cindy <i className="fa-brands fa-linkedin" /></a>
            <p>Cindys's favorite plant is... a Asplenium nidus variegated!</p>
        </div>
        <div className="about-information">
            <img src={Mustafa_about} alt="Mustafa" /> 
            <a href="https://www.linkedin.com/in/mustafa-rizvi-970494138/" target="blank" rel="noreferrence">Mustafa <i className="fa-brands fa-linkedin" /></a>
            <p>Mustafa's favorite plant is... a Fiddle Leaf Fig!</p>
        </div>
    </div>
  </div>
</div>
  )
}

export default About