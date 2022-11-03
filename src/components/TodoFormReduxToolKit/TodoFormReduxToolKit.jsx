import { useState } from "react";
import {useSelector,useDispatch} from 'react-redux'
import { addAsyncTodos, addOneTodo } from "../../features/todosSlice";
import styles from './todoFormReduxToolKit.module.css';

const TodoFormReduxToolKit = () => {
    const [inputVal,setInputVal]=useState("");
    const todos=useSelector(state=>state.todos.todos);
    const dispatch=useDispatch();

    const changeHandler=(e)=>{
        setInputVal(e.target.value)
    }
    const addTodoHandler=()=>{
     const todo= {id:Date.now(),title:inputVal,completed:false};
     setInputVal("")
     dispatch(addAsyncTodos(todo))
     
    }
    return ( 
        <div>
            <input type="text" value={inputVal} onChange={changeHandler} />
            <button onClick={addTodoHandler} className={styles.button}>Add</button>
        </div>
     );
}
 
export default TodoFormReduxToolKit;