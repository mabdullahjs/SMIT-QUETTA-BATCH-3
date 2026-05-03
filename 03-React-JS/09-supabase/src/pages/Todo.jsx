import { useEffect, useState } from 'react'
import { supabase } from '../config/supabase/supabase'

function Todo() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [todo, setTodo] = useState([]);


    // Add Todo
    const addTodo = async (e) => {
        e.preventDefault()
        console.log(title, description);

        const { data, error } = await supabase
            .from("Todos")
            .insert([{ Title: title, Desc: description }])
            .select()
        if (error) {
            console.log(error);
        } else {
            console.log(data);

        }


    }

    //  Read Todo
    const fetchTodos = async () => {
        const { data, error } = await supabase
            .from("Todos")
            .select("*")
            .order("created_at", { ascending: false })

        if (error) {
            console.log(error)
        } else {
            console.log(data);
            setTodo(data)

        }
    }
    useEffect(() => {
        fetchTodos()
    }, [])

    // Delete Todo
    const deleteTodo = async (id) => {
        const { error } = await supabase
            .from("Todos")
            .delete()
            .eq("id", id)

        if (error) {
            console.log(error)
        } else {
            fetchTodos() // refresh list after delete
        }
    }
    return (
        <>

            <form onSubmit={addTodo}>
                <input type="text" placeholder='Enter Todo Title' onChange={(e) => setTitle(e.target.value)} value={title} />
                <textarea type="text" placeholder='Enter Todo Description' onChange={(e) => setDescription(e.target.value)} value={description} />
                <button>Add Todo</button>
            </form>

            {
                todo.length > 0 ? todo.map((item) => {
                    return <div key={item.id}>
                        <div>
                            <h1>{item.id}</h1>
                            <h1>{item.Title}</h1>
                            <p>{item.Desc}</p>
                        </div>
                        <div>
                            <button onClick={() => deleteTodo(item.id)}>Delete</button>
                            <button>Edit</button>
                        </div>
                    </div>
                }) : <h1>No Todo</h1>
            }

        </>
    )
}

export default Todo