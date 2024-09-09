import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


function CardComponent ({product}){
return(

<>

<Container >
    
<Card  style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title> {product.name} </Card.Title>
        <Card.Text>
        {product.description} -{product.price}EGP
        </Card.Text>
        <Button variant="primary">Add to Card</Button>
      </Card.Body>
    </Card>
    </Container>

</>



)





}
export default CardComponent;