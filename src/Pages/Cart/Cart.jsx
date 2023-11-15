// import layouts for dinamic page
import Layouts from "../../Layouts/Layouts"
// import navlink for navbar
import { Link, NavLink } from "react-router-dom"
// import logo images
import Barnds1 from "../../assets/Images/Category/iphone.png"
// import coustome css
import './Cart.css'

const Cart = () => {
  return (
    <Layouts title={"Product Carts"}>
      <div className="container cart__section">
        <table class="table table-dark table-bordered">
          <thead>
            <tr>
              <th scope="col">Serial-No</th>
              <th scope="col">Phone Image</th>
              <th scope="col">Phone Name</th>
              <th scope="col">Phone Price</th>
              <th scope="col">Phone brand</th>
              <th scope="col">Manage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td><img src={Barnds1} width="50px" height="40px" alt="" /></td>
              <td>iPhone 14pro Max</td>
              <td>৳1,99,999/=</td>
              <td>iPhone</td>
              <td>
                <Link to={"/details/123"} className="cart__btn">Payment</Link>
                <Link to={"/details/123"} className="cart__btn ms-2">Details</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layouts>
  )
}

export default Cart