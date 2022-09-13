import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'

const Product = () =>{
    return(
        <>
        <Container className='pt-5 d-flex align-items-center justify-content-center flex-column'>
          <Button style={{padding:'10px',fontSize:'18px',fontWeight: '800', background:'orange', border:'none',color:'black'}}>ALWAYS TASTY BURGER</Button>{' '}
          <h1 style={{paddingTop:'8px',fontSize: '50px',color:'#271506',textShadow:'orange 0 3px',fontWeight:'900'}}>CHOOSE & ENJOY</h1>
          <p className="pt-2 px-3 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum the industry's standard dummy since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          </p>

          <div className="pt-5 d-flex justify-content-between product-container">
          <Card style={{ width: '18rem',border:'none' }}>
            <Card.Img variant="top" src="images/Burger5.png" />
            <Card.Body>
                <Card.Title style={{width:'260px',fontWeight:'700'}} className='text-center fs-4'>LOREM IPSUM DOLOR</Card.Title>
                <Card.Text className='text-center'>
                Lorem ipsum dolor is amet consectetur adipicing elt sed do 
                </Card.Text>
                <div className="w-100 d-flex justify-content-center" style={{width: '100%'}}>
                    <Button className='bg-red fw-bold' variant="danger">ORDER NOW</Button>
                </div>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem',border:'none', margin:'0 6rem' }}>
            <Card.Img style={{width: '265px'}} variant="top" src="images/Burger6.png" />
            <Card.Body>
                <Card.Title style={{width:'260px',fontWeight:'700'}} className='text-center fs-4'>LOREM IPSUM DOLOR</Card.Title>
                <Card.Text className='text-center'>
                Lorem ipsum dolor is amet consectetur adipicing elt sed do 
                </Card.Text>
                <div className="w-100 d-flex justify-content-center" style={{width: '100%'}}>
                <Button className='bg-red fw-bold' variant="danger">ORDER NOW</Button>
                </div>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem',border:'none' }}>
            <Card.Img variant="top" src="images/Burger7.png" />
            <Card.Body>
                <Card.Title style={{width:'260px',fontWeight:'700'}} className='text-center fs-4'>LOREM IPSUM DOLOR</Card.Title>
                <Card.Text className='text-center'>
                Lorem ipsum dolor is amet consectetur adipicing elt sed do 
                </Card.Text>
                <div className="w-100 d-flex justify-content-center" style={{width: '100%'}}>
                <Button className='bg-red fw-bold' variant="danger">ORDER NOW</Button>
                </div>
            </Card.Body>
          </Card>
          </div>
        </Container>
        </>
    )
}

export default Product