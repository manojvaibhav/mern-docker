import React, { Component } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

class Register extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col xs={{ span: 12, offset: 0 }} md={{ span: 4, offset: 4 }}>
            <div className="login-col">
              <div className="login">
                <h4 className="text-center">Register</h4>
                <Form>
                  <Form.Group controlId="registername">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Full Name" />
                  </Form.Group>
                  <Form.Group controlId="registeremail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" />
                  </Form.Group>
                  <Form.Group controlId="registerpassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter Password"
                    />
                  </Form.Group>
                  <Button varaint="primary" type="submit">
                    Register
                  </Button>
                  <NavLink to="/login">
                    <p className="m-t-20">
                      Already have an Account ? Login here
                    </p>
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

export default Register;
