import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header className="flex gap-2 h-20 bg-gray-500 text-white">
      <span>Logo</span>
      <NavLink to='/'>Dashboard</NavLink>
      <NavLink to='/applications'>Applications</NavLink>
      <NavLink to='/analytics'>Analytics</NavLink>
      <NavLink to='/activity'>Activity</NavLink>
    </header>
  
  )
}

export default Header