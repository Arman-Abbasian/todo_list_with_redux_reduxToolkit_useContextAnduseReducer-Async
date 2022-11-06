import axios from "axios";
import { ADD_ONE_TODO, CHANGE_COMPLETED_CONDITION, FETCH_TODOS_FAILURE, FETCH_TODOS_REQUEST, FETCH_TODOS_SUCCESS, REMOVE_ONE_TODO } from "./todoTypes"


const fetchTodosRequest=()=>{
    return{
        type:FETCH_TODOS_REQUEST
    }
};
const fetchTodosFailure=(payload)=>{
    return{
        type:FETCH_TODOS_FAILURE,
        payload
    }
};
const fetchTodosSuccess=(payload)=>{
    return{
        type:FETCH_TODOS_SUCCESS,
        payload
    }
};

export const fetchTodos=()=>{
    return function(dispatch){
        dispatch(fetchTodosRequest());
        axios.get(`http://localhost:4000/todos`)
        .then(res=>{
            dispatch(fetchTodosSuccess(res.data));
            console.log(res.data)
        })
        .catch(err=>{
            dispatch(fetchTodosFailure(err.message))
        })
    }
}
export const changeCompletedCondition=(payload)=>{
    return{
        type:CHANGE_COMPLETED_CONDITION,
        payload
    }
};

export const addOneTodo=(payload)=>{
    return{
        type:ADD_ONE_TODO,
        payload
    }
};

export const removeOneTodo=(payload)=>{
    return{
        type:REMOVE_ONE_TODO,
        payload
    }
}