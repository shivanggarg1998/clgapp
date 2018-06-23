import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state ={
      first_name : '',
      last_name : '',
      username : '',
      email : '',
      password : '',
      ok : true
    }
  }
sign()
{
  let temp = this.state.ok;
  this.setState({
    ok : !temp
  })
}
onsave()
{
    axios.post('http://localhost:4200/api/contact',this.state).then(res =>{
        console.log(res);
        this.setState({
            ok : false
        })
    })
}
onlogin()
{
    axios.post('http://localhost:4200/api/contactk',this.state).then(res =>{
          console.log(res);
    })
}
onchange(e)
{
    this.setState({
        [e.target.name] : e.target.value,
    })
    console.log(e.target.name);
}
  
  render() {
    return (
      <div className="container">
      { this.state.ok ? 
      <div className="form" id="register-form">
          <div className="header">
              Register!
          </div>
          <form >
              <div className="form-group">
                  <input name="first_name" type="text" className="form-control"  placeholder="First Name"  value={this.state.first_name} onChange={(e) => this.onchange(e)} required />
              </div>
              <div className="form-group">
                  <input name="last_name"  type="text" className="form-control"  placeholder="Last Name"  value={this.state.last_name} onChange={(e) => this.onchange(e)} required/>
              </div>
              <div className="form-group">
                  <input name="username" type="text" className="form-control"  placeholder="Type your Username"  value={this.state.username} onChange={(e) => this.onchange(e)} required/>
              </div>
              <div className="form-group">
                  <input name="email" type="email" className="form-control"  placeholder="Enter your Email ID"  value={this.state.email} onChange={(e) => this.onchange(e)}required/>
              </div>
              <div className="form-group">
                  <input name="password" type="password" className="form-control"  placeholder="Password"  value={this.state.password} onChange={(e) => this.onchange(e)}required/>
              </div>
              <button type="button" onClick={this.onsave.bind(this)} className="btn btn-primary">Register</button> <br/><br/>
              <a href="#" id="signin" onClick={this.sign.bind(this)}>Already have an account? Signin!</a>
              <br/>
              <br/>
          </form>
      </div>
      :
      <div className="form" id="login-form">
          <div className="header">
              Login!
          </div>
           
          <form onSubmit={this.onlogin.bind(this)}>
              <div className="form-group">
                  <input name="username" type="text" className="form-control" id="exampleInputEmail" placeholder="Username" aria-describedby="emailHelp"  required value={this.state.username} onChange={(e) => this.onchange(e)}/>
              </div>
              <div className="form-group">
                  <input name="password" type="password" className="form-control" id="exampleInputPassword" placeholder="Password"  value={this.state.password} onChange={(e) => this.onchange(e)}/>
              </div>
              <button type="submit" className="btn btn-primary">Sign In</button> <br/><br/>
              <a href="#" id="signin" onClick={this.sign.bind(this)}>Dont have an account? Sign up!</a>
              </form>
          </div>}
          </div>
    );
  }
}

export default App;
