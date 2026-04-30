import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

const Layout = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="min-h-screen flex flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout