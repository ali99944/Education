import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookReader, faCertificate, faGraduationCap  } from '@fortawesome/free-solid-svg-icons'
import feature from '../imgs/feature.jpg'
export default function Chose(){
    return (
        <div className='chose'>
        <img src={feature} className='feat' />
            <div>
            <span className='title'>WHY CHOOSE US?</span>
            <h2>
            Why You Should Start <br/> Learning with Us?
            </h2>
            <p className='p-2'>Aliquyam accusam clita nonumy ipsum sit sea clita ipsum clita, ipsum dolores amet voluptua duo dolores et sit ipsum rebum, sadipscing et erat eirmod diam kasd labore clita est. Diam sanctus gubergren sit rebum clita amet.</p>
            <div className='card'>
            <FontAwesomeIcon icon={faGraduationCap} className='books one' />
                <div >
                    <h3>Skilled Instructors</h3>
                    <p className='p-cards'>Labore rebum duo est Sit dolore eos sit tempor eos stet, vero vero clita magna kasd no nonumy et eos dolor magna ipsum.</p>
                </div>
            </div>
            <div className='card'>
                <FontAwesomeIcon icon={faCertificate} className='books two' />
                <div >
                    <h3>International Certificate</h3>
                    <p className='p-cards'>Labore rebum duo est Sit dolore eos sit tempor eos stet, vero vero clita magna kasd no nonumy et eos dolor magna ipsum.</p>
                </div>
            </div>
            <div className='card'>
                <FontAwesomeIcon icon={faBookReader} className='books three' />
                <div >
                    <h3>Online Classes</h3>
                    <p className='p-cards'>Labore rebum duo est Sit dolore eos sit tempor eos stet, vero vero clita magna kasd no nonumy et eos dolor magna ipsum.</p>
                </div>
            </div>
        </div>
        </div>
    )
}