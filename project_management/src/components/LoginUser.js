import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import { Form, Button, Row, Col } from 'react-bootstrap';

class LoginUser extends Component {
    render() {
        const style = {

            backgroundColor: "#a2c8ec",
            padding: "20px",
            marginTop: "25px",

        };

        return (
            <Row>
                <Col></Col>
                <Col>
                    <Form style={style}>
                        <Form.Group controlId="formUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="Username" placeholder="Enter username" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </Col>
                <Col></Col>
            </Row>
        );
    }
}

export default LoginUser;
