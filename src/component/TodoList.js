import React from 'react'
import Todo from '../component/Todo';

const TodoList = ({ todos, onTodoClick, rmk }) => (

  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    ))}
  </ul>
)


export default TodoList