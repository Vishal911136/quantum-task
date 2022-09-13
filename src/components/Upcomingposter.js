import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Upcomingposter = () =>{
    return (
        <>
            <div className=' container-fluid mt-5 p-3' style={{background: 'whitesmoke',width:'1295px',boxShadow:'0px 0px 26px -12px'}}>
                <Row>
                    <Col className='p-5 mt-5'>
                        <p className="fs-4 fw-bold">DISCOVER</p>
                        <h1 style={{fontWeight: '900',fontSize: '41px'}}>UPCOMING EVENT</h1>
                        <p style={{fontWeight: '600',fontSize: '21px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum the industry's standard dummy since the 1500s, when an unknown printer took a galley of type and scrambled </p>
                    </Col>

                    <Col className='p-3'>
                        <Card.Img src="images/Burger8.png"></Card.Img>
                    </Col>
                </Row>                
            </div>
        </>
    )
}

export default Upcomingposter;