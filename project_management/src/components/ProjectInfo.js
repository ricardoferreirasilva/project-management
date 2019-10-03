import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Button,ButtonToolbar,Form} from 'react-bootstrap';

class ProjectInfo extends Component {

    render() {
        const style = {
            backgroundColor: "#dae9f7",
            width: '25rem',
            margin: "25px",
        };

        return (
            <Card style={style}>
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <ButtonToolbar>
                        <Button variant="danger" >Remove</Button>

                    </ButtonToolbar>
                </Card.Body>
            </Card>
        );
    }
}

export default ProjectInfo;
