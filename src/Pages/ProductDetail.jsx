import React from 'react'

import { useParams } from 'react-router-dom'
// import products from '../data/products'

import Containe from '../components/Container'
import Container from '../components/Container'
import Rating from '../components/Rating'
import BreadCrumb from '../components/BreadCrumb'
import useProductStore from '../store/useProductStore'
import useCartStore from '../store/useCartStore'


const ProductDetail = () => {
 const {productSlug} = useParams()
 const {products} = useProductStore()
 const currentProduct = products.find(product => product.slug == productSlug)

//  console.log(currentProduct);

//  console.log(productId);
const {carts,addCart} = useCartStore()

const handleAddCartBtn1 = (event) => {
  event.stopPropagation()
  const newCart ={
    id:Date.now,
    productId:currentProduct.id,
    quantity:1
  };
  addCart(newCart)
};

const handleAddedBtn1 = (event) => {
  event.stopPropagation()
  toast.error('Item is already added to cart', {duration: 1500,position: 'top-right'})
}


  return (
    <Container className='px-5' >
      <BreadCrumb currentTitle='Product Detail'/>
      <div className ='border border-black p-10'>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="col-span-1">
          <img className='h-[200px] md:w-1/3 block mb-5 md:mb-0 md:mx-auto ' src={currentProduct.image}  />
        </div>
        <div className="col-span-1 flex flex-col gap-5 items-start ">
          <h3 className='text-3xl font-bold'>{currentProduct.title}</h3>
          <p className='bg-gray-200 text-gray-700 inline-block px-5 py-1'>{currentProduct.category}</p>
          <p>{currentProduct.description}</p>
          <Rating rate={currentProduct.rating.rate}/>
          <div className="flex justify-between w-full items-center">

            <p>{currentProduct.price}</p>
            {carts.find (cart => cart.productId === currentProduct.id) ? <button onClick={handleAddedBtn1} className='text-sm border border-black bg-black text-white px-3 py-1'>Added</button> :
            <button onClick={handleAddCartBtn1} className=' text-sm border border-black px-3 py-1'>Add Cart</button>}
            
          </div>

        </div>
      </div>
      </div>
    </Container>
  )
  
}

export default ProductDetail