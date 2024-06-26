import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classname';
import './style.scss';

TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func,
};
TodoList.defaultProps = {
  todoList: [],
  onTodoClick: null,
};

function TodoList(props) {
  const { todoList, onTodoClick } = props
  const handleTodoClick = (todo, index) => {
    if (!onTodoClick) return;

    onTodoClick(todo, index);
  }
  return (
    <ul className='todo-list'>
      {todoList.map((todo, index) => (
        <li key={todo.id} className={classname({ 'todo-item': true, completed: todo.status === 'completed' })}
          onClick={() => handleTodoClick(todo, index)}>
          {todo.title}
        </li>
      ))}

    </ul>
  );
}

export default TodoList;