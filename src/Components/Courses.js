import React from 'react';
import Nav from './NavBar';
import Face from './face';
import header from '../imgs/header.jpg'
import pageHeader from '../imgs/page-header.jpg'
import card1 from '../imgs/courses-1.jpg'
import card2 from '../imgs/courses-2.jpg'
import card3 from '../imgs/courses-3.jpg'
import card4 from '../imgs/courses-4.jpg'
import card5 from '../imgs/courses-5.jpg'
import card6 from '../imgs/courses-6.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt, faStar } from '@fortawesome/free-solid-svg-icons'
import Footer from './footer';
export default function Courses (){
    const styles={ backgroundImage:`url(${pageHeader})`, innerHeight:'20px',}

    const [num, setNum] = React.useState([card1, card2, card3, card4, card5, card6])

    return (
        <div>
            <Nav Courses='Courses' />
            <div className="HS-2"style={styles} ></div>
                <div className="cov"></div>
            <Face name='Courses'/>
            <div className='s-2'>
                <div className='intro'>
                    <span className="title course" >OUR COURSES</span>
                    <h1>Checkout New Releases Of</h1>
                    <h1> Our Courses</h1>
                </div>
            </div>
            <div className='container'>
                {num.map(n => {
                    return (
                    <div key={n} className='card-show'>
                        <img src={n} className='card-show-img' />
                        <div className='info'>
                            <h3 className='slideWords'>Web design & development<br/>courses for beginners</h3>
                            <hr className='h'/>
                            <div className='det'>
                                <span><FontAwesomeIcon icon={faUserAlt} /> Jhon Doe</span>
                                <span><FontAwesomeIcon icon={faStar} /> 4.5 <small>(250)</small> </span>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
            <Footer/>
        </div>
    )
}