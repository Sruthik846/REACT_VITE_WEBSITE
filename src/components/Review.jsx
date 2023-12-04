import React from 'react'
import ReviewCards from '../layouts/ReviewCards'
import pic1 from '../assets/img/pic1.png'
import pic2 from '../assets/img/pic2.png'
import pic3 from '../assets/img/pic3.png'

const Review = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 bg-backgroundcolor">
        <h1 className='font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8'>Customer's Reviews</h1>

        <div className='flex flex-col lg:flex-row justify-center gap-5 py-4 my-8'>
           <ReviewCards img={pic1} title='Olivia ava'></ReviewCards> 
           <ReviewCards img={pic2} title='Olivia ava'></ReviewCards> 
           <ReviewCards img={pic3} title='Olivia ava'></ReviewCards> 
        </div>
    </div>
  )
}

export default Review