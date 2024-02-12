import './navbar.css';
import Logo from "../../logo.jpg"
import { Link } from 'react-router-dom';

function Navbar(){
  return (
    <div className='navbar'>
        <div className='navbar-left'>
            <ul>
                <li><img id='logo' src={Logo} /></li>
                <Link to="/" style={{textDecoration: "none"}}>
                  <li id='home'>Home</li>
                </Link>
                <Link to="/" style={{textDecoration: "none"}} >
                  <li id='about'>About Us</li>
                </Link>
                <Link to="/QuotesPage">
                  <li id='tips'>Quotes</li>
                </Link>
            </ul>
        </div>
        <div className='navbar-right'>
                <ul>
                    <li id='contact'>Contact Us</li>
                    <li id='services' title='Know what we offer'>Our Services</li>
                    <li id='support'>Support Us</li>
                </ul>
        </div>
    </div>
  )
}

export default Navbar