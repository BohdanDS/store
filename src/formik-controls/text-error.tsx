import React from 'react';
import '../styles/input.less'

const TextError = (props:any) => {
    console.log('Props TextError', props)
    return (
        <div className='errorMessage'>
            {props.children}
        </div>
    );
};

export default TextError;