import { useMobileContext } from '../../ContextApi/ContextApi'
import './ProductFilter.css'

const ProductFilter = () => {
  const { categories, getSelectedCategory, getSearchProduct } = useMobileContext()

  return (
    <>
      <div className="search__box flex-md-nowrap">

        <input onChange={getSearchProduct} className="form-control border border-warning mb-3 mb-sm-0 d-block me-0 me-sm-2" type="search" placeholder="Search" />

        <select onChange={getSelectedCategory} className="form-select border border-warning d-block mb-3 mb-sm-0" aria-label="Default select example">
          <option >All Categories</option>

          {
            categories.map((category) => (
              <option key={category.id} value={category.slug}>{category.name}</option>
            ))
          }
        </select>
      </div>
    </>
  )
}

export default ProductFilter