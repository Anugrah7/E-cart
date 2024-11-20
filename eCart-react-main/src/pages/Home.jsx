import React, { useEffect,useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/slices/productSlice'

const Home = () => {

  const dispatch = useDispatch()
  const {allProducts,loading,errorMsg} = useSelector(state=>state.productReducer)
  // console.log(allProducts,loading,errorMsg);
  const [currentPage,setCurrentPage] = useState(1)
  const productPerPage = 8 
  const totalPages = Math.ceil(allProducts?.length/productPerPage)
  const currentPageProductLastIndex = currentPage * productPerPage
  const currentPageProductFirstIndex = currentPageProductLastIndex-productPerPage
  const visibleAllProducts = allProducts?.slice(currentPageProductFirstIndex,currentPageProductLastIndex)
  

  useEffect(()=>{
    dispatch(fetchProducts())
  },[])

  const navigateToNextPage =()=>{
    if(currentPage!=totalPages){
      setCurrentPage(currentPage+1)
    }
  }
 
  const navigateToPrevPage = ()=>{
    if(currentPage!=1){
      setCurrentPage(currentPage-1)
    }
  }
  return (
    <>
 <Header insideHome={true}/>
<div style={{paddingTop:"100px"}} className='container px-4 mx-auto'>
 {
  loading?
  <div className='flex justify-center items-center my-5 text-lg'>
    <img width={"70px"} height={"70px"} src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="" />
   

  </div>
  :
  <>
 <div className='grid grid-cols-4 gap-4'>
   {
    allProducts?.length>0 ?
    visibleAllProducts?.map(products=>(
      <div key={products?.id} className='rounded border p-2 shadow'>
      <img width={"100%"} height={"200px"} src={products?.thumbnail} />
      <div className='text-center'>
        <h3 className='text-xl font-bold'>{products?.title}</h3>
        <Link to={`/${products?.id}/view`} className='bg-amber-800 rounded p-1 mt-3 text-white inline-block'>View More...</Link>
      </div>
    </div>
 
    ))
   :
   <div className='flext jusify-center items-center font-bold text-red-600 my-5 text-lg'>
    Products not found
   </div>
   }
  </div>
  <div className="text-2xl text-center font-bold mt-20">
    <span onClick={navigateToPrevPage} className='cursor-pointer'><i className='fa-solid fa-backward me-5 text-amber-700'></i>
    </span>
    <span>{currentPage} of {totalPages}</span>
    <span onClick={navigateToNextPage} className='cursor-pointer'><i className='fa-solid fa-forward ml-5 text-amber-700'></i></span>
  </div>
  </>
}
  </div>   
 </>

  )
}

export default Home