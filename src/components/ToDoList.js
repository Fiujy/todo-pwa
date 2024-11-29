var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
var ToDoList = function () {
    var _a = useState(function () {
        var savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    }), tasks = _a[0], setTasks = _a[1];
    var _b = useState(''), input = _b[0], setInput = _b[1];
    useEffect(function () {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);
    var addTask = function () {
        if (input.trim()) {
            setTasks(__spreadArray(__spreadArray([], tasks, true), [input], false));
            setInput('');
        }
    };
    var removeTask = function (index) {
        var newTasks = tasks.filter(function (_, i) { return i !== index; });
        setTasks(newTasks);
    };
    return (_jsxs("div", { className: "w-full mx-auto p-4", children: [_jsx("h1", { className: "text-xl font-bold text-center mb-4", children: "To-Do List" }), _jsxs("div", { className: "flex gap-2", children: [_jsx("input", { type: "text", value: input, onChange: function (e) { return setInput(e.target.value); }, className: "flex-1 border rounded p-2", placeholder: "New task" }), _jsx("button", { onClick: addTask, className: "bg-blue-500 text-white px-4 py-2 rounded", children: "Add" })] }), _jsx("ul", { className: "mt-4 space-y-2", children: tasks.map(function (task, index) { return (_jsxs("li", { className: "flex justify-between items-center bg-gray-700 p-2 rounded", children: [task, _jsx("button", { onClick: function () { return removeTask(index); }, className: "", children: "Remove" })] }, index)); }) })] }));
};
export default ToDoList;
