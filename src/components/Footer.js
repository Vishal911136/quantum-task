import { FaFacebook, FaHamburger, FaInstagram } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import {AiFillTwitterCircle} from 'react-icons/ai'
import {RiWhatsappFill} from 'react-icons/ri'
const Footer = () =>{
    return(
        <>
            <div className="footer container-fluid p-5" style={{marginTop: '12rem'}}>
                    <div className="footer_text">
                        <div className="logo">
                             <FaHamburger style={{fontSize:'80px'}}/> <h2 style={{fontSize:'46px'}}>BURGER HOUSE</h2>
                        </div>

                        <div className="d-flex justify-content-batween">
                            <div className="footer_left">
                                <p className="mt-5 fw-bold">Lorem Ipsum is simply dummy text of the printing and typesetting industry. dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. dummy text of the printing and typesetting industry simply dummy text. </p>
                            </div>
                            <div className="footer_right mt-5">
                                <div className="d-flex flex-column" style={{marginLeft:'5rem'}}>
                                    <div className="d-flex">
                                    <MdLocationOn style={{fontSize: '2.75rem'}}/> <h6 style={{marginLeft:'1rem'}}>MAIN ROAD, INDIA BUILDING, INDIA</h6>
                                    </div>
                                    <div className="d-flex">
                                    <MdEmail style={{fontSize: '2.75rem'}}/> <h6 style={{marginLeft:'1rem'}}> INFO@COMPANYNAME.COM</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex align-items-center justify-content-between" style={{marginTop: '8rem'}}>
                            <div className="copyright">
                                <h6>@Burger House 2020 LTD. All Rights Reserved</h6>
                                <h6>Created By PARTH ARDESHANA </h6>
                            </div>
                            <div className="icons">
                                <FaInstagram/>
                                <FaFacebook/>
                                <AiFillTwitterCircle/>
                                <RiWhatsappFill/>
                            </div>
                        </div>
                    </div>
            </div>

        </>
    )
}

export default Footer;