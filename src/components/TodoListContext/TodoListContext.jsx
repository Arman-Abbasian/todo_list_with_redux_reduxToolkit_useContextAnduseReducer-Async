import axios from 'axios';
import { useEffect } from 'react';
import { useTodoActions, useTodos } from '../Providers/todosContextProvider';
import TodoContext from '../TodoContext/TodoContext';
import styles from './todoListContext.module.css';



const TodoListContext = () => {
    const todos=useTodos();
    const {initialLoading,changeCompletedCondition,removeOneTodo}=useTodoActions();


    useEffect(()=>{
       initialLoading();
    },[]);

    const removeOneTodoo=(id)=>{
        removeOneTodo(id);
    }
    const todoCompleteCondition=(id,title,checked)=>{
        changeCompletedCondition({id,title,checked});
    }
    if(todos.loading===true) return <p>loading</p>
    if(todos.error===false) return <p>{todos.error}</p>
    return ( 
        <div className={styles.container}>
            {todos.todos.map(item=>{
                return <TodoContext key={item.id} title={item.title} checked={item.checked}
                onChangedCheck={(checked)=>todoCompleteCondition(item.id,item.title,checked)} 
                removeHandler={()=>removeOneTodoo(item.id)} />
            })}
        </div>
     );
}
 
export default TodoListContext;