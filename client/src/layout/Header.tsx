import { NavLink } from "react-router-dom"
import logo from '../assets/logo.svg'
import { FaPlus, FaUser } from "react-icons/fa"
import darkBg from '../assets/header/background.png'
import lightBg from '../assets/header/background.avif'
import { MdDashboard, MdAnalytics } from "react-icons/md"
import { PiTextAlignLeftFill } from "react-icons/pi"
import { DiGoogleAnalytics } from "react-icons/di"
import Button from '../components/Button'
import { IoIosArrowDown } from "react-icons/io"
import ThemeToggle from "../components/ThemeToggle"
import { useEffect, useState } from "react"


const navLinks = [
  { name: 'Dashboard', path: '/', icon: MdDashboard },
  { name: 'Applications', path: '/applications', icon: PiTextAlignLeftFill },
  { name: 'Analytics', path: '/analytics', icon: MdAnalytics },
  { name: 'Activity', path: '/activity', icon: DiGoogleAnalytics },
]

const Header = () => {

  const [isLight, setIsLight] = useState(document.documentElement.classList.contains('light'))

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsLight(document.documentElement.classList.contains('light'))
    })

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

    return () => observer.disconnect()
  }, [])

  return (
    <header className="relative w-full">
      <div className="absolute inset-0">
        <img
          src={isLight ? lightBg : darkBg}
          alt="hero background image"
          className="w-full h-full object-cover"
        />
      </div>
      <nav className="relative w-full max-w-360 mx-auto p-4 md:p-6 lg:px-10 space-y-8 z-10">
        <div className="flex justify-between">
          <NavLink to='/' className='cursor-pointer'>
            <div className="flex items-center gap-2">
              <img src={logo} alt="Stemly logo" className="w-7 lg:w-8" />
              <span className="tracking-wide font-semibold font-heading text-lg lg:text-xl uppercase text-transparent bg-clip-text bg-linear-to-r from-brand-secondary to-brand">
                stemly
              </span>
            </div>
          </NavLink>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <div className="bg-linear-to-r from-brand  to-primary rounded-full p-4">
              <FaUser color="#fff" size={24} />
            </div>
          </div>
        </div>
        <div className="space-y-1">
          <h1 className="text-primary font-heading font-extrabold text-xl lg:text-[1.75rem]">
            Your job search is gaining momentum.
          </h1>
          <div className="max-w-100 lg:max-w-105">
            <p className="hidden md:block text-foreground font-bold text-sm lg:text-base">
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
                className={({ isActive }) => isActive ? "group active-nav text-white bg-dark-bg py-1 pl-2 pr-2.5 lg:py-1.125 lg:pl-2 lg:pr-2.75 rounded-[10px] font-semibold" : 'text-muted font-medium hover:text-primary transition-colors duration-200'}
              >
                <div className="flex items-center gap-1 text-xs lg:text-sm">
                  <span className="md:text-xl lg:text-2xl group-[.active-nav]:text-brand">
                    <Icon />
                  </span>
                  <span className="font-heading">{name}</span>
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
            <Button styles='gap-1 text-xs lg:text-sm bg-dark-bg hover:bg-background-dark/70 border text-white border-muted/10'>
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