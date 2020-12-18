import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {connect, Provider} from 'react-redux';
import {mapStateToProps} from './reduxState';
import {mapDispatchToProps} from './reduxActions'
import {store} from './reduxReducer'

const MainComponent = connect(mapStateToProps, mapDispatchToProps)(App)
ReactDOM.render(
  <Provider store={store}>
    <MainComponent />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
