import React, { useState } from 'react';
import TodoList from './TodoList';
import { toast } from 'react-toastify';

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    
    const handleTodo = (e) => {
        e.preventDefault()
        if (input.trim() === ''){
            return;
        }
        
        const newTodo = {
            id: Date.now(),
            text: input.trim(),
            completed: false,
        };
        toast.success('Item added successfully',{
            position:'top-left',
            autoClose: 2000,
        })
        setTodos([...todos, newTodo]);
        setInput('');
    };


    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
        toast.error('Item deleted successfully',{
            // position: 'bottom-right',
            autoClose: 2000,
        })
    };

    
    const toggleComplete = (id) => {
        setTodos(
            todos.map(todo => 
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
        toast.warning('button changes')
    };

    return (
        <div className='min-h-screen bg-gray-100 p-8'>
            <div className='bg-white rounded-xl md:w-6/12 mx-auto py-6 shadow-2xl'>
                <h1 className='text-3xl font-bold text-center text-gray-800 mb-6'>To-Do List App</h1>
                <form>

                <div className='flex items-center justify-center gap-2 px-6'>
                    <input 
                        type="text" 
                        value={input} 
                        placeholder='Write something...' 
                        className='w-full p-3 border border-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-lg focus:outline-none focus:border-blue-500' 
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleTodo()} 
                        required
                    />
                    <button 
                        onClick={handleTodo} 
                        className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-150 text-nowrap'
                        >
                        Add Task
                    </button>
                </div>
                        </form>
            </div>
            
            <TodoList 
                todos={todos} 
                deleteTodo={deleteTodo} 
                toggleComplete={toggleComplete} 
            />
        </div>
    );
}

export default TodoApp;