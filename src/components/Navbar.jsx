import React from 'react'
// import SiCoffeescript from 'react-icons/si'
import { Link } from 'react-scroll'
import Button from '../layouts/Button'

const Navbar = () => {
  return (
    <div>
        <div>
        <div className=" flex flex-row justify-between p-5 lg:px-32 px-5 bg-gradient-to-r from-backgroundColor to-brightColor shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <div className='flex flex-row items-center cursor-pointer gap-2'>
                    <span>
                        {/* <SiCoffeescript></SiCoffeescript> */}
                    </span>
                    <h1>CafePlus</h1>
                </div>

                <nav>
                    <Link to='home' spy={true} smooth={true} duration={500} className='cursor-pointer'>Home</Link>
                    <Link to='menu' spy={true} smooth={true} duration={500} className='cursor-pointer'>Menu</Link>
                    <Link to='about' spy={true} smooth={true} duration={500} className='cursor-pointer'>About Us</Link>
                    <Link to='products' spy={true} smooth={true} duration={500} className='cursor-pointer'>Products</Link>
                    <Link to='reviews' spy={true} smooth={true} duration={500} className='cursor-pointer'>Reviews</Link>
                </nav>
            </div>

            <Button title="Login"></Button>                                                                                                    
        </div>
    </div>
  )
}

export default Navbar