// import layouts for dinamic page
import Layouts from "../../Layouts/Layouts"
// import components
import Carousel from "../../Components/Hero-Slider/Carousel"

// import coustome css
import "./Home.css"
import CategoriesList from "../../Components/Categories/CategoriesList"

const Home = () => {
  return (
    <Layouts title={"Home"}>
      <section className="hero__section"><Carousel /></section>

      <section className="categories__section">
        <div className="container"><CategoriesList /></div>
      </section>

    </Layouts>
  )
}

export default Home