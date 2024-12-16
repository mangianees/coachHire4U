import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Reviews.css'
import reviewCard from '../../images/reviewCard.png'
import review1 from '../../images/review01.png'
import { Container } from 'react-bootstrap';

function Reviews() {
  return (
    <>
    <Container>
    <CardGroup>

    <Card >
         <Card.Img variant="top" src= {reviewCard} className='reviewCard'/>
        
      </Card>
      <Card >
         <Card.Img variant="top" src= {review1} className='reviewCard'/>
        
      </Card>
      <Card>
         <Card.Img variant="top" src= {review1} className='reviewCard'/>
        
      </Card>
      <Card>
         <Card.Img variant="top" src= {review1} className='reviewCard'/>
        
      </Card>
    </CardGroup>
    </Container>
    </>
  );
}

export default Reviews;