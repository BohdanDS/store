import React from 'react';
import '../styles/input.less'

const TextError = (props:any) => {
    return (
        <div className='errorMessage'>
            {props.children}
        </div>
    );
};

export default TextError;