// import layouts for dinamic page
import Layouts from '../../Layouts/Layouts'
// import navlink for navbar
import { Link, NavLink, useParams } from "react-router-dom"
// import logo images
import Barnds1 from "../../assets/Images/Category/iphone.png"
// import coustome css
import './Details.css'
// import react hook
import { useEffect, useState } from 'react'
// commerce.js libeary
import { commerce } from '../../lib/commerce';


const Details = () => {

  const { id } = useParams() // individuals data fetch
  const [mobileDetails, setmobileDetails] = useState([])
  const { name, image, price, categories, } = mobileDetails

  // individuals data fetch
  const getMobileDetails = async () => {
    const fetch = await commerce.products.retrieve(id)
    return setmobileDetails(fetch)
  }

  // useEffect Hook
  useEffect(() => {
    getMobileDetails()
  }, [])

  return (
    <Layouts title={"Details"}>
      <section className='details__section'>
        <div className="container">
          <div className="card mb-3 p-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={image?.url} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <h6>Official Price: <sup>128 GB</sup></h6>
                  <h6>Unofficial Price: ৳199,000 <sup>128 GB</sup></h6>
                  <h6>Colors : White Titanium, Natural Titanium, Blue Titanium, Black Titanium</h6>
                  <h6>Made in : Various</h6>
                  <h6>Released Date : September 22, 2023</h6>
                  <p className="card-text"><b>Details :</b> This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text pb-3"><small className="text-muted"><b>Brand : { }</b></small></p>
                  <Link to={'/cart'} className='details__btn'>Buy Now</Link>
                  <Link className='details__btn' data-bs-toggle="modal" data-bs-target="#exampleModal">Video</Link>

                  {/* <!-- Modal --> */}
                  <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          {/* <iframe width="100%" height="280" src="https://www.youtube.com/embed/DNlZaMSigkk?si=xR_CD9N01TIfcFcJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  )
}

export default Details