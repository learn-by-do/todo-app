import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions/todo';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };
  }

  handleChange = event => {
    this.setState({ input: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          className="todo-input"
          type="text"
          onChange={this.handleChange}
          value={this.state.input}
        />
        <button
          disabled={!this.state.input}
          className="btn--add"
          onClick={() => {
            this.props.dispatch(addTodo(this.state.input));
            this.setState({ input: '' });
          }}
        >
          Add Todo
        </button>
      </div>
    );
  }
}

export default connect()(AddTodo);
