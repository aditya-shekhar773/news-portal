import React from 'react'
import category from '../data/category'
import {Link} from "react-router-dom"

const NewsCard = ({data}) => {
  let cat = category.find((val) => val.id == data.categoryId)
  return (
    <div className='flex gap-3 border border-black p-2 rounded-2xl mb-3 bg-white'>
        <div className='w-1/5'>
            <img src={data.imgUrl} className='w-full h-full rounded-lg'/>
        </div>
        <div className='w-4/5'>
            <h1 className='text-2xl text-bold font-black'>{data.title}</h1>
            <h6>Category: {cat.name}</h6>
            <p className='text-slate-700 text-base mt-3'>{data.content}</p>
            <br/>
            <div className='flex w-full justify-end'>
                <Link to={`/read/${data.id}`} className='bg-teal-600 px-3 py-2 rounded-lg text-white font-bold hover:bg-teal-800'>Read More</Link>
            </div>
        </div>
    </div>
  )
}

export default NewsCard
