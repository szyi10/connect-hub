import BottomNav from "./BottomNav"
import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="w-full px-6">
        <div className="mt-20 max-w-3xl w-full mx-auto">{children}</div>
      </main>
      <Footer />
      <BottomNav />
    </>
  )
}

export default Layout
