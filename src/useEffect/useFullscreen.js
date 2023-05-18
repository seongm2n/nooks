import { useRef } from 'react';

//navigator가 online 또는 offline이 되는 것을 막아줌
const useFullscreen = (callback) => {
	const element = useRef();
	const runCb = (isFull) => {
		if (callback && typeof callback === 'function') {
			callback(isFull);
		}
	};
	const triggerFull = () => {
		if (element.current) {
			if (element.current.requestFullscreen) {
				element.current.requestFullscreen();
			} else if (element.current.mozRequestFullScreen) {
				element.current.mozRequestFullScreen();
			} else if (element.current.webkitRequestFullscreen) {
				element.current.webkitRequestFullscreen();
			} else if (element.current.msRequestFullscreen) {
				element.current.msRequestFullscreen();
			}
			runCb(true);
		}
	};
	const exitFull = () => {
		document.exitFullscreen();
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		} else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		}
		runCb(false);
	};
	return { element, triggerFull, exitFull };
};

export const UseFullscreen = () => {
	const onFullS = (isFull) => {
		console.log(isFull ? 'We are full' : 'We are small');
	};
	const { element, triggerFull, exitFull } = useFullscreen();

	return (
		<div style={{ height: '10vh' }}>
			<h1>UseFullscreen</h1>
			<div ref={element}>
				<img src='https://i.pinimg.com/564x/dc/5c/fe/dc5cfe6e2fd07d4fc5009a94d06b1adb.jpg' />
				<button onClick={exitFull}>Exit UseFullscreen</button>
			</div>
			<button onClick={triggerFull}>Make UseFullscreen</button>
		</div>
	);
};
