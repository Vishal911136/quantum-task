import { Button } from "react-bootstrap";

const Form = () =>{
    return(
        <>
        <div className="form_container">

            <div className="" style={{marginTop: '6rem'}}>
                <h3 className="fw-bold text-center">RESERVATION</h3>
                <h1 className="text-center" style={{fontWeight: '900'}}> BOOK YOUR TABLE </h1>
            </div>

            <div className=" form mt-5 container d-flex align-items-center justify-content-center">
                <div className="form_left">
                    <input type="text" placeholder="NAME" /><br />
                    <input type="text" placeholder="DATE" /><br /> 
                    <input type="text" placeholder="PEOPLE" />
                </div>
                <div className="form_right">
                    <input type="text" placeholder="EMAIL" /><br />
                    <input type="text" placeholder="TIME" /><br />
                    <Button style={{
                        background: 'red',
                        color: 'white',
                        fontWeight: '700',
                        border: 'none',
                    }} >
                        FIND A TABLE</Button>
                </div>
                        <div className="bottle">
                            <img src="images/Bottle.png" alt="" />
                        </div>
            </div>
                        <div className="plate">
                            <img src="images/plate.png" alt="" />
                        </div>
                        <div className="burger">
                            <img src="images/Burger9.png" alt="" />
                        </div>
        </div>
        </> 
    )
}
export default Form;