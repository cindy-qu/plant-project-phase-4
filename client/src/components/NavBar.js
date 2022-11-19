import { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'


const NavBar = ({ user, setUser }) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

    const history = useHistory()

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((res) => {
          if (res.ok) {
            setUser(null)
            history.push('/login')
          }
        });
      }

    //logout logic (delete request)

    return (
        <div className='nav'>
             <button className='hamburger' onClick={() => {
              setIsNavExpanded(!isNavExpanded)
             }}>
              <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="white"
                >
                    <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                        clipRule="evenodd"
                    />
                </svg>
             </button>

          <div className={isNavExpanded ? 'nav-menu expanded' : 'nav-menu'}>
            <NavLink to="/">Home</NavLink>
             <NavLink to="/about">About</NavLink>
             <NavLink to="/myPlants">My Plants</NavLink>
              <NavLink to="/reviews">My Reviews</NavLink>
             <NavLink to="/globalPlants">Global Plants</NavLink>
            {/* <ul> */}
              {/* <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/myPlants">My Plants</NavLink></li>
              <li> <NavLink to="/reviews">My Reviews</NavLink></li>
              <li><NavLink to="/globalPlants">Global Plants</NavLink></li> */}
            {/* </ul> */}
            </div>
            <span>Hello {user.username}!
            <button className='sign-out' onClick={handleLogoutClick}>Logout</button>
           
            </span>
        </div>

    )
}

export default NavBar