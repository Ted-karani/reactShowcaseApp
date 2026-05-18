// remember to first install the react router domm
// check that topic in canvas i dont remember
//then i also make use of the navigation link like basically /admin / shop
// ill check canvas i dont remember all this
// teh only navlinks are for Home Admin portal and shop
// make sure it starts with / except maybe Home i think Sam said that


import { NavLink } from 'react-router-dom'


export default function Navbar() {
  return (
    <nav className="navbar">

      <NavLink to="/" className="nav-link" end>
        Home
      </NavLink>

      <NavLink to="/shop" className="nav-link">
        Shop
      </NavLink>

      <NavLink to="/admin" className="nav-link">
        Admin Portal
      </NavLink>

      

    </nav>
  )
}