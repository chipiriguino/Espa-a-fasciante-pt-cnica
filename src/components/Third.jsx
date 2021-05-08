import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/Card';

export default function Third() {
    return (
        <div>
            
            <div>
            <CardDeck>
                <div>
  <Card>
  <Card.Text>Category<br></br>Subcategory</Card.Text>
  <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. 
      </Card.Text>
    <Card.Img variant="top" src="http://espanafascinante.com/test/images/01.png" width="50" height="150" />
    <Card.Body>
    
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in
      </Card.Text>
      <Card.Text>
        Author
      </Card.Text>
    </Card.Body>
  </Card>
  </div>
</CardDeck>

            </div>
        </div>
    )
}
