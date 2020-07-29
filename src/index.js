import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import Home from './pages/Home';
import CadastroVideo from './pages/CadastroVideo';
import CadastroCategoria from './pages/CadastroCategoria';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/cadastro/video" component={CadastroVideo} exact/>
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact/>
    </Switch>
  </BrowserRouter>,  
  document.getElementById('root')
);