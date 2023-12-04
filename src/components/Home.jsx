import React from 'react'
import Button from '../layouts/Button'
import img from '../assets/img/home.png'

const Home = () => (
    <div className=' min-h-screen flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:px-32 px-5 gap-10 bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E]' >
        <div className=' mt-14 lg:mt-0 w-full lg:w-2/4 space-y-4'>
            <h1 className='text-5xl font-semibold text-center lg:text-start leading-tight'> Start your day with streaming cup of coffee</h1>
            <p> Boost your productivity and build your mood with a glass of coffee in the morning</p>

            <div className='flex flex-row gap-6'>
            <Button title='AD TO CARD'/>
            <Button title='MORE MENU'/>
        </div>
        </div>
        <div className='relative'>
            <img src={img} alt="img" />

            <div className='absolute bg-white px-8 py-2 top-5 right-0 rounded-full shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]'>
                <h2>14K</h2>
            </div>

            <div className='absolute bg-white px-8 py-2 -left-10 bottom-0 rounded-full'>
                <h2>Cappuccino</h2>
            </div>
        </div>
    </div>
)

export default Home