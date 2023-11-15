// import bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import './App.css'
// import router
import { Route, Routes } from "react-router-dom"
// react slick carousel for category
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import pages
import Home from "./Pages/Home/Home.jsx"
import Product from "./Pages/Product/Product.jsx"
import Details from "./Pages/Details/Details.jsx"
import Cart from "./Pages/Cart/Cart.jsx"
import NotFound from "./Pages/NotFound/NotFound.jsx"


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App