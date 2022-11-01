import React from "react";
        // icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faBookReader } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";
export default function Nav(props) {
    console.log(props.Home)
    return (
        <>
            <div className="S-1">
            <div className="g-1">
            <span>
            <FontAwesomeIcon icon={faPhone} className='bars' /> 
            &nbsp; +012 345 6789
            &nbsp;&nbsp;|
            &nbsp;&nbsp;<FontAwesomeIcon icon={faEnvelope} className='bars' /> 
            &nbsp;info@example.com
            </span>
            </div>
            <div className="g-2">
                <a href="https://www.facebook.com">
                    <FontAwesomeIcon icon={faFacebookF} className='brands' />
                </a>
                <a href="https://www.facebook.com">
                <FontAwesomeIcon icon={faTwitter} className='brands' />
                </a>
                <a href="https://www.facebook.com">
                <FontAwesomeIcon icon={faInstagram} className='brands' />
                </a>
                <a href="https://www.facebook.com">
                <FontAwesomeIcon icon={faLinkedinIn} className='brands' />
                </a>
                <a href="https://www.facebook.com">
                <FontAwesomeIcon icon={faYoutube} className='brands' />
                </a>
            </div>
        </div>
        <div className="S-2">
            <div className="lo">
                <FontAwesomeIcon icon={faBookReader} className='logo' />
                <b>EDUKATE</b>
            </div>
            <div className="links">
                <Link to='/' style={{color:props.Home ? '#186ce3' : 'black'}}>Home</Link>
                <Link to='/About' style={{color:props.About ? '#186ce3' : 'black'}} >About</Link>
                <Link to='/Courses' style={{color:props.Courses ? '#186ce3' : 'black'}} >Courses</Link>
                <Link to='/Contact' style={{color:props.Contact ? '#186ce3' : 'black'}} >Contact</Link>
            </div>
            <div className="joining">
                <Link to='/SignUp'><button className="join">Join Us</button></Link>
                <Link to='/login'><button className="join">Login</button></Link>
            </div>
        </div>
        </>
    )
}