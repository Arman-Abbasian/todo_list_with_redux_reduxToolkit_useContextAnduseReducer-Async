import { createContext, useContext, useReducer } from "react";

const TodoContext=createContext();
const TodoContextDispatcher=createContext();

const initialState={
    todos:[
        {id:1,title:"work1",completed:false},
        {id:2,title:"work2",completed:false},
        {id:3,title:"work3",completed:false},
    ]
}

const reducer=(state,action)=>{
    switch (action.type) {
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
            const cloneArray=[...state.todos];
            cloneArray.push(action.payload);
            const newState={...state,todos:cloneArray}
            return newState;
        };
        case "removeOneTodo":{
            console.log(action.payload)
            const remainedTodos=state.todos.filter(item=>item.id!==action.payload);
            const newState={...state,todos:remainedTodos}
            return newState;
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