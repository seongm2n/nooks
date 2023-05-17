import React, { useState, useEffect } from 'react';

export const Intro = () => {
	const sayHello = () => console.log('Hello');
	const [number, setNumber] = useState(0);
	const [aNumber, setAnumber] = useState(0);
	useEffect(sayHello, [number]);

	return (
		<div>
			<h1>UseEffect</h1>
			<h5>
				number 상태가 변경될 때마다 <br />
				sayHello 함수가 실행
			</h5>
			<button onClick={() => setNumber(number + 1)}> {number}</button>
			<button onClick={() => setAnumber(aNumber + 1)}> {aNumber}</button>
		</div>
	);
};
