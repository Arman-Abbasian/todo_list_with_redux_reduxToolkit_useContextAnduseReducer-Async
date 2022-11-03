import {useSelector,useDispatch} from 'react-redux';
import TodoRedux from '../TodoRedux/TodoRedux';
import styles from './todoListRedux.module.css';
import {changeCompletedCondition, fetchTodos, removeOneTodo} from '../../redux/todo/todoActions.js';
import { useEffect } from 'react';

const TodoListRedux = () => {
    const todos=useSelector(state=>state.todos);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchTodos())
    },[])
console.log(todos);
if(todos.loading) return <p>loading...</p>
if(todos.error!=='') return <p>{todos.error}</p>
    return ( 
        <div className={styles.container}>
            {todos.todos.map(item=>{
                return <TodoRedux key={item.id} title={item.title} checkboxx={item.completed}
                onChangedCheck={()=>dispatch(changeCompletedCondition({id:item.id,title:item.title,checked:!item.completed}))} 
                removeHandler={()=>dispatch(removeOneTodo(item.id))} />
            })}
        </div>
     );
}
 
export default TodoListRedux;