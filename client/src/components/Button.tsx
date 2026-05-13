type Button = {
  children: React.ReactNode
  styles: string
  onClick?: () => void
}

const Button = ({ children, styles, onClick }: Button) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center font-semibold py-2.5 px-6 rounded-[10px] cursor-pointer transition-colors duration-300 ${styles}`}
    >
      {children}
    </button>
  )
}

export default Button