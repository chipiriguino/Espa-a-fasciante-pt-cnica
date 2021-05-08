import React from 'react'
import '../App.css';

export default function FirstQ(props) {
    return (
        <div className="align-cover1">
            
        <div className="cover1">
        <div className="align-category"><h6 className="line">{props.category} | {props.subcategory}</h6></div>
           <h4>{props.title}</h4>
           <h6>{props.summary}</h6>
           <p>{props.author}</p>
          <div className="align-cover"><div ><p>{props.date}</p><p>{props.read}</p></div><div ><img className="fb-img" src="/images/fb-black.png" width="25" alt="search" /><img  src="/images/share-red.png" width="25" alt="search" /></div></div> 
        </div>
        <div><img className="margin-img" src={props.image} alt="image" width="825" height="370"/></div>
        </div>
    )
}
