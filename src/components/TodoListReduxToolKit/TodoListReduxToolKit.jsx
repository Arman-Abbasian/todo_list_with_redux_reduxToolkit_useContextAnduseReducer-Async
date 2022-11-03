import {useSelector,useDispatch} from 'react-redux';
import TodoRedux from '../TodoRedux/TodoRedux';
import styles from './todoListReduxToolKit.module.css';
import {changeCompletedConditionAsync, getAsyncTodos, removeAsyncTodos} from '../../features/todosSlice';
import { useEffect } from 'react';

const TodoListReduxToolKit = () => {
    const {todos,error,loading}=useSelector(state=>state.todos);
    console.log(todos)
    const dispatch=useDispatch();
    useEffect(()=>{dispatch(getAsyncTodos())},[])

    if( loading)  return <p>loading ...</p>
    if( error)  return <p>{error.message}</p>
    return ( 
        <div className={styles.container}>
            {todos.map(item=>{
                return <TodoRedux key={item.id} title={item.title} checkboxx={item.completed}
                onChengedCheck={(checkedd)=>dispatch(changeCompletedConditionAsync({id:item.id,title:item.title,completed:checkedd}))} 
                removeHandler={()=>dispatch(removeAsyncTodos(item.id))} />
            })}
        </div>
     );
}
 
export default TodoListReduxToolKit;