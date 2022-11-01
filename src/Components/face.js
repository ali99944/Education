import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
export default function Face(props){
    
    return (
        <>

    <div className="s-1">
        {props.name === 'Learning From Home' ? <h2>{props.name}</h2> : <h3 className='tit'><h1>{props.name}</h1><Link to='/'>Home</Link> <small><FontAwesomeIcon icon={faAngleDoubleRight} className='Right-icon' /></small> {props.name}</h3>}
        {props.name === 'Learning From Home' ? <h1>Education Courses</h1> : ''}
        <div>
            <input type='text' className="search" placeholder="Keyword" />
            <button className="btn-search">Search</button>
        </div>
    </div>
        </>
    )
}