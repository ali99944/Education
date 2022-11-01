import React, {useState, useEffect} from 'react';
import Nav from './NavBar';
import Footer from './footer';
const Signup = () => {
    const [user, setUser] = useState({
        fName: '',
        lName: '',
        email: '',
        phone: '',
        city: '',
        gender: '',
        password: '',
        cPassword:''
    })
    // const [fName, setFName] = useState()
    // const [lName, setLName] = useState()
    // const [email, setEmail] = useState()
    // const [phone, setPhone] = useState()
    // const [city, setCity] = useState()
    // const [gender, setGender] = useState()
    // const [password, setPassword] = useState()
    // const [cPassword, setCPassword] = useState()
    const validation = (e) => {
        switch(e.target.className){
            case 'fName' : 
                setUser({...user, fName: e.target.value})
        }
    }
    useEffect(() => {
        if(user !== undefined){
            console.log(user)
        }
    }, [])
    return (
        <>
            <Nav/>
            <div className='sign-up'>
                <form className='div'>
                    <div className='form-inp' >
                        <input type='text' placeholder='First Name' className='fName' onChange={validation} />
                    </div>
                    <div className='form-inp'  >
                        <input type='text' placeholder='Last Name' className='lName' />
                    </div>
                    <div className='form-inp'  >
                        <input type='text' placeholder='Email' className='email' />
                    </div>
                    <div className='form-inp'  >
                        <input type='text' placeholder='Phone Number' className='phone' />
                    </div>
                    <div className='form-inp'  >
                        <input type='text' placeholder='City' className='city' />
                    </div>
                    <div className='form-inp'  >
                        <input type='text' placeholder='Gender' className='gender' />
                    </div>
                    <div className='form-inp'  >
                        <input type='password' placeholder='Password' className='password' />
                    </div>
                    <div className='form-inp'  >
                        <input type='password' placeholder='Confirm Password' className='cPassword' />
                    </div>
                    <div className='form-sub'  >
                        <input type='submit' value='Joing Us' className='Join-Us' />
                    </div>
                </form>
            </div>
            <Footer/>
        </>
     );
}
 
export default Signup;