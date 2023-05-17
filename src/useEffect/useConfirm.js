const useConfirm = (message = '', callback, rejection) => {
	if (typeof callback !== 'function') {
		return;
	}

	const confirmAction = () => {
		if (confirm(message)) {
			callback();
		} else {
			rejection();
		}
	};
	return confirmAction;
};

export const UseConfirm = () => {
	const deleteworld = () => console.log('Deleting the world');
	const abort = () => console.log('Aborted');
	const confirmDelete = useConfirm('Are you sure', deleteworld, abort);
	return (
		<div>
			<button onClick={confirmDelete}>Delete the world</button>
		</div>
	);
};
