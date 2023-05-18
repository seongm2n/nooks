const useNotification = (title, options) => {
	if (!('Notification' in window)) {
		return;
	}
	const fireNotif = () => {
		if (Notification.permission !== 'granted') {
			Notification.requestPermission().then((permission) => {
				if (permission === 'granted') {
					new Notification(title, options);
				} else {
					return;
				}
			});
		} else {
			new Notification(title, options);
		}
	};
	return fireNotif;
};

export const UseNotification = () => {
	const triggerNotif = useNotification('Can I steal your kimchiㅋㅋ', {
		body: 'I love kimchi dont you?',
	});
	return (
		<div>
			<h1>UseNotification</h1>
			<button onClick={triggerNotif}> click </button>
		</div>
	);
};
