import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import AboutUs from './components/pages/AboutUs';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' exact component={Services} />
          <Route path='/products' exact component={Products} />
          <Route path='/about-us' exact component={AboutUs} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/instagram' path="google.com" />


        </Switch>
      </Router>
    </>


  );
}

export default App;
