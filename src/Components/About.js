import React from 'react';
import Nav from './NavBar';
import about from '../imgs/about.jpg'
import pageHeader from '../imgs/page-header.jpg'
import header from '../imgs/header.jpg'
import Face from './face';
import Chose from './chose';
import Footer from './footer';
export default function About(props){
    
    const styles={ backgroundImage:`url(${props.about ? header : pageHeader})`}
    return(
        <div>
            {!props.about && <Nav About='About'/>}
                <div className="HS-2" style={styles} ></div>
                <div className="cov"></div>
            <Face name={props.about ? 'Learning From Home' : 'About'} />
            <div className="s-2">   
                <img src={about} className='about'/>
                <div className="nd">
                    <span className="title" >About Us</span>
                    <h2>First Choice For Online <br/> Education Anywhere</h2>
                    <p className="p-2">
                    Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna
                    </p>
                    <div className="boxes">
                        <div className="d-1">
                            <div><b>123</b></div>
                            <span>AVAILABLE <br/>SUBJECTS</span>
                        </div>
                        <div className="d-2">
                            <div><b>1234</b></div>
                            <span>ONLINE <br/>COURSES</span>
                        </div>
                        <div className="d-3">
                            <div><b>123</b></div>
                            <span>SKILLED <br/>INSTRUCTORS</span>
                        </div>
                        <div className="d-4">
                            <div><b>1234</b></div>
                            <span>HAPPY <br/>STUDENTS</span>
                        </div>
                    </div>
                </div>
            </div>
            <Chose/>
        </div>
    )
}