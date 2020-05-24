import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import reducer from './reducers';
import { incrementAction, decrementAction, resetAction } from './action';

const store = createStore(reducer);

class Counter extends Component {
    render() {
      const { count, increment, decrement, reset } = this.props;
        return(
          <div className="App">
            <header className="App-header">
              <h1>Counter</h1>
              <h3>{count}</h3>
                <div className="btn-group">
                    <button className="btn btn-primary" onClick={increment}>Increment</button>
                    <button className="btn btn-secondary" onClick={decrement}>Decrement</button>
                    <button className="btn btn-primary" onClick={reset}>Reset</button>
                </div> 
            </header>
          </div>
        )
    }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
  return {
    increment() { dispatch(incrementAction()) },
    decrement() { dispatch(decrementAction()) },
    reset() { dispatch(resetAction()) },
  }
}

const ConnectContainer = connect(
  mapStateToProps, 
  mapDispatchToProps
)(Counter);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <ConnectContainer />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
