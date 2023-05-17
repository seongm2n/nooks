import React from 'react';
import ReactDOM from 'react-dom';
import { Count } from './count';
import { UseInput } from './useInput';
import './styles.css';

// function 사용
export default function App() {
	return (
		<div className='App'>
			<Count />
			<hr />
			<UseInput />
		</div>
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
