import {useSelector} from 'react-redux';

const TodoTotalRedux = () => {
    const todos=useSelector(state=>state.todos.todos);
    console.log(todos);
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
 
export default TodoTotalRedux;