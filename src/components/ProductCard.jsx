import React from 'react'
import Rating from './Rating'
import { Link, useNavigate } from 'react-router-dom'
import useCartStore from '../store/useCartStore'
import toast from 'react-hot-toast'
// import cartsdata from '../data/cartsdata'


const ProductCard = ({
  product:{
    id,title,price,image,rating :{rate},slug
  }
}) => {
 
  const {carts,addCart} = useCartStore()

  const navigate = useNavigate()
 
  const handleAddedBtn = (event) => {
    event.stopPropagation()
    toast.error('Item is already added to cart', {duration: 1500,position: 'top-right'})
  }
  const handleAddCartBtn = (event) => {
    event.stopPropagation()
   const newCart ={
    id:Date.now(),
    productId:id,
    quantity:1
   };
   addCart(newCart)
  }

  const handleOpenProductDetail = () => {
    navigate(`/product-detail/${slug}`)
  }
  
  return (
    <div onClick={handleOpenProductDetail} className='border border-black p-5 flex flex-col items-start gap-5 rounded-md'>
        <img src={image} className='h-40' alt={title} />
        <p className='font-bold line-clamp-2'>{title}</p>
        <Rating rate={rate}/>
        <div className="flex justify-between w-full items-end ">
        <p>{price}</p>
        {carts.find(cart=> cart.productId === id) ? <button onClick={handleAddedBtn} className='text-sm font-bold text-justify border-2 border-black bg-black rounded-md text-white px-3 py-1'>Added</button> :
        <button onClick={handleAddCartBtn} className=' text-sm font-bold text-justify border-2 bg-blue-100 border-black rounded-md px-3 py-1'>Add Cart</button>}
        </div>
    </div>
  )
}

export default ProductCard