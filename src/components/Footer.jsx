import React from 'react'

const Footer = () => {
  return (
    <div className=' bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E] text-black rounded-t-3xl mt-8 md:mt-0'>
        <div className=' flex flex-col md:flex-row justify-between md:p-32 p-8 px-5 '>
            <div className=' w-full md:w-1/4'>
                <h1 className=' font-semibold text-xl pb-8'>Cafepulse</h1>
                <p className='text-sm'>
                    Welcome to our coffee haven! Explore our aromatic brews, savor
                    artisanal flavors, and discover the perfect roast to elevate your
                    daily ritual.
                </p>
            </div>
            
            <div>
                <h1 className=' text-xl font-medium pb-4 md:pt-0 pt-5'>Links</h1>
                <nav className=' flex flex-col gap-2'>
                    <a className=' hover:text-backgroundcolor transition-all cursor-pointer' href="/">Menu</a>
                    <a className=' hover:text-backgroundcolor transition-all cursor-pointer' href="/">About us</a>
                    <a className=' hover:text-backgroundcolor transition-all cursor-pointer' href="/">products</a>
                    <a className=' hover:text-backgroundcolor transition-all cursor-pointer' href="/">Reviews</a>
                </nav>
            </div>

            <div>
                <h1 className=' text-xl font-medium pb-4 md:pt-0 pt-5'>Menus</h1>
                <nav className=' flex flex-col gap-2'>
                    <a className=' hover:text-backgroundcolor transition-all cursor-pointer' href="/">Cappuccino</a>
                    <a className=' hover:text-backgroundcolor transition-all cursor-pointer' href="/">Latte</a>
                    <a className=' hover:text-backgroundcolor transition-all cursor-pointer' href="/">Americano</a>
                </nav>
            </div>

            <div>
                <h1 className=' text-xl font-medium pb-4 md:pt-0 pt-5'>Contact Us</h1>
                <nav className=' flex flex-col gap-2'>
                    <a className=' hover:text-backgroundcolor transition-all cursor-pointer' href="/">cafeplus@gmail.com</a>
                    <a className=' hover:text-backgroundcolor transition-all cursor-pointer' href="/">+81 967 843 567</a>
                    <a className=' hover:text-backgroundcolor transition-all cursor-pointer' href="/">Social media</a>
                </nav>
            </div>

        </div>
            <div>
                <p className=' text-center py-4'>
                    @copyright developed by
                    <span className=' text-backgroundcolor'>Infolks Pvt Ltd</span> | All rights reserved
                </p>
            </div>
    </div>
  )
}

export default Footer