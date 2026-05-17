import { NavLink } from 'react-router-dom'
import DarkMode from './DarkMode'

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

      <DarkMode />

    </nav>
  )
}