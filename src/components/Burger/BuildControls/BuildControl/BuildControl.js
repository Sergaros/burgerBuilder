import React from 'react';
import classes from './BuildControl.css'

const buildontrol = (props)=>(
    <div>
        <div>{props.label}</div>
        <button>Less</button>
        <button>More</button>
    </div>
);

export default buildControl;
