import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

const Layout = () => {
  return (
    <>
      <div className="flex flex-col min-h-svh">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
      </div >
      <Footer />
    </>
  )
}

export default Layout