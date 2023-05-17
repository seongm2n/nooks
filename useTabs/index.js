import React from 'react';
import ReactDOM from 'react-dom';
import { Count } from './count';
import { UseInput } from './useInput';
import { UseTabs } from './useTabs';

import './styles.css';

export default function App() {
	return (
		<div className='App'>
			<Count />
			<hr />
			<UseInput />
			<hr />
			<UseTabs />
		</div>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
