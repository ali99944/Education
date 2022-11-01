import React from "react";
import Nav from './NavBar';
import About from "./About";
import HomeCourses from "./HomeCourses";
import Offer from "./offer";
import Instructors from './instructors'
import Testimonial from './testimonial'
import ContantHome from "./contactHome";
import Footer from "./footer";
export default function Home(){
    return (
        <div className="home">
            <Nav Home='Home'/>
            <About about='about' />
            <HomeCourses/>
            <Offer/>
            <Instructors/>
            <Testimonial/>
            <ContantHome/>
            <Footer/>
        </div>
    );
}
