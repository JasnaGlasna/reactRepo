import React, { useState } from 'react';
import PropTypes from "prop-types";

export const Todos = ({ listOfTodos, markTodoAsDone, editTodo, deleteTodo, saveTodo, hideCompleted }) => {
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState('');
  const filteredTodos = hideCompleted? listOfTodos.filter(todo => !todo.done) : listOfTodos;

  const startEditing = (id, text) => {
    setEditingId(id);
    setEditingText(text);
  }

  const stopEditing = () => {
    setEditingId(null);
    setEditingText('');
  }

  return (
    <table style={{border: '1px solid black'}}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Item</th>
          <th>Completed</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {listOfTodos.map((todo) => (
          <tr key={todo.id} style={{border: '1px solid black'}}>
            <td>{todo.id}</td>
            <td>
              {editingId === todo.id ? (
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />
              ) : (
                todo.text
              )}
            </td>
            <td>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => markTodoAsDone(todo)}
              />
            </td>
            <td>
              {editingId === todo.id ? (
                <>
                  <button onClick={() => { saveTodo(todo.id, editingText); stopEditing(); }}>Save</button>
                  <button onClick={stopEditing}>Cancel</button>
                </>
              ) : (
                <>
                  <button onClick={() => startEditing(todo.id, todo.text)}>Edit</button>
                  <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Todos.propTypes = {
  listOfTodos: PropTypes.arrayOf(PropTypes.object),
  markTodoAsDone: PropTypes.func,
  deleteTodo: PropTypes.func,
  saveTodo: PropTypes.func,
  editTodo: PropTypes.func,
};
