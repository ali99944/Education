import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import {  Autoplay, Navigation } from "swiper";

import T1 from '../imgs/testimonial-1.jpg'
import T2 from '../imgs/testimonial-2.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

export default function Testimonial() {
    console.log(T1)
  return (
    <div className="Testimonial">
        <div className="Testimonial-det">
            <span className="title course">TESTIMONIAL</span>
            <h2>What Say Our <br/> Students</h2>
            <p>Dolor est dolores et nonumy sit labore dolores est sed rebum amet, justo duo ipsum sanctus dolore magna rebum sit et. Diam lorem ea sea at. Nonumy et at at sed justo est nonumy tempor. Vero sea ea eirmod, elitr ea amet diam ipsum at amet. Erat sed stet eos ipsum diam</p>
        </div>
            <Swiper
            modules={[Autoplay, Navigation]}
            navigation={true}
            autoplay={{
                delay: 1000,
                disableOnInteraction: false,
            }}
            slidesPerView={1}
            //   className='ins'
            loop={true}
            className='s-w-t'
            >
 
                <SwiperSlide className="s-s">
                    <div className="s-s-div">
                        <FontAwesomeIcon icon={faQuoteLeft} className='qute' />
                        <p>Sed et elitr ipsum labore dolor diam, ipsum duo vero sed sit est est ipsum eos clita est ipsum. Est nonumy tempor at kasd. Sed at dolor duo ut dolor, et justo erat dolor magna sed stet amet elitr duo lorem</p>
                        <div className="s-s-div-det">
                            <img src={T1} className='t-img'/>
                            <div className="names">
                                <div>Student Name</div>
                                <div>Web Design</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="s-s">
                    <div className="s-s-div">
                        <FontAwesomeIcon icon={faQuoteLeft} className='qute' />
                        <p>Sed et elitr ipsum labore dolor diam, ipsum duo vero sed sit est est ipsum eos clita est ipsum. Est nonumy tempor at kasd. Sed at dolor duo ut dolor, et justo erat dolor magna sed stet amet elitr duo lorem</p>
                        <div className="s-s-div-det">
                            <img src={T2} className='t-img'/>
                            <div className="names">
                                <div>Student Name</div>
                                <div>Web Design</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper> 
    </div>
  );
}
