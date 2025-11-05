import { toast } from "react-toastify";

// TodoItem.jsx
const TodoItem = ({ todo, deleteTodo, toggleComplete }) => {
    return (
        <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
            
            <span
                className={`flex-1 text-lg cursor-pointer transition duration-150 ${
                    todo.completed 
                        ? 'line-through text-gray-500' 
                        : 'text-gray-800'
                }`}
                onClick={() => toggleComplete(todo.id)}
            >
                {todo.text}
            </span>
            
            {/* Action Buttons */}
            <div className="flex space-x-2">
                <button
                    onClick={() => toggleComplete(todo.id)}
                    className={`p-2 text-xs font-semibold rounded-lg ${
                        todo.completed 
                            ? 'bg-green-200 text-green-700' 
                            : 'bg-yellow-200 text-yellow-700'
                    } hover:opacity-80 transition`}
                >
                    {todo.completed ? 'Undo' : 'Complete'}
                </button>
                <button
                    onClick={() => deleteTodo(todo.id)}
                    className="p-2 text-xs font-semibold text-white bg-red-500 rounded-lg hover:bg-red-600 transition"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TodoItem;