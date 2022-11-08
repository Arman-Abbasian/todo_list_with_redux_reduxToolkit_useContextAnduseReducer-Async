import {useTodos} from '../Providers/todosProvider'

const TodoTotalReducer = () => {
    const todos=useTodos()
    const count=()=>{
      const filteredItems= todos.todos.filter(item=>item.checked===true);
      return filteredItems.length
    }
    return ( 
        <div className='flex gap-1'>
            <p>total number of completed todos:</p>
            <p>{count()}</p>
        </div>
     );
}
 
export default TodoTotalReducer;