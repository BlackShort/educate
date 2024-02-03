import React from 'react'

import { ReactPropTypes } from 'react'

export const Navbar = ({props}) => {
  return (
    <div className='Navbar flex bg-purple-500 justify-between px-5 py-2.5' >
        <div className=''>logo</div>
        <div className='right flex gap-5'>
            <ul className='flex flex-row gap-4'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                
            </ul>
            <button className='bg-red-300 rounded-lg px-5 py-0.5 ' >login</button>
        </div>
    </div>
  )
}
