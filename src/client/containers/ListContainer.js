// @flow

import { connect } from 'react-redux';

import { REQUEST_EDIT, REQUEST_TOGGLE, REQUEST_DELETE } from '../actions';
import List from '../components/List';


import type { iEditTodo } from '../types/todo';
import type { State } from '../types';
import type { Dispatch } from '../types';

function mapStateToProps(state: State) {
  return {
    todos: state.todos.items,
    fetching: state.todos.fetching
  };
}

function mapDispatchToProps(dispatch: Dispatch): iEditTodo {
  return {
    onDelete: id => dispatch({
      type: REQUEST_DELETE,
      id
    }),
    onToggle: id => dispatch({
      type: REQUEST_TOGGLE,
      id
    }),
    onEdit: (id, title) => dispatch({
      type: REQUEST_EDIT,
      title,
      id
    })
  }
};

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListContainer;
