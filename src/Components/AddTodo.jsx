import React, { useContext, useState } from 'react';
import { TodoContext } from '../Contexts/TodoContext';

function AddTodo() {
    const {saveTodo} = useContext(TodoContext);
    const [todo, setTodo] = useState();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        saveTodo(todo)
    }

    const handleChangeInput = (e) => {
        setTodo({
            ...todo,
            title: e.target.value
        })
    }

    return (
        <div>
            <hr />
            <form onSubmit={handleSubmit} >
                <input
                    name='title'
                    id='title'
                    placeholder='Nova tarefa'
                    onChange={handleChangeInput}
                />
                <button>Adicionar</button>
            </form>
      </div>
  );
}

export default AddTodo;