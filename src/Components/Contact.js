import React from 'react';
import Nav from './NavBar';
import Face from './face'
import pageHeader from '../imgs/page-header.jpg'
import ContantHome from './contactHome'
import Footer from './footer'
export default function Contact(){
    const styles={ backgroundImage:`url(${pageHeader})`, innerHeight:'20px',}
    return (
        <div>
            <Nav Contact='Contact' />
            <div className="HS-2"style={styles} ></div>
            <div className="cov"></div>
            <Face name='Contact'/>
            <ContantHome/>
            <Footer/>
        </div>
    )
}