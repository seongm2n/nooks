import { useState, useEffect } from 'react';

//navigator가 online 또는 offline이 되는 것을 막아줌
const useScroll = () => {
	const [state, setState] = useState({
		x: 0,
		y: 0,
	});
	const onScroll = () => {
		setState({ y: window.scrollY, x: window.scrollX });
	};
	useEffect(() => {
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, []);
	return state;
};

export const UseScroll = () => {
	const { y } = useScroll();
	return (
		<div style={{ height: '1000vh' }}>
			<h1 style={{ position: 'fixed', color: y > 100 ? 'red' : 'blue' }}>
				UseScroll
			</h1>
		</div>
	);
};
