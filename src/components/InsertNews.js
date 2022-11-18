import React, { useState } from 'react'
import category from '../data/category';

const InsertNews = () => {
    const [title, setTitle] = useState("");
    const [categoryData, setCategoryData] = useState("");
    const [content, setContent] = useState("");
    const [ image, setImage] = useState("");
  return (
    <div className='flex justify-center items-center p-3'>
       <div className='w-1/3 bg-slate-400 p-3 rounded-lg'>
            <h1 className='text-black font-bold text-2xl cursor-pointer'>Insert News</h1>
           <div className='w-full flex'>
                <div className='mb-3 flex flex-col w-1/2 '>
                  <label htmlFor=''>Title</label>
                  <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className='border rounded-lg px-3 py-2'/>
                </div>
                <div className='mb-3 flex flex-col w-1/2 ml-2'>
                  <label htmlFor=''>Image</label>
                  <input type="text" value={image} onChange={(e) => setImage(e.target.value)} className='border rounded-lg px-3 py-2'/>
                </div>
           </div>
            <div className='mb-3 flex flex-col'>
                <label htmlFor=''>Category</label>
                <select value={categoryData} onChange={(e) => setCategoryData(e.target.value)} type="text"  className='border rounded-lg px-3 py-2'>
                    {
                        category.map((value, index) =>(
                            <option key={index} value={value.id}>{value.name}</option>
                        ))
                    }
                </select>
            </div>
            <div className='mb-3 flex flex-col'>
                <label htmlFor=''>Content</label>
                <textarea rows={8} type="text" value={content} onChange={(e) => setContent(e.target.value)} className='border rounded-lg px-3 py-2'></textarea>
            </div>
            <div className='mb-3'>
                <button type='button' className='bg-teal-900 text-white px-2 py-1 text-xl rounded-lg'>Insert News</button>
            </div>
       </div>
    </div>
  )
}

export default InsertNews
