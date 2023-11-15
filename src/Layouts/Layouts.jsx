// import react helmate
import { Helmet } from "react-helmet"
// import components
import Navbar from "../Components/Header/Navbar"
import Footer from "../Components/Footer/Footer"

const Layouts = ({ children, title }) => {
  return (
    <>
        <Helmet>
          <title>{title}</title>
        </Helmet>

        <header>
          <Navbar />
        </header>

        <main>
          {children}
        </main>

        <footer>
          <Footer />
        </footer>
    </>
  )
}

export default Layouts