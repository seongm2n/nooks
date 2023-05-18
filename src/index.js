import React from 'react';
import ReactDOM from 'react-dom';
import { Count } from './useState/count';
import { UseInput } from './useState/useInput';
import { UseTabs } from './useState/useTabs';

import { Intro } from './useEffect/intro';
import { UseTitle } from './useEffect/useTitle';
import { UseClick } from './useEffect/useClick';
import { UseHover } from './useEffect/useHover';

import { UseConfirm } from './useEffect/useConfirm';
import { UsePreventLeave } from './useEffect/usePreventLeave';
import { UseBeforeLeave } from './useEffect/useBeforeLeave';
import { UseFadeIn } from './useEffect/useFadeIn';

import { UseNetwork } from './useEffect/useNetwork';
import { UseScroll } from './useEffect/useScroll';

import { UseFullscreen } from './useEffect/useFullscreen';
import { UseNotification } from './useEffect/useNotification';
import './styles.css';

// function 사용
export default function App() {
	return (
		<>
			<div>
				<h1 className='title'>useState</h1>
				<div className='content'>
					<Count />
					<hr />
					<UseInput />
					<hr />
					<UseTabs />
				</div>
			</div>
			<br />
			<br />
			<br />
			<div>
				<h1 className='title'>useEffect</h1>
				<div className='content'>
					<Intro />
					<hr />
					<UseTitle />
					<hr />
					<UseClick />
					<hr />
					<UseHover />
				</div>
				<br />
				<br />
				<div className='content'>
					<UseConfirm />
					<hr />
					<UsePreventLeave />
					<hr />
					<UseBeforeLeave />
					<hr />
					<UseFadeIn />
				</div>
				<br />
				<br />
				<div className='content'>
					<UseNetwork />
					<hr />
					<UseScroll />
					<hr />
					<hr />
				</div>
				<div className='content'>
					<UseFullscreen />
					<hr />
					<UseNotification />
				</div>
			</div>
		</>
	);
}

/*
// class 사용
class AppUgly extends React.Component {
  state = {
    item: 1,
  };
  render() {
    const { item } = this.state;
    return (
      <div className="App">
        <h1>Hello {item}</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button onClick={this.incrementItem}>Increment</button>
        <button onClick={this.decrementItem}>Decrement</button>
      </div>
    );
  }
  incrementItem = () => {
    this.setState((state) => {
      return {
        item: state.item + 1,
      };
    });
  };
  decrementItem = () => {
    this.setState((state) => {
      return {
        item: state.item - 1,
      };
    });
  };
}
*/

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
