import React from 'react'
import "../styles/continents.css"
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import europe from "../img/europeimg.png"
import south from "../img/southamericaimg.png"
import eeuu from "../img/eeuu.png"
import world from "../img/world.png"


const ContinentsItems = () => {

     

  return (
    <div className='sections-container'>
       <CardGroup>
          <Card className='card-continent'>
             <Card.Img  className='card-img' src={europe} />
               <Card.Body>
               <Link to={"/europeHotels"}> <Card.Title><button className='btn-sectionn'>European Hotels</button></Card.Title></Link>
               </Card.Body>
               <Card.Footer>
                         <small className="text-muted">More than 100 Hotels</small>
               </Card.Footer>
          </Card>

          <Card className='card-continent'> 
             <Card.Img  className='card-img' src={south}/>
               <Card.Body>
               <Link to={"/southAmericaHotels"}> <Card.Title><button className='btn-sectionn'>SouthAmerica Hotels</button></Card.Title></Link>
               </Card.Body>
               <Card.Footer>
                         <small className="text-muted">More than 100 Hotels</small>
               </Card.Footer>
          </Card>

          <Card className='card-continent'> 
             <Card.Img  className='card-img' src={eeuu} />
               <Card.Body>
               <Link to={"/americanHotels"}><Card.Title><button className='btn-sectionn'>American Hotels</button></Card.Title></Link>
               </Card.Body>
               <Card.Footer>
                         <small className="text-muted">More than 100 Hotels</small>
               </Card.Footer>
          </Card>

          <Card className='card-continent'>
             <Card.Img  className='card-img' src={world} />
               <Card.Body>
               <Link to={"/allHotels"}> <Card.Title><button className='btn-sectionn'>All Our Hotels</button></Card.Title></Link>
                    
               </Card.Body>
               <Card.Footer>
                         <small className="text-muted">More than 100 Hotels</small>
               </Card.Footer>
          </Card>

    </CardGroup>

    </div>
   
  )
}

export default ContinentsItems

