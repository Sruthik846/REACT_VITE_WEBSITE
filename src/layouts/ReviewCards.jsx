import React from 'react'
import { FaQuoteRight } from 'react-icons/fa'
import { BsStarHalf } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";

const ReviewCards = (props) => {
  return (
    <div className='flex flex-col w-full lg:w-2/6 bg-white p-3 rounded-lg gap-5'>
        <div className=' flex flex-row items-center lg:justify-start justify-center'>
            <div className=' w-1/4'>
                <img src={props.img} alt="image" />
            </div>
            <div className='mx-3'>
                <h2 className=' text-lg font-semibold'>{props.title}</h2>
                <div className='flex'>
                    <BsStarFill className=' text-brightColor'/>
                    <BsStarFill className=' text-brightColor'/>
                    <BsStarFill className=' text-brightColor'/>
                    <BsStarFill className=' text-brightColor'/>
                    <BsStarHalf className=' text-brightColor'/>
                </div>
            </div>
            <span className='ml-16'>
                <FaQuoteRight size={42} className=' text-backgroundcolor'></FaQuoteRight>
            </span>
        </div>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ut
            minima perspiciatis doloribus quod repellendus molestiae rerum!
            Enim, vero natus.
        </p>
    </div>
  )
}

export default ReviewCards