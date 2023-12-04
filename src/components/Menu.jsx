import React from 'react'
import MenuCards from '../layouts/MenuCards'
import img1 from '../assets/img/menu1.jpg'
import img2 from '../assets/img/menu2.jpg'
import img3 from '../assets/img/menu3.jpg'
import img4 from '../assets/img/menu4.jpg'
import img5 from '../assets/img/menu5.jpg'
import img6 from '../assets/img/menu6.jpg'

const Menu = () => {
  return (
    <div className=' min-h-screen bg-backgroundcolor flex flex-col justify-center px-5 lg:px-32'>
        <h1 className='text-4xl font-semibold text-center mt-24 mb-8'>Our Menus</h1>

        <div className='flex flex-wrap justify-center pb-8 gap-8'>
            <MenuCards img={img1} title="Espresso"/>
            <MenuCards img={img2} title="Cappuccino"/>
            <MenuCards img={img3} title="Latte"/>
            <MenuCards img={img4} title="Americano"/>
            <MenuCards img={img5} title="Macchiato"/>
            <MenuCards img={img6} title="Doppio"/>
        </div>
    </div>
  )
}

export default Menu