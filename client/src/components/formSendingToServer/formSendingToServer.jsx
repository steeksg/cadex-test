import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class FormSendingToServer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      length: 15,
      width: 20,
      height: 25,
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    try {
      fetch(
        `http://localhost:9000/triangle/cube?length=${this.state.length}&width=${this.state.width}&height=${this.state.height}`
      )
        .then((response) => response.json())
        .then((response) => this.handleRecivedData(response));
    } catch (error) {
      console.log("Error response server!");
    }

    if (!!event) event.preventDefault();
  };

  handleRecivedData = (data) => {
    this.props.handleRecivedData(data);
  };

  componentDidMount() {
    this.handleSubmit();
  }

  render() {
    return (
      <div className="formContainer">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Length:</Form.Label>
            <Form.Control
              type="text"
              name="length"
              value={this.state.length}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Width:</Form.Label>
            <Form.Control
              type="text"
              name="width"
              value={this.state.width}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Height:</Form.Label>
            <Form.Control
              type="text"
              name="height"
              value={this.state.height}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Button type="submit">Send data to server</Button>
        </Form>
      </div>
    );
  }
}
export default FormSendingToServer;
