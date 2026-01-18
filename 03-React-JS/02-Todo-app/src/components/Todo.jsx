import React, { useState } from "react";

const Todo = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [todo, setTodo] = useState([]);

    const addTodo = (e) => {
        e.preventDefault();

        if (!title || !description) return;

        todo.push({ title, description })
        setTodo([...todo])

        setTitle("");
        setDescription("");
    };


    const deleteTodo = (index) => {
        console.log("todo deleted ===> ", index);

        todo.splice(index , 1);
        setTodo([...todo]);

    }

    const editTodo = (index) => {
        console.log("todo edited ===> ", index);

        const updatedVal = prompt("enter updated value");
        todo[index].title = updatedVal;

        setTodo([...todo]);


    }
    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-start pt-10">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-2xl font-bold text-center mb-4">
                    Todo App
                </h1>

                {/* Form */}
                <form onSubmit={addTodo} className="space-y-3">
                    <input
                        type="text"
                        placeholder="Enter title"
                        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="Enter description"
                        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
                        Add todo
                    </button>
                </form>

                {/* Todo List */}
                <div className="mt-6 space-y-4">
                    {todo.length > 0 ? (
                        todo.map((item, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 border rounded p-4 flex justify-between items-start"
                            >
                                <div>
                                    <h2 className="font-semibold">{item.title}</h2>
                                    <p className="text-sm text-gray-600">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="flex gap-2">
                                    <button
                                    onClick={()=>editTodo(index)}
                                        className="bg-yellow-400 text-white px-3 py-1 rounded text-sm hover:bg-yellow-500"
                                    >
                                        Edit
                                    </button>

                                    <button
                                    onClick={()=>deleteTodo(index)}
                                        className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">
                            No todo found...
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Todo;
