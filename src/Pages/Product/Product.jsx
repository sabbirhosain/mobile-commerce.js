// import layouts for dinamic page
import Layouts from '../../Layouts/Layouts'
// import components
import ProductFilter from '../../Components/Product-Filter/ProductFilter'
import ProductCard from '../../Components/ProductCard/ProductCard'
// import coustome css
import "./Product.css"
import { useMobileContext } from '../../ContextApi/ContextApi'
import Loading from '../../Components/Loading/Loading'

const Product = () => {
  const { products, loading, page, totalPages, handlePageChange } = useMobileContext();

  return (
    <Layouts title={"Product"}>
      <section className="product__filter container">
        <ProductFilter />
      </section>

      <section className="product__cards container">
        <div className="row mt-5">
          {
            loading && <Loading />
          }
          {
            products.map(product => <ProductCard key={product.id} productDetails={product} />)
          }
        </div>
        <div className='d-flex align-items-center justify-content-center mt-5'>
          <button className='pagination__btn' onClick={() => handlePageChange(page - 1)} disabled={page === 1} >Prev</button>

          <span className='mx-3'>Page {page} of {totalPages}</span>

          <button className='pagination__btn' onClick={() => handlePageChange(page + 1)} disabled={page === totalPages}>Next</button>
        </div>
      </section>
    </Layouts>
  )
}

export default Product