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
              return  {...state,todos:[],loading:true,error:""};    
        };
        case "success":{
            return  {...state,todos:action.payload,loading:false,error:""};    
      };
      case "error":{
        return  {...state,todos:[],loading:false,error:action.payload};    
  };
        case "changeCompletedCondition":{
            console.log(action.payload)
            const findedIndex=state.todos.findIndex(item=>item.id===action.payload.id);
            const cloneObject={...state.todos[findedIndex]};
            cloneObject.completed=action.payload.checked
            const cloneArray=[...state.todos];
            cloneArray[findedIndex]=cloneObject;
            const newState={...state,todos:cloneArray}
            return newState;
        };
        case "addOneTodo":{
            axios.post(`http://localhost:4000/todos`,action.payload)
            .then(res=> state)
            .catch(err=>state)
            return state;
        };
        case "removeOneTodo":{
            axios.delete(`http://localhost:4000/todos/${action.payload}`)
            .then(res=>console.log(res.data))
            .catch(err=>console.log(err.message))
            return state;
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