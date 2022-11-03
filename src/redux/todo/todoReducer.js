import axios from "axios";
import { ADD_ONE_TODO, CHANGE_COMPLETED_CONDITION, FETCH_TODOS_REQUEST, FETCH_TODOS_SUCCESS, REMOVE_ONE_TODO } from "./todoTypes";

const initialState={
    todos:[],
    error:"",
    laoding:false
}
const todoReducer=(state=initialState,action)=>{
    switch (action.type) {
        case FETCH_TODOS_REQUEST:{
            return {...state,todos:[],error:"",laoding:true}
        };
        case FETCH_TODOS_SUCCESS:{
            return {...state,todos:action.payload,error:"",laoding:false}
        };
        case FETCH_TODOS_REQUEST:{
            return {...state,todos:[],error:action.payload,laoding:false}
        }
        case CHANGE_COMPLETED_CONDITION:{
            axios.put(`http://localhost:4000/todos/${action.payload.id}`,action.payload)
            .then(res=>{
                const index=state.todos.findIndex(item=>item.id===action.payload.id);
                const cloneObject={...state.todos[index]};
                cloneObject.checked=action.payload.checked;
                console.log(action.payload)
            })
            .catch(err=>{
                console.log(err.message)
            })
            // const filteredTodosIndex=state.todos.findIndex(item=>item.id===action.payload.id);
            // const cloneObject={...state.todos[filteredTodosIndex]};
            // cloneObject.completed=action.payload.checked
            // const cloneArray=[...state.todos];
            // cloneArray[filteredTodosIndex]=cloneObject;
            // const newState={...state,todos:cloneArray}
             return state;
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
