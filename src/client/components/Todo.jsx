// @flow

import React from 'react';

import type { Todo as typeTodo, iEditTodo } from '../types/todo';

type State = {
  edit: boolean
}

type Props = typeTodo & iEditTodo;

class Todo extends React.Component<Props, State> {
  state = {
    edit: false
  }

  handleSubmit(e: Event) {
    e.preventDefault();

    const title: string = this.refs.title.value;

    this.props.onEdit(this.props.id, title);
    this.setState({edit: false});
  }

  renderForm(){
    return (
      <form onSubmit={(e) => this.handleSubmit(e) }>
        <input defaultValue={this.props.title} ref="title"></input>
      </form>
    );
  }

  render() {
    const {title, id, completed, onToggle, onDelete} = this.props;
    return(
      <div className="todo">
        <button onClick={() => this.setState({edit: !this.state.edit})}>E</button>
        {this.state.edit ? this.renderForm() : <span>{title}</span>}
        <span>{id}</span>
        <input
          id="checkBox"
          type="checkbox"
          checked={completed}
          onChange={() => onToggle(id)}
          />
        <button onClick={() => onDelete(id)}>x</button>
      </div>
    )
  }
}

export default Todo;
