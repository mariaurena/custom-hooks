export const todoReducer = ( initialState = [], action ) => {
    
    switch ( action.type ) {
        case '[TODO] Add Todo':
            return [ ...initialState, action.payload ]

        case '[TODO] Remove Todo': 
            return initialState.filter( todo => todo.id !== action.payload )

        case '[TODO] Toggle Todo':

            // map regresará un nuevo arreglo
            return initialState.map( todo => {

                // payload es el id del todo
                if ( todo.id === action.payload ){
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                
                return todo
            })
        
        default:
            return initialState
    }
}