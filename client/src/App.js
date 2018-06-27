import React, { Component } from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import Login from'./containers/login';
import DashBoard from './containers/dashboard'
import createHistory from 'history/createBrowserHistory'

const history = createHistory();

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      isAuth : 'guest'
    }
    
  }

 

  

  render() {
    return (
      
          <Router history={history}>
          <Switch>
          <Route exact path='/dashboard'  component={DashBoard} />
          <Route exact path='/login' component={Login} />
       </Switch>
       </Router>
         
    );
  }
}

export default App;
