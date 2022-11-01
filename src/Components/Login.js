import React,{useRef, useState, useEffect} from 'react';
import Nav from './NavBar';
import Footer from './footer';
import { Link } from 'react-router-dom';
const Login = () => {
    const radioRef = useRef(null)
    const [bool, setBool] = useState(null)
    console.log(radioRef.current)
    function change (e) {
        setBool(e.target.checked)
    }
    useEffect(() => {
        if(bool){
            radioRef.current.type = 'text'
        }else {
            radioRef.current.type = 'password'
        }
    }, [bool])
    
    return ( 
        <>
        <Nav/>
            <div className='sign-up log'>
                <form className='div'>
                    <div className='form-inp'  >
                        <input type='text' placeholder='Email' />
                    </div>
                    <div className='form-inp'  >
                        <input type='password' placeholder='Password' ref={radioRef} />
                        <label>
                        <input type='checkbox' onChange={change} />
                            show password
                        </label>
                    </div>
                    <Link className='forg' to='/Forgot' >Forgot Password?</Link>
                    <div className='form-sub'  >
                        <input type='submit' value='Login' className='Join-Us' />
                    </div>
                </form>
            </div>
            <Footer/>
        </>
     );
}
 
export default Login;