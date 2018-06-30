import React, { Component } from 'react';
import axios from 'axios';
import md5 from 'js-md5';
import {Alert} from 'react-bootstrap';
class Login extends Component {
  constructor(props)
  {
    super(props);
    this.state ={
      first_name : '',
      last_name : '',
      username : '',
      email : '',
      password : '',
      ok : false,
      show : false
    }
    this.handleDismiss = this.handleDismiss.bind(this);
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
    if(!document.forms["registerform"].reportValidity())
    {
        return;
    }
    axios.post('/api/contact',this.state).then(res =>{
        console.log(res);

        this.setState({
            ok : false
        })

    })
}
onlogin()

{   
    if(!document.forms["loginform"].reportValidity())
    {
        return;
    }
    console.log(this.state.password);
    axios.post('/api/contactk',this.state).then(res =>{
          console.log('username :'+res.data.username);
          if(res.data.username==undefined)
          {
              this.setState({
                  show : true
              })
              return;
          }
          else
          {
          this.props.history.push({
              pathname : '/dashboard',
            state : {details : res.data.username}
          
        });
    }
    }).catch((err)=>{
        console.log(err);
        this.setState({
            show : true
        })
    })
    
}
handleDismiss() {
    this.setState({ show: false });
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
      <div className="login container">
      {
          this.state.show ?  <Alert bsStyle="danger" onDismiss={this.handleDismiss}>
          <p>
            Wrong username/password!
          </p>
        </Alert> : ''
      }
      { this.state.ok ? 
      <div className="form" id="register-form">
          <div className="login-head ">
              Register!
          </div>
          <form ref="registerform">
              <div className="form-group">
                  <input name="first_name" type="text" className="form-control"  placeholder="First Name"  value={this.state.first_name} onChange={(e) => this.onchange(e)}  autoComplete="off" required />
              </div>
              <div className="form-group">
                  <input name="last_name"  type="text" className="form-control"  placeholder="Last Name"  value={this.state.last_name} onChange={(e) => this.onchange(e)} autoComplete="off" required/>
              </div>
              <div className="form-group">
                  <input name="username" type="text" className="form-control"  placeholder="Type your Username"  value={this.state.username} onChange={(e) => this.onchange(e)} autoComplete="off" required/>
              </div>
              <div className="form-group">
                  <input name="email" type="email" className="form-control"  placeholder="Enter your Email ID"  value={this.state.email} onChange={(e) => this.onchange(e)} autoComplete="off" required/>
              </div>
              <div className="form-group">
                  <input name="password" type="password" className="form-control"  placeholder="Password"  value={this.state.password} onChange={(e) => this.onchange(e)} autoComplete="off" required/>
              </div>
              <button type="button" onClick={this.onsave.bind(this)} className="ok btn btn-primary">Register</button> <br/><br/>
              <div class="fb-login-button" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="false"></div>
              <a href="#" id="signin" onClick={this.sign.bind(this)}>Already have an account? Signin!</a>
              <br/>
              <br/>
          </form>
      </div>
      :
      <div className="form" id="login-form">
          <div className="login-head">
              Login!
          </div>
           
          <form name="loginform" >
              <div className="form-group">
                  <input name="username" type="text" className="form-control" id="exampleInputEmail" placeholder="Username" aria-describedby="emailHelp"  required value={this.state.username} onChange={(e) => this.onchange(e)} autoComplete="off"/>
              </div>
              <div className="form-group">
                  <input name="password" type="password" className="form-control" id="exampleInputPassword" placeholder="Password"  value={this.state.password} required onChange={(e) => this.onchange(e)} autoComplete="off"/>
              </div>
              <button type="button" onClick={this.onlogin.bind(this)} className="ok btn btn-primary">Sign In</button> <br/><br/>
              <a href="#" id="signin" onClick={this.sign.bind(this)}>Dont have an account? Sign up!</a>
              </form>
          </div>}
          </div>

    );
  }
}

export default Login;
