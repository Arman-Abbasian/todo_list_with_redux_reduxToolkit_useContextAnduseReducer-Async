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
                return state;
            })
            .catch(err=>{
                console.log(err.message);
                return state;
            })
        };
        case ADD_ONE_TODO:{
            axios.post(`http://localhost:4000/todos`,action.payload)
            .then(res=>{
                console.log(state)
                return state;
            })
            .catch(err=>console.log(err.message))
           return state
        };

        case REMOVE_ONE_TODO:{
            axios.delete(`http://localhost:4000/todos/${action.payload}`)
            .then(res=>{
                return state;
            })
            .catch(err=>console.log(err));
            return state;
            
        }
            
        default:
            return state;
    }
    
}
export default todoReducer;
