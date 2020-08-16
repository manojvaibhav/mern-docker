import React, { Component } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ApiService from "../../services/Api.service";

class Register extends Component {
  constructor(props) {
    super(props);
    this.apiService = new ApiService();
    this.state = {
      user: {
        email: "",
        password: "",
        name: "",
      },
    };
  }

  formValueHandler = (event, key) => {
    const temp = { ...this.state.user };
    temp[key] = event.target.value;
    this.setState({ user: temp });
  };

  registerUser = (event) => {
    event.preventDefault();
    this.apiService
      .register(this.state.user)
      .then((result) => {
        this.props.history.replace("/home");
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          dataLoaded: true,
          errorMessage: "Error in Registration",
        });
      });
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col xs={{ span: 12, offset: 0 }} md={{ span: 4, offset: 4 }}>
            <div className="login-col">
              <div className="login">
                <h4 className="text-center">Register</h4>
                <Form noValidate onSubmit={(event) => this.registerUser(event)}>
                  <Form.Group controlId="registername">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Full Name"
                      value={this.state.user.name}
                      onChange={(event) => this.formValueHandler(event, "name")}
                    />
                  </Form.Group>
                  <Form.Group controlId="registeremail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter Email"
                      value={this.state.user.email}
                      onChange={(event) =>
                        this.formValueHandler(event, "email")
                      }
                    />
                  </Form.Group>
                  <Form.Group
                    controlId="registerpassword"
                    value={this.state.user.password}
                    onChange={(event) =>
                      this.formValueHandler(event, "password")
                    }
                  >
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
                  {this.state.dataLoaded && this.state.errorMessage ? (
                    <p className="text-danger m-t-20">
                      {this.state.errorMessage}
                    </p>
                  ) : null}
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
