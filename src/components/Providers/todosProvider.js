import axios from "axios";
import { createContext, useContext, useReducer } from "react";

const TodoContext=createContext();
const TodoContextDispatcher=createContext();

const initialState={
    todos:[],
    loading:true,
    error:""
}

const reducer=(state=initialState,action)=>{

    switch (action.type) {
        case "loading":{
            console.log(state)
              return  {...state,todos:[],loading:true,error:""};    
        };
        case "success":{
            console.log(state)
            return  {...state,todos:action.payload,loading:false,error:""};    
      };
        case "error":{
            console.log(state)
            return  {...state,todos:[],loading:false,error:action.payload};    
  };
        case "changeCompletedCondition":{
            axios.put(`http://localhost:4000/todos/${action.payload.id}`,action.payload)
            .then(res=>console.log(res.data))
            .catch(err=>console.log(err.message));
            return  state;
        };
        case "addOneTodo":{
            axios.post(`http://localhost:4000/todos`,action.payload)
            .then(res=>{
                state.todos.push(res.data);
                console.log(state.todos)
                return {...state,todos:state.todos,loading:false,error:""}  
            })
            .catch(err=>console.log(err));
           return state
        };
        case "removeOneTodo":{
            axios.delete(`http://localhost:4000/todos/${action.payload}`)
            .then(res=>console.log(res.data))
            .catch(err=>console.log(err.message));
            console.log(state)
            return  {...state,todos:state.todos,loading:false,error:""};
        };     
        default:
            return state;
    }
} ;

const TodosProvider = ({children}) => {
    const [todos,dispatch]=useReducer(reducer,initialState)
    return ( 
        <TodoContext.Provider value={todos}>
            <TodoContextDispatcher.Provider value={dispatch}>
                {children}
            </TodoContextDispatcher.Provider>
        </TodoContext.Provider>
     );
}
 
export default TodosProvider;
export const useTodos=()=>useContext(TodoContext);
export const useTodoActions=()=>useContext(TodoContextDispatcher);