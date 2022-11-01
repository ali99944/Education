import React from 'react';
import card1 from '../imgs/courses-1.jpg'
import card2 from '../imgs/courses-2.jpg'
import card3 from '../imgs/courses-3.jpg'
import card4 from '../imgs/courses-4.jpg'
import card5 from '../imgs/courses-5.jpg'
import card6 from '../imgs/courses-6.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt, faStar } from '@fortawesome/free-solid-svg-icons'
import "swiper/css";

export default function HomeCourses(){
    let photos = [card1, card2, card3, card4, card5, card6]
    return (
        <div className='Home-Course'>
        <div className='intro'>
            <span className="title course" >OUR COURSES</span>
            <h2>Checkout New Releases Of</h2>
            <h2> Our Courses</h2>
        </div>
      <Swiper className="mySwiper" 
      slidesPerView={4}
      >
        {photos.map(photo => {
            return (
                <SwiperSlide key={photo} className='slides'>
                <div className='cards'>
                    <p className='slideWords'>Web design &  development courses for beginners
                    </p>
                    <div className='det'>
                        <span><FontAwesomeIcon icon={faUserAlt} /> Jhon Doe</span>
                        <span><FontAwesomeIcon icon={faStar} /> 4.5 <small>(250)</small> </span>
                    </div>
    
                    <img src={photo} className='imgs' />
                    <button className='btn'>Course Detail</button>
                </div>
            </SwiperSlide>
            )
        })}
 

      </Swiper>
    </div>
    )
}


{/* <SwiperSlide className='slides'>
<div className='cards'>
    <p className='slideWords'>Web design & <br/> development courses <br/> for beginners
    </p>
    <div className='det'>
        <span><FontAwesomeIcon icon={faUserAlt} /> Jhon Doe</span>
        <span><FontAwesomeIcon icon={faStar} /> 4.5 <small>(250)</small> </span>
    </div>

    <img src={card2} className='imgs' />
    <button className='btn'>Course Detail</button>
</div>
</SwiperSlide>
<SwiperSlide className='slides'>
<div className='cards'>
    <p className='slideWords'>Web design & <br/> development courses <br/> for beginners
    </p>
    <div className='det'>
        <span><FontAwesomeIcon icon={faUserAlt} /> Jhon Doe</span>
        <span><FontAwesomeIcon icon={faStar} /> 4.5 <small>(250)</small> </span>
    </div>

    <img src={card3} className='imgs' />
    <button className='btn'>Course Detail</button>
</div>
</SwiperSlide>
<SwiperSlide className='slides'>
<div className='cards'>
    <p className='slideWords'>Web design & <br/> development courses <br/> for beginners
    </p>
    <div className='det'>
        <span><FontAwesomeIcon icon={faUserAlt} /> Jhon Doe</span>
        <span><FontAwesomeIcon icon={faStar} /> 4.5 <small>(250)</small> </span>
    </div>

    <img src={card4} className='imgs' />
    <button className='btn'>Course Detail</button>
</div>
</SwiperSlide>
<SwiperSlide className='slides'>
<div className='cards'>
    <p className='slideWords'>Web design & <br/> development courses <br/> for beginners
    </p>
    <div className='det'>
        <span><FontAwesomeIcon icon={faUserAlt} /> Jhon Doe</span>
        <span><FontAwesomeIcon icon={faStar} /> 4.5 <small>(250)</small> </span>
    </div>

    <img src={card5} className='imgs' />
    <button className='btn'>Course Detail</button>
</div>
</SwiperSlide>
<SwiperSlide className='slides'>
<div className='cards'>
    <p className='slideWords'>Web design & <br/> development courses <br/> for beginners
    </p>
    <div className='det'>
        <span><FontAwesomeIcon icon={faUserAlt} /> Jhon Doe</span>
        <span><FontAwesomeIcon icon={faStar} /> 4.5 <small>(250)</small> </span>
    </div>

    <img src={card6} className='imgs' />
    <button className='btn'>Course Detail</button>
</div>
</SwiperSlide> */}