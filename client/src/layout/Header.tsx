import { NavLink } from "react-router-dom"
import logo from '../assets/logo.svg'
import { FaSun, FaMoon, FaPlus, FaUser } from "react-icons/fa"
import background from '../assets/header/background.png'
import { MdDashboard, MdAnalytics } from "react-icons/md"
import { PiTextAlignLeftFill } from "react-icons/pi"
import { DiGoogleAnalytics } from "react-icons/di"
import Button from '../components/Button'
import { IoIosArrowDown } from "react-icons/io"


const navLinks = [
  { name: 'Dashboard', path: '/', icon: MdDashboard },
  { name: 'Applications', path: '/applications', icon: PiTextAlignLeftFill },
  { name: 'Analytics', path: '/analytics', icon: MdAnalytics },
  { name: 'Activity', path: '/activity', icon: DiGoogleAnalytics },
]

const Header = () => {

  return (
    <header className="relative w-full">
      <div className="absolute inset-0">
        <img
          src={background}
          alt="hero background image"
          className="w-full h-full object-cover object-top"
        />
      </div>
      <nav className="relative w-full max-w-7xl mx-auto p-4 md:p-6 lg:px-10 space-y-8 z-10">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Stemly logo" className="w-7 lg:w-8" />
            <span className="tracking-wide font-semibold text-lg lg:text-xl uppercase text-transparent bg-clip-text bg-linear-to-r from-primary  to-brand">
              stemly
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4 p-1.5 md:text-lg lg:text-xl bg-inprog-bg border-3 border-[#FFB624] rounded-full cursor-pointer transition-colors duration-500 hover:border-[#648AB0] hover:bg-[#648AB0]/20">
              <span className="hover:color-[#648AB0]">
                <FaSun color='#FFB624' />
              </span>
              <span className="text-white">
                <FaMoon />
              </span>
            </div>
            <div className="bg-linear-to-r from-brand  to-primary rounded-full p-4">
              <FaUser color="#fff" size={24} />
            </div>
          </div>
        </div>
        <div className="space-y-1">
          <h1 className="text-primary font-extrabold text-xl lg:text-[1.75rem]">
            Your job search is gaining momentum.
          </h1>
          <div className="max-w-100 lg:max-w-md">
            <p className="hidden md:block text-muted font-bold text-sm lg:text-base">
              Track every application, every connection, every step ー all in one beautifully organized place.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-end">
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ name, path, icon: Icon }) => (
              <NavLink
                key={name}
                to={path}
                className={({ isActive }) => isActive ? "text-white bg-primary py-1 pl-2 pr-2.5 lg:py-1.125 lg:pl-2 lg:pr-2.75 rounded-[10px] active-link font-semibold" : 'text-muted font-medium hover:text-primary transition-colors duration-200'}
              >
                <div className="flex items-center gap-1 text-xs lg:text-sm">
                  <span className="md:text-xl lg:text-2xl">
                    <Icon />
                  </span>
                  <span className="nav-text">{name}</span>
                </div>
              </NavLink>
            ))}
          </div>
          <div className="flex items-center justify-between w-full md:w-auto">
            <Button styles='md:hidden text-xs lg:text-sm bg-primary text-brand active-link'>
              <NavLink to='/' className='flex gap-1'>
                <MdDashboard size={16} />
                <span className="mr-5 nav-text">Dashboard</span>
                <span className="nav-text"><IoIosArrowDown size={16} /></span>
              </NavLink>
            </Button>
            <Button styles='gap-1 text-xs lg:text-sm bg-primary text-white'>
              <FaPlus size={10} />
              Add Application
            </Button>
          </div>
        </div>
      </nav>
    </header>

  )
}

export default Header