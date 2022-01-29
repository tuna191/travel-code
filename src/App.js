import { NavLink, Link, Outlet } from 'react-router-dom'
import './navList/styleActive.css'
import './navList/nav.css'

import { links, logo, navLogin } from './navList/dataNav'


function App() {
  
  return (
    <div className="App">

      <div className='navigation'>
        <div className='navLogo'>
          <h1>{logo[0].h1}</h1>
          <h3>{logo[1].h3}</h3>
        </div>
        <div className='navCenter'>
          {
            links.map(link => {
              return (
                <NavLink
                  
                  to={link.to}
                  key={link.id}
                 
                  className={({ isActive }) => (isActive ? "sideBarActive" : "sideBar")
                  }
                >
                  <div className='navCenter__children'>
                    {link.name}
                   
                  </div>
                </NavLink>
              )
            })
          }
        </div>
        <Link to="/Login" className='navLogin'>
          <span>{navLogin[0].icon}</span>
          <h3>{navLogin[0].h3}</h3>
        </Link>
      </div>

      <Outlet />
    </div>

  );
}

export default App;
