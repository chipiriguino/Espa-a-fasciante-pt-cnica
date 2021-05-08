import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/Card';

export default function Second(props) {
    return (
        <div>
            
            <div>
            <CardDeck className="cards">
                <div>
  <Card>
  <Card.Text><p className="cat-sub-color"><b>{props.cat}</b><br></br><hr></hr><i >{props.subcategory}</i></p></Card.Text>
  <Card.Text>
        <p className="title-card">{props.title} </p>
      </Card.Text>
    <Card.Img variant="top" src={props.image} alt="image" width="25" />
   
    
      <Card.Text>
        {props.summary}
      </Card.Text>
      <Card.Text>
      <p className="bold">{props.author}</p>
          <div className="date3-align"><p className="font-size cat-color">{props.date} -</p><p className="bold">{props.read}</p></div>
          <div className="icons-third"><img src="/images/fb-black.png" width="25" alt="search" /><img  src="/images/share-red.png" width="25" alt="search" /></div>
      </Card.Text>
    
  </Card>
  </div>
</CardDeck>

            </div>
        </div>
    )
}
