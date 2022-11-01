import { createSlice,current } from '@reduxjs/toolkit'

const initialState = {
  todos:[
    {id:1,title:"work1",completed:false},
    {id:2,title:"work2",completed:false},
    {id:3,title:"work3",completed:false},
  ]
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addOneTodo: (state,action) => {
      state.todos.push(action.payload)
    },
    changeCompletedCondition:(state,action)=>{
       const findedItem= state.todos.find(item=>item.id===action.payload.id);
       findedItem.completed=action.payload.checked;
    },
    removeOneTodo:(state,action)=>{
        const filterItems=state.todos.filter(item=>item.id!==action.payload);
        state.todos=filterItems;
  }
  },
})

// Action creators are generated for each case reducer function
export const { addOneTodo,changeCompletedCondition,removeOneTodo} = todoSlice.actions

export default todoSlice.reducer