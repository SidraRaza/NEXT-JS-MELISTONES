import React from 'react';

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
  startEditing: (id: number, text: string) => void;
  isEditing: boolean;
  editText: string;
  setEditText: (text: string) => void;
  updateTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  text,
  completed,
  toggleComplete,
  deleteTodo,
  startEditing,
  isEditing,
  editText,
  setEditText,
  updateTodo,
}) => {
  return (
    <div className="flex flex-wrap justify-between items-center bg-gray-100 shadow-sm p-4 rounded-md my-3 hover:bg-gray-200 transition-all duration-300">
      <div className="flex items-center w-full sm:w-auto mb-2 sm:mb-0">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleComplete(id)}
          className="mr-3 h-5 w-5"
        />
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="p-2 rounded-md border border-gray-300 w-full sm:w-auto"
          />
        ) : (
          <p className={`text-lg ${completed ? 'line-through text-gray-400' : ''}`}>
            {text}
          </p>
        )}
      </div>
      <div className="flex space-x-3 w-full sm:w-auto sm:justify-end">
        {isEditing ? (
          <button
            onClick={() => updateTodo(id)}
            className="text-green-500 hover:text-green-700 transition-colors"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => startEditing(id, text)}
            className="text-blue-500 hover:text-blue-700 transition-colors"
          >
            Edit
          </button>
        )}
        <button
          onClick={() => deleteTodo(id)}
          className="text-red-500 hover:text-red-700 transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
