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
    <div className="flex items-center gap-4 p-1.5 md:text-lg lg:text-xl bg-inprog-bg border-3 border-[#FFB624] rounded-full cursor-pointer transition-colors duration-500 hover:border-[#648AB0] hover:bg-[#648AB0]/20">
      <span className="hover:color-[#648AB0]">
        <FaSun color='#FFB624' />
      </span>
      <span className="text-white">
        <FaMoon />
      </span>
    </div>
  )
}

export default ThemeToggle