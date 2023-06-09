import React, { useState, useEffect } from 'react';

const useTitle = (initialTitle) => {
	const [title, setTitle] = useState(initialTitle);
	const updateTitle = () => {
		const htmlTitle = document.querySelector('title');
		htmlTitle.innerText = title;
	};
	useEffect(updateTitle, [title]);
	return setTitle;
};

export const UseTitle = () => {
	const titleUpdater = useTitle('Loading...');
	setTimeout(() => titleUpdater('Home'), 5000);
	return (
		<div>
			<h1>Title</h1>
			<h2>Loading... -- Home</h2>
		</div>
	);
};
