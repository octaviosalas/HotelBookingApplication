import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "../styles/hotelsstructure.css"
import { Link } from 'react-router-dom';


const StructureItems = ({hotels}) => {
  
  return (
    <>
    <div className='structure-items'> 
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" className='img-item' src={hotels.img[0]} />
      <Card.Body>
        <Card.Title>{hotels.name}</Card.Title>
        <Card.Text>
        <b>City:</b>  {hotels.city}
        <br />
        <b>Country:</b>  {hotels.country}
        <br />
        <b>Average Price:</b>  {hotels.averagePrice}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{hotels.stars} Stars ⭐</ListGroup.Item>
        <ListGroup.Item>
          <b className='servicies'>Servicies</b>
            <br />
            <ul>
              <li>{hotels.servicies[0]}</li>
              <li>{hotels.servicies[1]}</li>
              <li>{hotels.servicies[2]}</li>
              <li>{hotels.servicies[3]}</li>
              <li>{hotels.servicies[4]}</li>
              <li>{hotels.servicies[5]}</li>
              <li>{hotels.servicies[6]}</li>
              <li>{hotels.servicies[7]}</li>
              <li>{hotels.servicies[8]}</li>
            </ul>
          </ListGroup.Item>
        <ListGroup.Item><b>Contact: </b>{hotels.telephone}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
       <Link to={`/hotelDetail/${hotels.id}`}><Card.Link className='more-info'>View More Info</Card.Link></Link>
      </Card.Body>
       </Card>
    </div>
    
    </>
    
  )
}

export default StructureItems
