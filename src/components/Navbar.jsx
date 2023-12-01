import React from 'react'
import SiCoffeescript from 'react-icons/si'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div>
        <div>
            <div>
                <div>
                    <span>
                        <SiCoffeescript></SiCoffeescript>
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

            <button>Login</button>
        </div>
    </div>
  )
}

export default Navbar