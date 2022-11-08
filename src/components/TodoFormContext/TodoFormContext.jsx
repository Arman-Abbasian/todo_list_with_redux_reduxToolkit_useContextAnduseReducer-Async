import axios from "axios";
import { useState } from "react";
import { useTodoActions, useTodos } from "../Providers/todosContextProvider";
import styles from './todoFormContext.module.css';

const TodoFormContext = () => {
    const [inputVal,setInputVal]=useState("");
    const todos=useTodos();

    const dispatch=useTodoActions();
    const {addOneTodo}=useTodoActions();


    const changeHandler=(e)=>{
        setInputVal(e.target.value)
    }
    const addTodoHandler=()=>{
     const todo= {id:Date.now(),title:inputVal,completed:false};
     setInputVal("");
     addOneTodo(todo)
    
    }

    return ( 
        <div>
            <input type="text" value={inputVal} onChange={changeHandler} />
            <button onClick={addTodoHandler} className={styles.button}>Add</button>
        </div>
     );
}
 
export default TodoFormContext;