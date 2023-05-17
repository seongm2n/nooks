import React from 'react';
import ReactDOM from 'react-dom';
import { Count } from './useState/count';
import { UseInput } from './useState/useInput';
import { UseTabs } from './useState/useTabs';

import { Intro } from './useEffect/intro';
import { UseTitle } from './useEffect/useTitle';

import './styles.css';

export default function App() {
	return (
		<>
			<div className='App'>
				<h1 className='title'>useState</h1>
				<Count />
				<hr />
				<UseInput />
				<hr />
				<UseTabs />
			</div>
			<div className='App'>
				<h1 className='title'>useEffect</h1>
				<Intro />
				<hr />
				<UseTitle />
			</div>
		</>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
