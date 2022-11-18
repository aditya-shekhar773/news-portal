import React from 'react'
import {Link} from "react-router-dom"

const Sidebar = ({category}) => {
    const Item = (props) => <Link className='text-white p-3 border hover:bg-green-700 text-center hover:shadow-xl bg-gray-600 cursor-pointer font-bold text-xl hover:text-xl rounded-lg rounded-tl-3xl rounded-br-3xl'>{props.title}</Link>
  return (
    <div className='flex flex-col gap-1'>
        {
            category.map((value, index) =>( 
                <Item  key={index}  title={value.name}/>
            ))
        }
    </div>
  )
}

export default Sidebar
