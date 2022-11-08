import axios from "axios";
import { useState } from "react";
import { useTodoActions, useTodos } from "../Providers/todosProvider";
import styles from './todoFormReducer.module.css';

const TodoFormReducer = () => {
    const [inputVal,setInputVal]=useState("");
    const todos=useTodos();
    const dispatch=useTodoActions();

    const changeHandler=(e)=>{
        setInputVal(e.target.value)
    }
    const addTodoHandler=()=>{
     const todo= {id:Date.now(),title:inputVal,completed:false};
     setInputVal("")
     dispatch({type:"addOneTodo",payload:todo});
     dispatch({type:"loading"});
     axios.get(`http://localhost:4000/todos`)
     .then(res=>{
        dispatch({type:"success",payload:res.data});
        console.log(todos)
     })
     .catch(err=>dispatch({type:"error",payload:err.message}));
     console.log(todos)
     
    }
    return ( 
        <div>
            <input type="text" value={inputVal} onChange={changeHandler} />
            <button onClick={addTodoHandler} className={styles.button}>Add</button>
        </div>
     );
}
 
export default TodoFormReducer;