import React, { useEffect, useState } from 'react';

const ToDoList: React.FC = () => {
    const [tasks, setTasks] = useState<string[]>(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });
    const [input, setInput] = useState('');

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        if (input.trim()) {
            setTasks([...tasks, input]);
            setInput('');
        }
    };

    const removeTask = (index: number) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    return (
        <div className="w-full mx-auto p-4">
            <h1 className="text-xl font-bold text-center mb-4">To-Do List</h1>
            <div className="flex gap-2">
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="flex-1 border rounded p-2"
                    placeholder="New task" />
                <button onClick={addTask} className="bg-blue-500 text-white px-4 py-2 rounded">
                    Add
                </button>
            </div>
            <ul className="mt-4 space-y-2">
                {tasks.map((task, index) => (
                    <li key={index} className="flex justify-between items-center bg-gray-700 p-2 rounded">{task}
                        <button onClick={() => removeTask(index)} className="">Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;