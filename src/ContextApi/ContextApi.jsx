import { createContext, useContext, useEffect, useState } from "react";
import { commerce } from '../lib/commerce';
// context api
export const MobileContext = createContext();

const MobileDataProvider = ({ children }) => {
  // state variable
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectCategories, setSelectCategories] = useState()
  const [searchProducts, setSearchProducts] = useState('')
  console.log(searchProducts);
  const [page, setPage] = useState(1); //default page number
  const [perPage, setPerPage] = useState(10); // page page view item
  const [totalPages, setTotalPages] = useState(0); // total page count
  const [loading, setLoading] = useState() // page loading


  // Product List Fetch with pagination
  const getProducts = async () => {
    setLoading(true)
    const fetch = await commerce.products.list({ page, limit: perPage, });
    setLoading(false)
    return (
      setProducts(fetch.data),
      setTotalPages(fetch.meta.pagination.total_pages)//for pagination
    )
  }
  // pagination Button
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  //--------------------------------------------------------------------------//
  // Product List Fetch in Commerce.js Documentation[এইভাবেও কাজ করছে]
  // const fetchProducts = () => {
  //   commerce.products.list().then((products) => {
  //     setProducts(products.data);
  //   }).catch((error) => {
  //     console.log('There was an error fetching the products', error)
  //   });
  // }
  // -------------------------------------------------------------------------//

  // Categories List Fetch
  const getCategories = async () => {
    const { data: fetch } = await commerce.categories.list();
    return setCategories(fetch)
  }

  // Fetch products based on the selected category filter
  const getSelectedCategory = (event) => {
    const CategoryName = event.target.value
    setSelectCategories(CategoryName)
    commerce.products.list({ category_slug: [CategoryName] })
      .then((res) => {
        setProducts(res.data);
      });
  }

  // Search Product
  const getSearchProduct = (event) => {
    const SearchValue = event.target.value
    setSearchProducts(SearchValue)
  };

  // const getSearchFilter = async () => {
  //   const searchData = await commerce.products.list({ query: [searchProducts] })
  //   console.log(searchData.data);
  //   setProducts(searchData.data);
  // }

  // useEffect Hook
  useEffect(() => {
    getProducts()
    getCategories()
  }, [page, perPage,])


  return <MobileContext.Provider value={{ products, categories, loading, page, totalPages, handlePageChange, getSelectedCategory, getSearchProduct, }}>
    {children}
  </MobileContext.Provider>
}
export default MobileDataProvider

// coustom hooks
export const useMobileContext = () => {
  return useContext(MobileContext)
}