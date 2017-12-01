// @flow

import { connect } from 'react-redux';

import { ADD_TODO } from '../actions';
import Form from '../components/Form';

import type { iAddTodo, Title } from '../types/todo';
import type { State } from '../types';
import type { Dispatch } from 'redux';

function mapStateToProps(state: State) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch: Dispatch): iAddTodo {
  return {
    onAdd: (title: Title) => dispatch({
      type: ADD_TODO,
      title
    })
  }
};

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(Form);

export default ListContainer;
