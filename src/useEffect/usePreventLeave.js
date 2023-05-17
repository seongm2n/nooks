const usePreventLeave = () => {
	const listener = (event) => {
		event.preventDefault();
		event.returnValue = '';
	};
	const enablePrevent = () => window.addEventListener('beforeunload', listener);
	const disablePrevent = () =>
		window.removeEventListener('beforeunload', listener);
	return { enablePrevent, disablePrevent };
};

export const UsePreventLeave = () => {
	const { enablePrevent, disablePrevent } = usePreventLeave();
	return (
		<div>
			<h1>PreventLeave</h1>
			<button onClick={enablePrevent}>Protect</button>
			<button onClick={disablePrevent}> UnProtect</button>
		</div>
	);
};
