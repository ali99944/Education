import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookReader, faMapMarkerAlt, faPhoneAlt, faEnvelope, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

export default function Footer(){
    return (
        <footer>
            <div className='HF'>
                <div className='HFS-1'>
                    <div className='F-1'><FontAwesomeIcon icon={faBookReader} className='F-logo' /><span className='F-L-Name'>EDUKATE</span></div>
                    <p className='F-D'>Accusam nonumy clita sed rebum kasd eirmod elitr. Ipsum ea lorem at et diam est, tempor rebum ipsum sit ea tempor stet et consetetur dolores. Justo stet diam ipsum lorem vero clita diam</p>
                </div>
                <div className='HFS-2'>
                    <h2>Newsletter</h2>
                    <div className='frm'>
                        <input type='text' placeholder='Your Email Address' />
                        <button>Sign Up</button>
                    </div>
                </div>
            </div>
            <div className='linkss'>
                <ul>
                    <li><h2>Get In Touch</h2></li>
                 
                    <li><FontAwesomeIcon icon={faPhoneAlt} /> +201094824045</li>
                    <li><FontAwesomeIcon icon={faEnvelope} /> EDUKATE80@gmail.com</li>
                    <li className='social'>
                        <FontAwesomeIcon icon={faTwitter} className='soc' />
                        <FontAwesomeIcon icon={faFacebookF} className='soc' />
                        <FontAwesomeIcon icon={faLinkedinIn} className='soc' />
                        <FontAwesomeIcon icon={faInstagram} className='soc' />
                    </li>
                </ul>
                <ul>
                    <li><h2>Our Courses</h2></li>
                    <li><Link><FontAwesomeIcon icon={faAngleRight} /> Web Design</Link></li>
                    <li><Link><FontAwesomeIcon icon={faAngleRight} /> Apps Design</Link></li>
                    <li><Link><FontAwesomeIcon icon={faAngleRight} /> Marketing</Link></li>
                    <li><Link><FontAwesomeIcon icon={faAngleRight} /> Research</Link></li>
                    <li><Link><FontAwesomeIcon icon={faAngleRight} /> SEO</Link></li>
                </ul>
                <ul>
                    <li><h2>Quick Links</h2></li>
                    <li><Link><FontAwesomeIcon icon={faAngleRight} /> Privacy Policy</Link></li>
                    <li><Link><FontAwesomeIcon icon={faAngleRight} /> Terms & Condition</Link></li>
                    <li><Link><FontAwesomeIcon icon={faAngleRight} /> Regular FAQs</Link></li>
                    <li><Link><FontAwesomeIcon icon={faAngleRight} /> Help & Support</Link></li>
                    <li><Link><FontAwesomeIcon icon={faAngleRight} /> Contact</Link></li>
                </ul>
            </div>
        </footer>
    )
}
