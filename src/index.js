import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalProvider } from './contexts/GlobalContext';
import './index.css';

import MainPage from './components/MainPage';
import Services from './components/Services';
import Company from './components/Company';
import Product from './components/Product';
import App from './App';

import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <BrowserRouter>
    <GlobalProvider>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/app" component={App} />
        <Route path="/Services/:services" component={Services} />
        <Route path="/Company/:company" component={Company} />
        <Route path="/Product/:product" component={Product} />
      </Switch>
    </GlobalProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
