import React, { Component } from 'react';
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, ButtonToolbar, Form, InputGroup, FormControl } from 'react-bootstrap';

class ProjectInfo extends Component {
    constructor(props){
        super(props)

        this.submitTask = this.submitTask.bind(this);
        this.onChangeTaskDescription = this.onChangeTaskDescription.bind(this);

        this.state = {
            newTaskDescription: ""
        }
    }
    onChangeTaskDescription(e) {
        this.setState({ newTaskDescription: e.target.value })
    }
    submitTask(event){
        let description = this.state.newTaskDescription;
        this.setState({newTaskDescription: ""});
        let token = localStorage.getItem("token");
        axios.post("http://127.0.0.1:5000/tasks/create",
            {description: description,projectId:this.props.project._id},
            {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            }).then((res) => {
               if(res.status == 200) this.props.getProjects();

            }).catch((err) => {
                console.log(err)
                console.error("Could not create project.")
        });
    }
    render() {
        const style = {
            backgroundColor: "#dae9f7",
            width: '25rem',
            margin: "25px",
            textAlign: "left"
        };
        
        let completedTasks=[],ongoingTasks =[];
        for(let task of this.props.project.tasks)
        {
            if(task.completed) completedTasks.push(task)
            else ongoingTasks.push(task);
        }

        const renderCompletedTasks = completedTasks.map((task, key) =>
            <Form.Check key={task._id} type="checkbox" label={task.description} />
        );

        const renderOngoingTasks = ongoingTasks.map((task, key) =>
            <Form.Check key={task._id} type="checkbox" label={task.description} />
        );

        return (
            <Card style={style}>
                <Card.Body>
                    <Card.Title>{this.props.project.name}</Card.Title>
                    <Card.Text>
                        {this.props.project.description}
                    </Card.Text>
                    <h6>Active tasks: </h6>
                    <Form.Group controlId="activeTasks">
                        {renderOngoingTasks}
                    </Form.Group>

                    <h6>Completed tasks: </h6>
                    <Form.Group controlId="activeTasks">
                        {renderCompletedTasks}
                    </Form.Group>

                    <InputGroup className="mb-3">
                        <FormControl placeholder="New task description" aria-label="New task description" aria-describedby="basic-addon2" value={this.state.newTaskDescription}  onChange={this.onChangeTaskDescription}/>
                        <InputGroup.Append>
                            <Button variant="outline-secondary" onClick={this.submitTask}>Add task</Button>
                        </InputGroup.Append>
                    </InputGroup>

                </Card.Body>
            </Card>
        );
    }
}

export default ProjectInfo;
