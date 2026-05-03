import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

const Layout = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex">
        <Outlet />
      </main>
      <Footer />
    </div >
  )
}

export default Layout