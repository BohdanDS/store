import React from 'react';

const TextError = (props: any) => {
	return (
		<div className='errorMessage'>
			{props.children}
		</div>
	);
};

export default TextError;