import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './NavBar';
const Forgot = () => {
    return ( 
        <>
            <Nav/>
            <div className='offer'>
                <div className='offer-sign'>
                    <h1>Restore Your Acoount</h1>
                    <div className='sign-1'>
                        {/* <input type='text' placeholder='Your Name' className='forms' /> */}
                        <input type='email' placeholder='Email' className='forms' />
                    </div>
                    <div className='sign-1'>
                        <Link to=''><input type='button' value='Submit'  className='butt' /></Link>
                    </div>
                    
                </div>
            </div>
        </>
     );
}
 
export default Forgot;