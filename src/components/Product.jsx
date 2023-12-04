import React from 'react'
import ProductCards from '../layouts/productCards'
import img1 from '../assets/img/product1.jpg'
import img2 from '../assets/img/product2.jpg'
import img3 from '../assets/img/product3.jpg'

const Product = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 bg-backgroundcolor">
        <h1 className='font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8'>Our Products</h1>
        <div className=' flex flex-col lg:flex-row justify-center gap-12'>
            <ProductCards img={img1} title="Nespresso"></ProductCards>
            <ProductCards img={img2} title="AeroPress"></ProductCards>
            <ProductCards img={img3} title="Chemex"></ProductCards>
        </div>
    </div>
  )
}

export default Product