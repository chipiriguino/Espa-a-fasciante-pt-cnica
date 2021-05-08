import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/Card';

export default function Third() {
    return (
        <div>
            
            <div className="width-third-card">
            <CardDeck>
                <div>
  <Card>
    
  <Card.Text><i className="cat-sub-color"><b>Category</b>| Subcategory</i></Card.Text>
  <Card.Img variant="top" src="http://espanafascinante.com/test/images/01.png" width="50" height="150" />
  <Card.Text className="title-card font-title-third">
        This is a wider card with supporting text below as a natural lead-in 
      </Card.Text>

    <Card.Body>
    
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in
      </Card.Text>
      <Card.Text>
      <p className="bold">Author</p>
      <div className="align-fafa">
        <div className="date3-align"><p className="font-size cat-sub-color">Date-</p><p className="bold">reading</p></div>
        <div className="icons-third"><img src="/images/fb-black.png" width="25" alt="search" /><img  src="/images/share-red.png" width="25" alt="search" /></div>
        </div>
      </Card.Text>
    </Card.Body>
  </Card>
  </div>
</CardDeck>

            </div>
        </div>
    )
}
