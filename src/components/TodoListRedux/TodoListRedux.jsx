import {useSelector,useDispatch} from 'react-redux';
import TodoRedux from '../TodoRedux/TodoRedux';
import styles from './todoListRedux.module.css';
import {changeCompletedCondition, removeOneTodo} from '../../redux/todo/todoActions.js';

const TodoListRedux = () => {
    const todos=useSelector(state=>state.todos);
    const dispatch=useDispatch();
console.log(todos)
    return ( 
        <div className={styles.container}>
            {todos.todos.map(item=>{
                return <TodoRedux key={item.id} title={item.title}
                onChengedCheck={(checkedd)=>dispatch(changeCompletedCondition({id:item.id,checked:checkedd}))} 
                removeHandler={()=>dispatch(removeOneTodo(item.id))} />
            })}
        </div>
     );
}
 
export default TodoListRedux;