import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import {  Autoplay, Navigation } from "swiper";

import ins1 from '../imgs/team-1.jpg'
import ins2 from '../imgs/team-2.jpg'
import ins3 from '../imgs/team-3.jpg'
import ins4 from '../imgs/team-4.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function App() {
    let photos = [ins1, ins2, ins3, ins4]
    console.log(ins1)
  return (
    <div className="instractor">
        <span className="title course">INSTRUCTORS</span>
        <h2>Meet Our Instructors</h2>
        <Swiper
        modules={[Autoplay, Navigation]}
        navigation={true}
        autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          slidesPerView={3}
        //   className='ins'
          loop={true}
          className='s-w'
        >
            {photos.map(photo => {
                return (
            <SwiperSlide>
                <div className="ins-div">
                    <img src={photo} className='ins'  />
                    <div>
                        <h4>Instructor Name</h4>
                        <p>Web Design & Development</p>
                        <div className="ins-icons">
                            <FontAwesomeIcon icon={faTwitter} className='ins-icon' />
                            <FontAwesomeIcon icon={faFacebookF} className='ins-icon' />
                            <FontAwesomeIcon icon={faLinkedinIn} className='ins-icon' />
                            <FontAwesomeIcon icon={faInstagram} className='ins-icon' />
                            <FontAwesomeIcon icon={faYoutube} className='ins-icon' />
                        </div>
                    </div>
                </div>
            </SwiperSlide>
                )
            })}
        </Swiper> 
    </div>
  );
}
