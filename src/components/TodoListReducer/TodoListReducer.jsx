import axios from 'axios';
import { useEffect } from 'react';
import { useTodoActions, useTodos } from '../Providers/todosProvider';
import TodoReducer from '../TodoReducer/TodoReducer';
import styles from './todoListReducer.module.css';



const TodoListReducer = () => {
    const todos=useTodos();
    const dispatch=useTodoActions();

    function reload(){
        dispatch({type:"loading"});
        axios.get(`http://localhost:4000/todos`)
        .then(res=>dispatch({type:"success",payload:res.data}))
        .catch(err=>dispatch({type:"error",payload:err.message}))
    }

    useEffect(()=>{
        dispatch({type:"loading"});
        axios.get(`http://localhost:4000/todos`)
        .then(res=>dispatch({type:"success",payload:res.data}))
        .catch(err=>dispatch({type:"error",payload:err.message}))
    },[]);

    const removeOneTodo=(id)=>{
        axios.delete(`http://localhost:4000/todos/${id}`)
        .then(res=>reload())
        .catch(err=>console.log(err.message))
    }

    if(todos.loading===true) return <p>loading</p>
    if(todos.error===false) return <p>{todos.error}</p>
    return ( 
        <div className={styles.container}>
            {todos.todos.map(item=>{
                return <TodoReducer key={item.id} title={item.title}
                onChangedCheck={(checkedd)=>dispatch({type:"changeCompletedCondition",payload:{id:item.id,checked:checkedd}})} 
                removeHandler={()=>removeOneTodo(item.id)} />
            })}
        </div>
     );
}
 
export default TodoListReducer;