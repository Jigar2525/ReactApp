import React from 'react'
import { blog } from '../dummydata'
import './blog.css'
const BlogCard = () => {
  return (
    <>
      {blog.map((val)=>{
      return(
        <div className="items shadow">
                <div className="img">
                        <img src={val.cover}alt="" />
                </div>
                <div className="text">
                        <div className="admin flexSB">
                                <span>
                                        <i className='fa fa-user'></i>
                                        <label htmlFor="">{val.type}</label>
                                </span>
                                <span>
                                        <i className='fa fa-calander-alt'></i>
                                        <label htmlFor="">{val.date}</label>
                                </span>
                                <span>
                                        <i className='fa fa-comment'></i>
                                        <label htmlFor="">{val.com}</label>
                                </span>
                        </div>
                        <h1>{val.title}</h1>
                        <h1>{val.desc}</h1>
                </div>
        </div>
      )})}
    </>
  )
}

export default BlogCard
