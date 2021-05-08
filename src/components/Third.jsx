import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/Card';

export default function Third(props) {
    return (
        <div>
            
            <div className="width-third-card">
            <CardDeck>
                <div>
  <Card>
    
  <Card.Text><i className="cat-sub-color"><b>{props.cat}</b> | {props.subcategory}</i></Card.Text>
  <Card.Img className="image-third" variant="top" src={props.image } alt="image"  width="50"  />
  <Card.Text className="title-card font-title-third">
        {props.title}
      </Card.Text>

    <Card.Body>
    
      <Card.Text>
        {props.summary}
      </Card.Text>
      <Card.Text>
      <p className="bold">{props.author}</p>
      <div className="align-fafa">
        <div className="date3-align"><p className="font-size cat-sub-color">{props.date} - <b>{props.read}</b></p></div>
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
