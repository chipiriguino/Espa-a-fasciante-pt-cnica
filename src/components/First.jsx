import React from 'react'
import '../App.css';

export default function First(props) {
    return (
        <div>
            
        <div className="cover">
        <div className="align-category"><h6 className="line">{props.category} | {props.subcategory}</h6></div>
           <h4>{props.title}</h4>
           <h6>{props.summary}</h6>
           <p className="author">{props.author}</p>
          <div className="align-cover"><div className="date"><p>{props.date}</p><p className="reading-time">{props.read}</p></div><div ><img className="fb-img" src="/images/facebook.png" width="25" alt="search" /><img  src="/images/share_white.png" width="25" alt="search" /></div></div> 
        </div>
        </div>
    )
}
