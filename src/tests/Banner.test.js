import React, {Fragment,useState} from 'react';
import PropTypes from 'prop-types';

const Banner = ({value}) =>{
    const [counter, seCounter] = useState(0);
    console.log(counter);
    const handleState = ({value})=>{
        seCounter(counter+1);
    }
    return(
        <div>
            <h2>Contador</h2>
            <span><label>{counter}</label></span>
            <button onClick= {handleState}>+1</button>
            <button onClick = {()=> {seCounter(0)}}>reset</button>
            <button onClick = {()=> {seCounter(counter-1)}}>-1</button>
        </div>
    );

    Banner.defaultProps ={
        value: 0
    }
}

export default Banner;