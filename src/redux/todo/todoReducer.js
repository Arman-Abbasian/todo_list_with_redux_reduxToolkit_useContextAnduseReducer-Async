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
                console.log(res.data)
                console.log(action.payload.checked)
                const index=state.todos.findIndex(item=>item.id===action.payload.id);
                const cloneObject={...state.todos[index]};
                cloneObject.checked=action.payload.checked;
                const cloneArray=[...state.todos];
                cloneArray[index]=cloneObject;
                console.log(state);
                const newArray={...state,todos:cloneArray}
                return newArray;
            })
            .catch(err=>{
                console.log(err.message);
                return state;
            })
        };
        case ADD_ONE_TODO:{
            axios.post(`http://localhost:4000/todos`,action.payload)
            .then(res=>{
                const cloneArray=[...state.todos];
                state.todos.push(action.payload);
                console.log(action.payload)
                const newState={...state,todos:state.todos};
                console.log(newState)
                 return {...state,todos:cloneArray,error:"",laoding:false}
            })
            .catch(err=>err.message)
           return state
        };

        case REMOVE_ONE_TODO:{
            axios.delete(`http://localhost:4000/todos/${action.payload}`)
            .then(res=>{
                const remainedItems=state.todos.filter(item=>item.id!==action.payload);
                const newState={...state,todos:remainedItems,error:"",laoding:false};
                console.log(newState)
                return newState;
            })
            .catch(err=>console.log(err));
            return state;
            
        }
            
        default:
            return state;
    }
    
}
export default todoReducer;
