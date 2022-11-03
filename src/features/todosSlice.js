import { createSlice,current,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const getAsyncTodos=createAsyncThunk("todos/getAsyncTodos", async (_,{rejectWithValue})=>{
  try {
    const response=await axios.get(`http://localhost:4000/todos`);
    return response.data;
  } catch (error) {
    return rejectWithValue([],error)
  }
});
export const addAsyncTodos=createAsyncThunk("todos/addAsyncTodos", async (payload,{rejectWithValue})=>{
  try {
    const response=await axios.post(`http://localhost:4000/todos`,payload);
    return response.data;
  } catch (error) {
    return rejectWithValue([],error)
  }
});
export const removeAsyncTodos=createAsyncThunk("todos/removeAsyncTodos", async (payload,{rejectWithValue})=>{
  try {
    await axios.delete(`http://localhost:4000/todos/${payload}`);
    return payload;
  } catch (error) {
    return rejectWithValue([],error)
  }
});
export const changeCompletedConditionAsync=createAsyncThunk("todos/changeCompletedCondition", async (payload,{rejectWithValue})=>{
  try {
    const response=await axios.put(`http://localhost:4000/todos/${payload.id}`,payload);
    return response.data;
  } catch (error) {
    return rejectWithValue([],error)
  }
});

const initialState = {
  todos:[],
  error:null,
  loading:false
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  // reducers: {
  //   addOneTodo: (state,action) => {
  //     state.todos.push(action.payload)
  //   },
  //   changeCompletedCondition:(state,action)=>{
  //      const findedItem= state.todos.find(item=>item.id===action.payload.id);
  //      findedItem.completed=action.payload.checked;
  //   },
  //   removeOneTodo:(state,action)=>{
  //       const filterItems=state.todos.filter(item=>item.id!==action.payload);
  //       state.todos=filterItems;
  // }
  // },
  
  extraReducers:{
  
    [getAsyncTodos.fulfilled]: (state,action) => {
      return {...state,todos:action.payload,loading:false,error:null}
    },
    [getAsyncTodos.pending]: (state,action) => {
      return {...state,todos:[],loading:true,error:null}
    },
    [getAsyncTodos.rejected]: (state,action) => {
      return {...state,todos:[],loading:false,error:action.payload}
    },

    [changeCompletedConditionAsync.fulfilled]: (state,action) => {
      const selectedTodo=state.todos.find(item=>item.id===action.payload.id);
      selectedTodo.completed=action.payload.completed;
    },
    [addAsyncTodos.fulfilled]: (state,action) => {
      state.todos.push(action.payload)
    },

    [removeAsyncTodos.fulfilled]: (state,action) => {
      const remainedTodos=state.todos.filter(item=>item.id !== action.payload);
      return {...state,todos:remainedTodos,loading:false,error:null}
      
    },
  }
})

// Action creators are generated for each case reducer function
export const { addOneTodo,changeCompletedCondition,removeOneTodo} = todoSlice.actions

export default todoSlice.reducer