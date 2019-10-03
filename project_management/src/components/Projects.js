import React, { Component } from 'react';
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import { Form, Button, Row, Col } from 'react-bootstrap';

class Projects extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
            projects: []
        }

    }
    componentDidMount(){
        let token = localStorage.getItem("token");
        axios.post("http://localhost:5000/projects",{token: token}).then((res)=>{
            this.setState({projects:res.data})
          
         }).catch((err)=>{
             console.log(err)
             console.error("Could not get projects.")
         });
    }
    render() {
        const style = {
            backgroundColor: "#a2c8ec",
            padding: "20px",
            margin: "25px",
            
        };
        return (
            <Row>
                <Col></Col>
                <Col></Col>
                <Col>
                    <Form style={style} >
                        <h1>Create a new Project</h1>
                        <Form.Group controlId="formProjectName">
                            <Form.Label>Your project name</Form.Label>
                            <Form.Control type="text" placeholder="Enter project name" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Create Project
                        </Button>
                    </Form>
                </Col>
            </Row>
        );
    }
}

export default Projects;
