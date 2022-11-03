import { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { getAsyncTodos } from '../../features/todosSlice';

const TodoTotalReduxToolKit = () => {
    const todos=useSelector(state=>state.todos.todos);
 
    const count=()=>{
      const filteredItems= todos.filter(item=>item.completed===true);
      return filteredItems.length
    }
    return ( 
        <div className='flex gap-1'>
          <p>total number of completed todos:</p>
          <p>{count()}</p>
        </div>
     );
}
 
export default TodoTotalReduxToolKit;