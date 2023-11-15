// import react slick slider
import Slider from "react-slick";
// import navlink for navbar
import { Link, NavLink } from "react-router-dom"
// import logo images
import Barnds1 from "../../assets/Images/Category/iphone.png"
// import coustome css
import './CategoriesList.css'
import { useMobileContext } from "../../ContextApi/ContextApi";

const Categories = () => {
  const { categories } = useMobileContext()

  var settings = {
    dots: true,
    infinite: true,
    // speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
      <Slider {...settings}>
        {
          categories.map((category) => (
            <div className="category__brands">
              <img className="brands__img" src={Barnds1} alt="" />
              {/* <img className="brands__img" src={category.image?.url} alt="" /> */}
              <Link className="barnds__name" to={"/product"} key={category.id}>{category.name}</Link>
            </div>
          ))
        }
      </Slider>
    </div>
  );
}

export default Categories