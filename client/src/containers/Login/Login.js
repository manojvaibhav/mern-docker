import React, { Component } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ApiService from '../../services/Api.service';
import "./Login.scss";

class Login extends Component {

  constructor(props){
    super(props)
    this.apiService = new ApiService();
    this.state = {
      user: {
        email:"",
        password:""
      }
    }
  }
 
  formValueHandler = (event, key) => {
      const temp = {...this.state.user};
      temp[key] = event.target.value;
      this.setState({user:temp});  
  }

  loginUser = (event) => {
      event.preventDefault();
      this.apiService.login(this.state.user).then((result)=>{
          // save data into cookies
          this.props.history.replace('/home');        
      }).catch((error)=>{
        console.log(error);
        this.setState({
          dataLoaded:true,
          errorMessage: "Invalid Username/Password"
        })
      })
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col xs={{ span: 12, offset: 0 }} md={{ span: 4, offset: 4 }}>
            <div className="login-col">
              <div className="login">
                <h4 className="text-center">Login</h4>
                <Form noValidate onSubmit={(event) => this.loginUser(event)}>
                  <Form.Group controlId="loginemail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" value={this.state.user.email} onChange={(event) => this.formValueHandler(event, 'email')} />
                  </Form.Group>
                  <Form.Group controlId="loginpassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter Password"
                      value={this.state.user.password} onChange={(event) => this.formValueHandler(event, 'password')}
                    />
                  </Form.Group>
                  <Button varaint="primary" type="submit">
                    Login
                  </Button>
                  <NavLink to="/register">
                    <p className="m-t-20">New User ? Create an Account here</p>
                  </NavLink>
                  { this.state.dataLoaded && this.state.errorMessage ? <p className="text-danger m-t-20">{this.state.errorMessage}</p> : null }
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
