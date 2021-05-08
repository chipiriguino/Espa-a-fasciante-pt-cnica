import React from 'react'
import '../App.css';

export default function First(props) {
    return (
        <div>
            
        <div className="cover">
        <div className="align-category"><h8 className="line">CATEGORY  </h8><h8>SUBCATEGORY</h8></div>
           <h4>{props.title}</h4>
           <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
           <p className="author">Author</p>
          <div className="align-cover"><div className="date"><p>Date</p><p className="reading-time">reading time</p></div><div ><img className="fb-img" src="/images/facebook.png" width="25" alt="search" /><img  src="/images/share_white.png" width="25" alt="search" /></div></div> 
        </div>
        </div>
    )
}
