import { ADD_ONE_TODO, CHANGE_COMPLETED_CONDITION, REMOVE_ONE_TODO } from "./todoTypes";

const initialState={
    todos:[
        {id:1,title:"work1",completed:false},
        {id:2,title:"work2",completed:false},
        {id:3,title:"work3",completed:false},
    ]
}
const todoReducer=(state=initialState,action)=>{
    switch (action.type) {
        case CHANGE_COMPLETED_CONDITION:{
            const filteredTodosIndex=state.todos.findIndex(item=>item.id===action.payload.id);
            const cloneObject={...state.todos[filteredTodosIndex]};
            cloneObject.completed=action.payload.checked
            const cloneArray=[...state.todos];
            cloneArray[filteredTodosIndex]=cloneObject;
            const newState={...state,todos:cloneArray}
             return newState
        };
        case ADD_ONE_TODO:{
            const cloneArray=[...state.todos];
            cloneArray.push(action.payload);
            console.log(action.payload)
            const newState={...state,todos:cloneArray}
             return newState
        };

        case REMOVE_ONE_TODO:{
            const remainedItems=state.todos.filter(item=>item.id!==action.payload);
            const newState={...state,todos:remainedItems}
             return newState;
        }
            
        default:
            return state;
    }
}
export default todoReducer;
