import { useEffect } from 'react';
const useBeforeLeave = (onBefore) => {
	if (typeof onBefore !== 'function') {
		return;
	}
	const handle = (e) => {
		// Y축(top)으로 마우스가 움직일 때
		const { clientY } = e;
		if (clientY <= 0) {
			onBefore();
		}
	};
	useEffect(() => {
		document.addEventListener('mouseleave', handle);
		return () => document.removeEventListener('mouseleave', handle);
	});
};

export const UseBeforeLeave = () => {
	const beforeLife = () => console.log("Pls don't leave");
	useBeforeLeave(beforeLife);
	return (
		<div>
			<h1>Hello</h1>
		</div>
	);
};
