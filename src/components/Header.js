import {FaHamburger} from 'react-icons/fa'
import {MdDeliveryDining} from 'react-icons/md'

function Header() {
  return (
    <>
      <header>
        <div className="logo">
         <FaHamburger style={{fontSize:'60px'}}/> <h2>BURGER HOUSE</h2>
        </div>
        <nav>
          <div className='delivery_number'>
            <MdDeliveryDining style={{fontSize:'40px',marginRight:'4px'}}/><p style={{fontSize:'15px',marginTop:'5px'}}> Express Delivery +1 234 567 890</p>
          </div>

          <div className="links">
            <a href="/">HOME</a>
            <a href="/">MENU</a>
            <a href="/">OUR STORY</a>
            <a href="/">CONTACT US</a>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;