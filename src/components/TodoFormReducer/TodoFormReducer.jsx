import axios from "axios";
import { useState } from "react";
import { useTodoActions, useTodos } from "../Providers/todosProvider";
import styles from './todoFormReducer.module.css';

const TodoFormReducer = () => {
    const [inputVal,setInputVal]=useState("");
    const todos=useTodos();
    const dispatch=useTodoActions();
    
    function reload(){
        dispatch({type:"loading"});
        axios.get(`http://localhost:4000/todos`)
        .then(res=>{
        dispatch({type:"success",payload:res.data});
     })
     .catch(err=>dispatch({type:"error",payload:err.message}));
    }

    const changeHandler=(e)=>{
        setInputVal(e.target.value)
    }
    const addTodoHandler=()=>{
     const todo= {id:Date.now(),title:inputVal,completed:false};
     setInputVal("")
    axios.post(`http://localhost:4000/todos`,todo)
    .then(res=>{
        reload();
    })
    .catch(err=>console.log(err.message))
    }

    return ( 
        <div>
            <input type="text" value={inputVal} onChange={changeHandler} />
            <button onClick={addTodoHandler} className={styles.button}>Add</button>
        </div>
     );
}
 
export default TodoFormReducer;