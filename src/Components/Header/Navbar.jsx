// import react icon
import { AiOutlineShoppingCart } from 'react-icons/ai';
// import navlink for navbar
import { Link, NavLink } from "react-router-dom"
// import coustome css
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg container-fluid">
      <div className="container">
        <NavLink to={"/"} className="navbar-brand">Mobile</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse align-items-center" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to={"/home"} className="nav-link" >Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/product"} className="nav-link" >Product</NavLink>
            </li>
          </ul>
          <div>
            <Link to={"/cart"} className="btn btn-dark position-relative">
              <AiOutlineShoppingCart />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar