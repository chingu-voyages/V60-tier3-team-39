import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

const Layout = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="max-w-360 mx-auto  flex">
        <Outlet />
      </main>
      <Footer />
    </div >
  )
}

export default Layout