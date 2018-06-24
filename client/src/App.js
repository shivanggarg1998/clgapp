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

 

  changeauth(user)
  {
      this.setState({
        isAuth : user
      })
  }

  render() {
    return (
      
          <Router history={history}>
          <Switch>
          <Route exact path='/dashboard' render={(props) => <DashBoard {...props} isAuthed={this.state.isAuth} />}/>
          <Route exact path='/login' render={(props) => <Login {...props} telluser={this.changeauth.bind(this)} />} />
       </Switch>
       </Router>
         
    );
  }
}

export default App;
