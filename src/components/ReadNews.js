import React from 'react'
import NewsCard from './NewsCard';
import news from '../data/news'
import {useParams} from "react-router-dom"




const ReadNews = () => {
    let {id} = useParams();
    const data= news[id];
  return (
    <div className='px-24 py-3'>
        <NewsCard data={data}/>
    </div>
  )
}

export default ReadNews
