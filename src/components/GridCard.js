import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const GridCard = () =>{
    return(
        <>
            <Container className='pt-5'>
                <Row>
                    <Col>
                    <Card className="bg-dark text-white">
                        <Card.Img  src="images/Burger2.png" alt="Card image" />    
                    </Card>
                    </Col>

                    <Col>
                        <Card.Img src="images/Burger3.png"></Card.Img>
                        <Card.Img style={{paddingTop:'32px'}} src="images/Burger4.png"></Card.Img>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default GridCard;