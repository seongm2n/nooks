import React, { useState, useEffect, useRef } from 'react';

const useClick = (onClick) => {
	if (typeof onClick !== 'function') {
		return;
	}
	const element = useRef();

	useEffect(() => {
		if (element.current) {
			element.current.addEventListener('click', onClick);
		}
		return () => {
			if (element.current) {
				element.current.removeEventListener('click', onClick);
			}
		};
	}, []);
	return element;
};

export const UseClick = () => {
	const sayHello = () => console.log('say hello');
	const tomato = useClick(sayHello);

	return (
		<div>
			<h1 ref={tomato}>Hi</h1>
		</div>
	);
};
