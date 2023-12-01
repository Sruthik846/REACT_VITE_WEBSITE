import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button className='px-6 py-1 border-white'>
            {props.title}
        </button>
    </div>
  )
}

export default Button