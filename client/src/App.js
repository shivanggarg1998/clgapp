import React, { Component } from 'react';
import {Router, Switch, Route,Redirect} from 'react-router-dom';
import Login from'./containers/login';
import DashBoard from './containers/dashboard'
import createHistory from 'history/createBrowserHistory'

const history = createHistory();

class App extends Component {
  constructor(props)
  {
    super(props);
    
  }

 

  

  render() {
    return (
      
          <Router history={history}>
          <Switch>
          
          <Route exact path='/dashboard'  component={DashBoard} />
          <Route exact path='/' name="login" component={Login} />
          
       </Switch>
       
       </Router>
         
    );
  }
}

export default App;
