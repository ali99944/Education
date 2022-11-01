import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhoneAlt, faEnvelope} from '@fortawesome/free-solid-svg-icons'
 
export default function ContantHome(){
    return ( 
        <div className='H-Contact'>
            <div className='information'>
                <div className='information-det'>
                    <div className='info-icon-div d-1'><FontAwesomeIcon icon={faMapMarkerAlt} className='info-icon i-1' /></div>
                    <div className='inf-det'>
                        <h3>Our Location</h3>
                        <div>123 Street, New York, USA</div>
                    </div>
                </div>
                <div className='information-det'>
                    <div className='info-icon-div d-2'><FontAwesomeIcon icon={faPhoneAlt} className='info-icon i-2' /></div>
                    <div className='inf-det'>
                        <h3>Call Us</h3>
                        <div>+012 345 6789</div>
                    </div>
                </div>
                <div className='information-det'>
                    <div className='info-icon-div d-3'><FontAwesomeIcon icon={faEnvelope} className='info-icon i-3' /></div>
                    <div className='inf-det'>
                        <h3>Email Us</h3>
                        <div>info@example.com</div>
                    </div>
                </div>
            </div>
            <form>
                <span className='title' >NEED HELP?</span>
                <h2>Send Us A Message</h2>
                <div className='for'>
                    <div className='em-na'>
                        <input type='text' placeholder='Your Name' className='C-INP'  />
                        <input type='text' placeholder='Your Email' className='C-INP' />
                    </div>
                    <input type='text' placeholder='Subject' className='C-INP' />
                    <textarea placeholder='Massage'  />
                    <input type='button' value='Send Massage' className='buttom' />
                </div>
            </form>
        </div>
    )
}