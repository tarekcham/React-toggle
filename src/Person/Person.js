import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <div onClick={props.click} >My name is {props.name} and I am {props.age} yrs old.</div>
            <div><input type="text" onChange={props.change}/></div>
        </div>
    );
}

export default person;