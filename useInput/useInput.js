import React, { useState } from 'react';

const useInput = (initialValue, validator) => {
	const [value, setValue] = useState(initialValue);
	const onChange = (event) => {
		const {
			target: { value },
		} = event;
		let willUpdate = true;
		if (typeof validator === 'function') {
			willUpdate = validator(value);
		}
		if (willUpdate) {
			setValue(value);
		}
	};
	return { value, onChange };
};

export const UseInput = () => {
	const maxLen = (value) => !value.includes('@');
	const name = useInput('Shin.', maxLen);
	return (
		<div className='App'>
			<h1>HI</h1>
			<input
				placeholder='Name'
				{...name}
			/>
		</div>
	);
};
