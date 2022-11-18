import React from 'react'
import NewsCard from './NewsCard'
import Sidebar from './Sidebar'

const Layuot = ({category,news}) => {
  return (
    <div className='flex'>
       <div className='w-1/5 p-3 position-fixed'>
           <Sidebar category={category}/>
       </div>
       <div className='w-4/5 p-3'>
          {
              news.map((data, index) => (
                <NewsCard key={index} data={data}/>
            ))
          }
       </div>
    </div>
  )
}

export default Layuot
