import React from 'react'

const Todo = ({handleSubmit,todo,setTodo,editId}) => {
    return (
        <form className='todoForm' onSubmit={handleSubmit}>
            <input type='txet' value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button type='submit'>{editId ? "Edit" : "Go"}</button>
        </form>
    )
}

export default Todo