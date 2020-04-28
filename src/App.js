import React from 'react';
import './style/style.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import myfunction from './Function';
function App() {
  document.body.addEventListener('nv-enter', myfunction);
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/contact' component={Contact} />
        <p>no such a </p>
      </Switch>
    </>
  );
}

export default App;
