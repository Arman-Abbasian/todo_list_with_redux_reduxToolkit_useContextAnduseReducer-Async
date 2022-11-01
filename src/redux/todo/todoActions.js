import { ADD_ONE_TODO, CHANGE_COMPLETED_CONDITION, REMOVE_ONE_TODO } from "./todoTypes"

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