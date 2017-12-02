// @flow

import React from 'react';

import Todo from './Todo';
import type { Todos, iEditTodo, fetching } from '../types/todo';

type Props = {
  todos: Todos,
  fetching: fetching
}

function List({todos, fetching, onToggle, onDelete, onEdit}: Props & iEditTodo): React$Element<any> {
  return (
    <section className="todo-list">
      {fetching && <h1> LOADING </h1> }
      { todos.length && todos.map(({id, title, completed}) =>
        <Todo
          key={id}
          id={id}
          title={title}
          completed={completed}
          onToggle={(id) => onToggle(id)}
          onDelete={(id) => onDelete(id)}
          onEdit={(id, title) => onEdit(id, title)}
        />
      )
    }
    </section>
  );
}

export default List;
