import React, { useState } from 'react'
import uniqid from 'uniqid'

const Todo = () => {
    const [listInput , setListInput] = useState('');
    const [lists , setLists] = useState([]);
    const [singleListInput , setSingleListInput] = useState()

    const createList = ()=>{
        console.log(listInput);
        setLists([...lists , {
            listName: listInput,
            id: uniqid(),
            todos: []
        }])

        console.log(lists)
        
    }

    const addTodoIntoList = ()=>{
        console.log(singleListInput)
    }
    return (
        <>
            <h1>Todo App</h1>
           <div style={{
            textAlign: 'center',
            margin: '20px 0px'
           }}>
             <input type="text" value={listInput} onChange={(e)=> setListInput(e.target.value)} />
            <button onClick={createList}>Create List</button>
           </div>
            
            <div className="parent-list">
            {lists.length > 0 && lists.map((item) =>{ 
                return <div key={item.id} className='single-list'>
                    <h3>List Name: {item.listName}</h3>
                    <input value={singleListInput} onChange={(e)=>setSingleListInput(e.target.value)} />
                    <button onClick={addTodoIntoList}>Add item</button>

                    <ul>
                        <li>Home 
                            <button>delete</button>
                            <button>edit</button>
                        </li>
                        <li>About 
                            <button>delete</button>
                            <button>edit</button>
                        </li>
                        <li>Contact 
                            <button>delete</button>
                            <button>edit</button>
                        </li>
                    </ul>
                </div>
            })}
            </div>
        </>
    )
}

export default Todo

// [
//     {
//         listName: 'Office task',
//         id: 1,
//         todos: ['email' , 'file send' , 'audit' , 'Salaries']
//     },
//     {
//         listName: 'personal task',
//         id: 1,
//         todos: ['email' , 'file send' , 'audit' , 'Salaries']
//     },
    
// ]