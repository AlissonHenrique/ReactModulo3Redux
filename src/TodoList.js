import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as TodoAction from './store/actions/todos';

const TodoList = ({ todos, addTodo, removeTodo }) => (
  <Fragment>
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
          <button type="button" onClick={() => removeTodo(todo.id)}>
            remover
          </button>
        </li>
      ))}
    </ul>
    <button type="button" onClick={() => addTodo('Novo')}>
      Adicionar
    </button>
  </Fragment>
);

TodoList.propTypes = {
  addTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
    }),
  ).isRequired,
};
const mapStateProps = state => ({ todos: state.todos });

// envia dados para os reducers
const mapDispatchToProps = dispatch => bindActionCreators(TodoAction, dispatch);

export default connect(
  mapStateProps,
  mapDispatchToProps,
)(TodoList);
