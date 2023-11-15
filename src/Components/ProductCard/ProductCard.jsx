// import navlink for navbar
import { Link, NavLink } from "react-router-dom"
// import logo images
import Barnds1 from "../../assets/Images/Category/iphone.png"
// import coustome css
import './ProductCard.css'

const ProductCard = ({ productDetails }) => {
  const { id, name, categories, price, image, description
  } = productDetails

  return (
    <>
      <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
        <div className="card py-3 px-1">
          <div className="product__image__box">
            <img src={image?.url} className=" product__image card-img-top" alt="..." />
          </div>
          <div className="card-body">
            <h5 className="card-title text-center text-sm-start">{name}</h5>
            <h6 className="card-title text-center mb-4 text-sm-start">{price.formatted_with_symbol}</h6>
            <div className="d-flex align-items-center justify-content-center justify-content-sm-end">
              <span className="badge text-bg-success">{categories[0]?.name}</span>
              <Link to={'/cart'} className="product__btn__buy">Buy</Link>
              <Link to={`/details/${id}`} className="product__btn__details">Details</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard