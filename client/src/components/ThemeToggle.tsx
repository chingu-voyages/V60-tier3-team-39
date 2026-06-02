import { useEffect, useState } from "react"
import { FaMoon, FaSun } from "react-icons/fa"


const ThemeToggle = () => {

  const [isLightMode, setIsLightMode] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      document.documentElement.classList.remove('light')
      setIsLightMode(false)
    } else {
      document.documentElement.classList.add('light')
      setIsLightMode(true)
    }
  }, [])

  const toggleTheme = () => {

    if (isLightMode) {
      document.documentElement.classList.remove('light')
      localStorage.setItem('theme', 'dark')
      setIsLightMode(false)
    } else {
      document.documentElement.classList.add('light')
      localStorage.setItem('theme', 'light')
      setIsLightMode(true)
    }
  }

  return (
    <div
      onClick={toggleTheme}
      className={`flex items-center gap-4 p-1.5 md:text-lg lg:text-xl  border-3 ${isLightMode ? 'border-[#FFB624] bg-[#FFEA8D]' : 'border-[#648AB0] bg-[#142230]'} rounded-full cursor-pointer transition-colors duration-500 hover:border-[#648AB0] hover:bg-[#648AB0]/20`}>
      <span className="hover:color-[#648AB0]">
        <FaSun color={isLightMode ? '#FFB624' : '#648AB0'} />
      </span>
      <span className="text-[#334C65]">
        <FaMoon />
      </span>
    </div>
  )
}

export default ThemeToggle