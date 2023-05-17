import React, { useState } from 'react';

// Count
export const Count = () => {
	const [item, setItem] = useState(0);
	const incrementItem = () => setItem(item + 1);
	const decrementItem = () => setItem(item - 1);

	return (
		<div className='App'>
			<h1>Hello {item}</h1>

			<button onClick={incrementItem}>Increment</button>
			<button onClick={decrementItem}>Decrement</button>
		</div>
	);
};
