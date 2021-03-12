import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalProvider } from './contexts/GlobalContext';
import './index.css';

import MainPage from './components/MainPage';
import Products from './components/Products';
import App from './App';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <GlobalProvider>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/app" component={App} />
        <Route path="/Products/:product" component={Products} />
      </Switch>
    </GlobalProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
