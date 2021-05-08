import React from 'react'
import '../App.css';

export default function FirstQ(props) {
    return (
        <div className="align-cover1">
            
        <div className="cover1">
        <div className="align-category"><h6 className="line"><b>{props.category}</b> | {props.subcategory}</h6></div>
           <h4>{props.title}</h4>
           <h6>{props.summary}</h6>
           <p className="author-query">{props.author}</p>
          <div className="align-cover"><div className="align-data-query" ><p className="date-query">{props.date}</p><p className="reading-time-query">{props.read}</p></div><div ><img className="fb-img" src="/images/fb-black.png" width="25" alt="fb-black" /><img  src="/images/share-red.png" width="25" alt="share-red" /></div></div> 
        </div>
        <div><img className="margin-img" src={props.image} alt="house"  height="370"/></div>
        </div>
    )
}
