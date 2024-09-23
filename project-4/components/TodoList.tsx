'use client';
import React, { useState } from 'react';
import TodoItem from './TodoItem';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');
  const [editId, setEditId] = useState<number | null>(null);
  const [editText, setEditText] = useState('');

  const addTodo = () => {
    if (newTodo.trim() === '') return;
    const newTask: Todo = { id: Date.now(), text: newTodo, completed: false };
    setTodos([...todos, newTask]);
    setNewTodo('');
  };

  const toggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const startEditing = (id: number, text: string) => {
    setEditId(id);
    setEditText(text);
  };

  const updateTodo = (id: number) => {
    if (editText.trim() === '') return;
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: editText } : todo
      )
    );
    setEditId(null);
    setEditText('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-blue-500 mb-6 sm:mb-8">
    Blog
        </h1>
        <div className="flex mb-5 space-x-3">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new task"
            className="flex-grow p-2 sm:p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
          <button
            onClick={addTodo}
            className="bg-blue-500 text-white px-2 py-2 sm:px-4 sm:py-3 rounded-md hover:bg-blue-600 transition-all"
          >
            Add
          </button>
        </div>

        {/* Task List */}
        <div>
          {todos.length === 0 ? (
            <p className="text-center text-gray-500">
              No tasks yet. Add a task!
            </p>
          ) : (
            todos.map((todo) => (
              <TodoItem
                key={todo.id}
                id={todo.id}
                text={todo.text}
                completed={todo.completed}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
                startEditing={startEditing}
                isEditing={editId === todo.id}
                editText={editText}
                setEditText={setEditText}
                updateTodo={updateTodo}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
