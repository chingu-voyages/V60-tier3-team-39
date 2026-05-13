import { useState } from "react"
import { FaMoon, FaSun } from "react-icons/fa"


const ThemeToggle = () => {

  const [isLightMode, setIsLightMode] = useState(true)

  const toogleTheme = () => {
    if (isLightMode) {
      setIsLightMode(false)
    } else {
      setIsLightMode(true)
    }
  }

  return (
    <div className="flex items-center gap-4 p-1.5 md:text-lg lg:text-xl bg-[#142230] border-3 border-[#334C65] rounded-full cursor-pointer transition-colors duration-500 hover:border-[#648AB0] hover:bg-[#648AB0]/20">
      <span className="hover:color-[#648AB0]">
        <FaSun color='#142230' />
      </span>
      <span className="text-[#334C65]">
        <FaMoon />
      </span>
    </div>
  )
}

export default ThemeToggle