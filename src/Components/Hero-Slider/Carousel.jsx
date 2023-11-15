// import images
import slider1 from '../../assets/Images/Carousel/carouse1.jpg'
import slider2 from '../../assets/Images/Carousel/carouse2.jpg'
import slider3 from '../../assets/Images/Carousel/carouse3.jpg'
import slider4 from '../../assets/Images/Carousel/carouse4.jpg'
// import coustome css
import './Carousel.css'
const Carousel = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={slider1} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={slider2} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={slider3} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={slider4} className="d-block w-100" alt="..."/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Carousel