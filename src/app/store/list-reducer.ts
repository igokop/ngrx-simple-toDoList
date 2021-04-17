import * as listActions from './list-actions';

const initialState = {
    toDo: [
        {name: 'hej', date:'2012-12-24'},
        {name: 'hej2', date:'2012-12-25'}
    ],
    done:[
        {name: 'zrobione', date:'2012-12-22'}
    ]
}

export function listReducer(state = initialState, action: listActions.ListActions){
    switch(action.type){
        case listActions.ADD_TODO:
            return{
                ...state,
                toDo: [...state.toDo, action.payload]
            };
        case listActions.DELETE_TODO:
            return{
                ...state,
                toDo: state.toDo.filter((fi, fiIndex) =>{
                    return fiIndex !== action.payload;
                })
            }
        case listActions.MOVE_TASK:
            return{
                ...state,
                done: [...state.done, action.payload]
            }
        case listActions.DELETE_DONE:
            return{
                ...state,
                done: state.done.filter((fi, fiIndex) =>{
                    return fiIndex !== action.payload;
                })
            }
        default: 
            return state;
    }
}