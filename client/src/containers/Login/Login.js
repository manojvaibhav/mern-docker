import React, { Component } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import "./Login.scss";

class Login extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col xs={{ span: 12, offset: 0 }} md={{ span: 4, offset: 4 }}>
            <div className="login-col">
              <div className="login">
                <h4 className="text-center">Login</h4>
                <Form>
                  <Form.Group controlId="loginemail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" />
                  </Form.Group>
                  <Form.Group controlId="loginpassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter Password"
                    />
                  </Form.Group>
                  <Button varaint="primary" type="submit">
                    Login
                  </Button>
                  <NavLink to="/register">
                    <p className="m-t-20">New User ? Create an Account here</p>
                  </NavLink>
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
