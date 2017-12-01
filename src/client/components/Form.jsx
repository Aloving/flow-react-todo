// @flow

import React from 'react';

import type { iAddTodo } from '../types/todo';

type Props = iAddTodo;
type State = {
  title: string
};

class Form extends React.Component<Props, State>{
  state = {
    title: ''
  }

  handleSubmit(e: Event){
    e.preventDefault();

    const title: string = this.state.title;
    if(title.length) {
      this.props.onAdd(title);
      this.setState({
        title: ''
      })
    }
  }

  handleChange(e: Event) {
    const target = e.target;

    if (target instanceof HTMLInputElement) {
      this.setState({ title: target.value });
    }

  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input
          value={this.state.title}
          onChange={(e) => this.handleChange(e)}
        />
        <button type="submit">Добавить</button>
      </form>
    );
  }
}

export default Form;
