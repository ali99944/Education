import React from 'react';
import { Link } from 'react-router-dom';

export default function Offer () {
    return (
        <div className='offer'>
            <div className='offer-sign'>
                <h1>30% Off For New Students</h1>
                <div className='sign-1'>
                    <input type='text' placeholder='Your Name' className='forms' />
                    <input type='text' placeholder='Your Email' className='forms' />
                </div>
                <div className='sign-1'>
                    <select>
                        <option>Select A Course</option>
                        <option>1</option>
                        <option>1</option>
                        <option>1</option>
                    </select>
                    
                    <Link to='/SignUp' className='no-dec'><input type='button' value='Sign Up Now'  className='butt' /></Link>
                </div>
                
            </div>
        </div>
    )
}