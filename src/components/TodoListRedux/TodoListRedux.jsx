import {useSelector,useDispatch} from 'react-redux';
import TodoRedux from '../TodoRedux/TodoRedux';
import styles from './todoListRedux.module.css';
import {changeCompletedCondition, fetchTodos, removeOneTodo} from '../../redux/todo/todoActions.js';
import { useEffect } from 'react';

const TodoListRedux = () => {
    const todos=useSelector(state=>state.todos);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchTodos());
    },[]);
    const removeTodo=(id)=>{
        dispatch(removeOneTodo(id));
        dispatch(fetchTodos())
    }
    const completeChangeItem=(data)=>{
        dispatch(changeCompletedCondition(data));
        dispatch(fetchTodos())
    }
console.log(todos);
if(todos.loading) return <p>loading...</p>
if(todos.error!=='') return <p>{todos.error}</p>
console.log(todos.todos)
    return ( 
        <div className={styles.container}>
            {todos.todos.map(item=>{
                return <TodoRedux key={item.id} title={item.title} checkboxx={item.checked}
                onChangedCheck={()=>completeChangeItem({id:item.id,title:item.title,checked:!item.checked})} 
                removeHandler={()=>removeTodo(item.id)} />
            })}
        </div>
     );
}
 
export default TodoListRedux;