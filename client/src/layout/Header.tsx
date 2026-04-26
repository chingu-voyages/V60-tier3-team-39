import { NavLink } from "react-router-dom"
import logo from '../assets/header/logo.svg'
import { FaSun, FaMoon } from "react-icons/fa"
import val from '../assets/header/val.png'

const Header = () => {
  return (
    <header className="bg-gray-400 ">
      <nav className="w-full max-w-7xl mx-auto px-10 py-6 space-y-10">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Stemly logo" className="w-9.5" />
            <span
              className="tracking-wide font-semibold text-2xl uppercase text-transparent bg-clip-text bg-linear-to-r from-[#0D3E3B]  to-[#00BF63]"
            >
              stemly
            </span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 border-2 border-[#FFB624] rounded-full">
              <FaSun color='#FFB624' size='1.5rem' />
              <FaMoon color='#648AB0' size='1.5rem' />
            </div>
            <div className="p-0.5 bg-linear-to-r from-[#00BF63]  to-[#0D3E3B] rounded-full">
              <img src={val} alt="" className="w-13 rounded-full" />
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-primary"
          >
            Your job search is gaining momentum.
          </h1>
        </div>
      </nav>

      {/* <NavLink to='/'>Dashboard</NavLink>
      <NavLink to='/applications'>Applications</NavLink>
      <NavLink to='/analytics'>Analytics</NavLink>
      <NavLink to='/activity'>Activity</NavLink> */}
    </header>

  )
}

export default Header