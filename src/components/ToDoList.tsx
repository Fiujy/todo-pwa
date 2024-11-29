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
        <div className="max-w-md mx-auto p-4">
            <h1 className="text-xl font-bold text-center mb-4">To-Do List</h1>
            <div className='space-y-1 text-left'>
                <p className='text-lg'>Les avantages de cette app : </p>
                <p>1. Les données restent sauvegardées localement, après rechargement</p>
                <p>2. Fonctionne aussi hors ligne</p>
                <p>3. L'application est responsive (s'adapte à la taille d'écran)</p>
                <p>4. Totalement autonome : fonctionne sans back-end</p>
                <p>5. Peut-être ajoutée à votre écran d'accueil</p>
            </div>
            <div className="flex gap-2 pt-5">
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="flex-1 border rounded p-2"
                    placeholder="Nouvelle tâche" />
                <button onClick={addTask} className="bg-blue-700 text-white px-4 py-2 rounded border-none">
                    Ajouter
                </button>
            </div>
            <ul className="pt-5 space-y-2">
                {tasks.map((task, index) => (
                    <li key={index} className="flex justify-between items-center bg-gray-700 p-2 rounded">{task}
                        <button onClick={() => removeTask(index)} className="border border-red-800">Supprimer</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;