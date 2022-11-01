import { useTodoActions, useTodos } from '../Providers/todosProvider';
import TodoReducer from '../TodoReducer/TodoReducer';
import styles from './todoListReducer.module.css';


const TodoListReducer = () => {
    const todos=useTodos();
    const dispatch=useTodoActions();

    return ( 
        <div className={styles.container}>
            {todos.todos.map(item=>{
                return <TodoReducer key={item.id} title={item.title}
                onChangedCheck={(checkedd)=>dispatch({type:"changeCompletedCondition",payload:{id:item.id,checked:checkedd}})} 
                removeHandler={()=>dispatch({type:"removeOneTodo",payload:item.id})} />
            })}
        </div>
     );
}
 
export default TodoListReducer;