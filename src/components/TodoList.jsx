
import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo, toggleComplete }) => {
    return (
        <div className="md:w-6/12 mx-auto mt-6 space-y-3">
            {todos.length === 0 ? (
                <p className="text-center text-gray-500 p-4 bg-white rounded-lg shadow-md">
                    No tasks yet! Add a new item above.
                </p>
            ) : (
                todos.map(todo => (
                    <TodoItem 
                        key={todo.id} 
                        todo={todo} 
                        deleteTodo={deleteTodo} 
                        toggleComplete={toggleComplete} 
                    />
                ))
            )}
        </div>
    );
};

export default TodoList;