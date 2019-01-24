import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import Header from './Components/common/header';
import Footer from './Components/common/footer';
import HomeContainer from './Components/home/home';
import LoginContainer from './Container/login';
import './css/bootstrap.css';
import './css/app.less';
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Header/>
        <div className="container">
        <hr />
        <Switch>
          <Route exact={true} path='/' component={ LoginContainer }/>
          <Route path='/home' component={ HomeContainer }/>

        </Switch>
        </div>
        <Footer/>
      </div>
      </Router>
    );
  }
}

export default App;
