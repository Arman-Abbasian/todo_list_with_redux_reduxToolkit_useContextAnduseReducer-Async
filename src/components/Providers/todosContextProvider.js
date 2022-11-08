import axios from "axios";
import { useState } from "react";
import { createContext, useContext, useReducer } from "react";

const TodoContext=createContext();
const TodoContextDispatcher=createContext();


const TodosContextProvider = ({children}) => {
    const [todos,setTodos]=useState({todos:[],loading:false,error:""})
    return ( 
        <TodoContext.Provider value={todos}>
            <TodoContextDispatcher.Provider value={setTodos}>
                {children}
            </TodoContextDispatcher.Provider>
        </TodoContext.Provider>
     );
}
 
export default TodosContextProvider;
export const useTodos=()=>useContext(TodoContext);
export const useTodoActions=()=>{
    const todos=useTodos();
    const setTodos=useContext(TodoContextDispatcher);

    const initialLoading=()=>{
        setTodos({...todos,todos:[],loading:true,error:""})
        axios.get(`http://localhost:4000/todos`)
        .then(res=>setTodos({...todos,todos:res.data,loading:false,error:""}))
        .catch(err=>setTodos({...todos,todos:[],loading:false,error:err.message}));
    }
     
        const changeCompletedCondition=(payload)=>{
            axios.put(`http://localhost:4000/todos/${payload.id}`,payload)
            .then(res=>initialLoading())
            .catch(err=>console.log(err.message));
        };
        const  addOneTodo=(payload)=>{
            axios.post(`http://localhost:4000/todos`,payload)
            .then(res=>initialLoading())
            .catch(err=>console.log(err.message));
        };
        const removeOneTodo=(id)=>{
            axios.delete(`http://localhost:4000/todos/${id}`)
            .then(res=>initialLoading())
            .catch(err=>console.log(err.message));
        };     
        
            return {initialLoading,changeCompletedCondition,addOneTodo,removeOneTodo};
    }