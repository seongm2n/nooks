const useConfirm = (message = '', onConfirm, onCancel) => {
	if (!onConfirm || typeof onConfirm !== 'function') {
		return;
	}
	if (onCancel && typeof onCancel !== 'function') {
		return;
	}
	const confirmAction = () => {
		if (confirm(message)) {
			onConfirm();
		} else {
			onCancel();
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
			<h1>Confirm</h1>
			<button onClick={confirmDelete}>Delete the world</button>
		</div>
	);
};
