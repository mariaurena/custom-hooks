import { useEffect, useReducer } from "react"

import { todoReducer } from "../08-useReducer/todoReducer"

const initialState = [

]

const init = () => {
    return JSON.parse( localStorage.getItem('todos')) || []
}

export const useTodos = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, initialState, init )

    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify( todos ))
    }, [todos])

    // añadir un nuevo Todo
    const handleNewTodo = ( todo ) => {
        
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch( action )
    }

    // eliminar un Todo
    const handleDeleteTodo = ( id ) => {

        const action = {
            type: '[TODO] Remove Todo',
            payload: id
        }

        dispatch( action )
    }

    // cambiar el 'done' del Todo
    const handleToggleTodo = ( id ) => {

        const action = {
            type: '[TODO] Toggle Todo',
            payload: id
        }

        dispatch( action )
    }


    return {
        todos,
        todosCount: todos.length, 
        pendingTodosCount: todos.filter(todo => !todo.done).length,
        handleNewTodo, 
        handleDeleteTodo, 
        handleToggleTodo
    }
}
