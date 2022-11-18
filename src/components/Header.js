import React from 'react'
import {Link} from "react-router-dom"

const Header = () => {
    const Logo = () => <h1 className='cursor-pointer text-white text-2xl first-letter:text-3xl font-bold first-letter:px-2 py-2 first-letter:bg-orange-500 first-letter:rounded-xl'>News Portal</h1>
    const Search = () => (
        <div className='flex gap-2'>
          <input type="search" className="border px-3 py-2 rounded-lg" placeholder="search by news"/>
          <button type="bitton" className="bg-green-700 px-3 py-1 rounded-lg text-white">Go</button>
        </div>
    )

    const LinkList = () => (
        <div className='flex '>
            <Link to="" className='text-white p-3 font-semibold'>Home</Link>
            <Link to="/about" className='text-white p-3 font-semibold'>About</Link>
            <Link to="/content" className='text-white p-3 font-semibold'>Contact</Link>
            <Link to="/insert" className='text-white p-3 font-semibold'>InsertNews</Link>
        </div>
    )
    
  return (
    <div className='bg-blue-800 flex py-4 px-5 justify-between items-center sticky top-0'>
      <Logo/>
      <Search/>
      <LinkList/>
    </div>
  )
}

export default Header
