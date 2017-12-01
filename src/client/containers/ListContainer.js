// @flow

import { connect } from 'react-redux';

import { EDIT_TODO, DELETE_TODO, TOGGLE_TODO } from '../actions';
import List from '../components/List';


import type { iEditTodo } from '../types/todo';
import type { State } from '../types';
import type { Dispatch } from 'redux';

function mapStateToProps(state: State) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch: Dispatch): iEditTodo {
  return {
    onDelete: id => dispatch({
      type: DELETE_TODO,
      id
    }),
    onToggle: id => dispatch({
      type: TOGGLE_TODO,
      id
    }),
    onEdit: (id, title) => dispatch({
      type: EDIT_TODO,
      id,
      title,
    })
  }
};

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListContainer;
