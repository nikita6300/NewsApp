
import image from '../components/depositphotos_37765339-stock-photo-news.jpg'
import React from 'react'

export const Newsitem = (props) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth: "336px"}}>
  <img src={props.src?props.src:image} style={{height:"200px" ,width:"320px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title.slice(0,50)}</h5>
    <p className="card-text">{props.description}</p>
    <a href={props.url} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}
