import './style.css'
import React, { useState } from 'react';

const ToDoItem = ({ todo, deleteTodo, toggleComplete, editTodo }) => {

  const [isEditing, setIsEditing] = useState(false);  
  const [newText, setNewText] = useState(todo.text);


  const handleEdit = () => {
    setIsEditing(!isEditing);
  };


  const handleSave = () => {
    editTodo(todo.id, newText);  
    setIsEditing(false);  
  };

  return (
    <li className={todo.completed ? 'completed' : ''}>
      {isEditing ? (
        <input  className='editInput'
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)} 
        />
      ) : (
      
        <span onClick={() => toggleComplete(todo.id)}>
          {todo.text}  
        </span>
      )}    
      <button className='editDelete' onClick={isEditing ? handleSave : handleEdit}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
      <button className='editDelete' onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default ToDoItem;

