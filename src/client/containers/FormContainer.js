// @flow

import { connect } from 'react-redux';

import { REQUEST_ADD } from '../actions';
import Form from '../components/Form';

import type { iAddTodo, Title } from '../types/todo';
import type { State } from '../types';
import type { Dispatch } from 'redux';

function mapStateToProps(state: State) {
  return {
    todos: state.todos.items
  };
}

function mapDispatchToProps(dispatch: Dispatch): iAddTodo {
  return {
    onAdd: (title: Title) => dispatch({
      type: REQUEST_ADD,
      title
    })
  }
};

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(Form);

export default ListContainer;
