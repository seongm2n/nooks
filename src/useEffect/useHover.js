import React, { useState, useEffect, useRef } from 'react';

const useHover = (onHover) => {
	if (typeof onHover !== 'function') {
		return;
	}
	const element = useRef();

	useEffect(() => {
		if (element.current) {
			element.current.addEventListener('mouseenter', onHover);
		}
		return () => {
			if (element.current) {
				element.current.removeEventListener('mouseenter', onHover);
			}
		};
	}, []);
	return element;
};

export const UseHover = () => {
	const enterMe = () => console.log('Thank you enter me');
	const potato = useHover(enterMe);

	return (
		<div>
			<h1 ref={potato}>Hover me</h1>
		</div>
	);
};
