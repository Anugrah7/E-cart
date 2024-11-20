import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link, redirect, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQuantity, emptyCart, incrementQuantity } from '../redux/slices/cartSlice'
import { removeCartItem } from '../redux/slices/cartSlice'

const Cart = () => {
  const navigate = useNavigate()
  const userCart = useSelector(state=>state.cartReducer)
  const [cartTotal,setCartTotal] = useState(0)
  const dispatch = useDispatch()



  useEffect(()=>{
    if(userCart?.length>0){
      setCartTotal(userCart?.map(item=>item.totalPrice).reduce((a1,a2)=>a1+a2))
    }
  },[userCart])

  const handleDecrementQuantity = (product)=>{
    if(product?.quantity>1){
      dispatch(decrementQuantity(product.id))
    }else{
      dispatch(removeCartItem(product.id))
    }
  }

  const Checkout = ()=>{
    dispatch(emptyCart())
    alert("order confirmed... Thank You fo Purschasing with us ")

  //redirect to home
  navigate("/")
  }

  return (
    <>
    <Header />
    <div style={{paddingTop:'100px'}} className='px-5'>
    {
      userCart?.length>0 ?
    <>
    <h1 className='text-5xl font-bold text-blue-600'>Cart Summary</h1>
    <div className='grid grid-cols-3 gap-4 mt-5'>
      <div className="col-span-2 border rounded p-5 shadow">
        <table className='table auto w-full'>
          <thead>
            <tr>
              <td className='font font-semibold'>#</td>
              <td className='font font-semibold'>Name</td>
              <td className='font font-semibold'>Image</td>
              <td className='font font-semibold'>Quantity</td>
              <td className='font font-semibold'>Price</td>
              <td className='font font-semibold'>Delete</td>
            </tr>
          </thead>
          <tbody>
            {
              userCart?.map((product,index)=>(

           <tr>
            <td>{index+1}</td>
            <td>{product?.title}</td>
            <td><img src={product?.thumbnail} width={'70px'} height={'70px'} alt="" /></td>
            <td>
              <div className='flex'>
                <button onClick={()=>handleDecrementQuantity(product)} className='font-bold pe-1'>-</button>
                <input style={{width:'40px'}} className='border p-1 rounded' value={product?.quantity} readOnly type="text" />
                <button onClick={()=>dispatch(incrementQuantity(product?.id))} className='font-bold ps-1'>+</button>
              </div>
            </td>
            <td>${product?.totalPrice}</td>
            <td><button onClick={()=>dispatch(removeCartItem(product?.id))} className='text-red-600'><i className='fa-solid fa-trash'></i></button></td>
            </tr>

          ))
        }
          </tbody>
        </table>
        <div className="float-right mt-5">
          <button onClick={()=>dispatch(emptyCart())}  className="bg-red-600 rounded p-2 text-white">Empty Cart</button>
          <Link to={'/'} className='bg-blue-600 ms-3 rounded p-2 text-white'>Shop More</Link>
          
        </div>
      </div>
      <div className="col-span-1">
        <div className="border rounded shadow p-5">
          <h2 className='text-2xl font-bold my-4'>Total Amount : <span className='text-red-600'>${cartTotal}</span></h2>
          <hr />
          <button onClick={Checkout} className="bg-green-600 rounded text-2xl font-bold text-white mt-4 w-full" style={{height:'50px',}}>Checkout</button>
        </div>
      </div>
    </div>
    </>
    :
    <div className="flex flex-col justify-center item-center align-center">
          <img className='w-100 h-1/2 ml-[34%]' src="https://cdn.dribbble.com/users/2046015/screenshots/4591856/first_white_girl_drbl.gif" alt=""  width={'650px'}/>
          <h1 className='text-4xl ml-[40%] text-red-600 mt-3'>Your Cart is empty!!</h1>
        </div>
    }
    </div>
    </>
  )
}

export default Cart