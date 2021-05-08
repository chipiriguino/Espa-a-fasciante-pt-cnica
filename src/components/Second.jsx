import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/Card';

export default function Second() {
    return (
        <div>
            
            <div>
            <CardDeck className="cards">
                <div>
  <Card>
  <Card.Text><p className="cat-sub-color"><b>Category</b><br></br><i className="line-top">Subcategory</i></p></Card.Text>
  <Card.Text>
        <p className="title-card">This is a wider card with supporting text below as a natural </p>
      </Card.Text>
    <Card.Img variant="top" src="http://espanafascinante.com/test/images/01.png" width="25" />
   
    
      <Card.Text>
        This is a wider card with supporting text below as a 
      </Card.Text>
      <Card.Text>
      <p className="bold">Author</p>
          <div className="date3-align"><p>Date</p>-<p className="bold">reading</p></div>
          <div className="icons-third"><img src="/images/fb-black.png" width="25" alt="search" /><img  src="/images/share-red.png" width="25" alt="search" /></div>
      </Card.Text>
    
  </Card>
  </div>
</CardDeck>

            </div>
        </div>
    )
}
