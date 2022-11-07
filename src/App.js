import React from "react";
import  ReactDOM  from "react-dom";
import { Provider } from "react-redux";

//import {store} from './features/store';
import TodoFormReduxToolkit from './components/TodoFormReduxToolKit/TodoFormReduxToolKit';
import TodoTotalReduxToolKit from "./components/TodoTotalReduxToolKit/TodoTotalReduxToolKit";
import TodoListReduxToolKit from "./components/TodoListReduxToolKit/TodoListReduxToolKit";


import store from './redux/store';
import TodoFormRedux from './components/TodoFormRedux/TodoFormRedux';
import TodoTotalRedux from "./components/TodoTotalRedux/TodoTotalRedux";
import TodoListRedux from "./components/TodoListRedux/TodoListRedux";


import TodoTotalReducer from './components/TodoTotalReducer/TodoTotalReducer';
import TodoListReducer from "./components/TodoListReducer/TodoListReducer";
import TodosProvider from "./components/Providers/todosProvider";
import TodoFormReducer from "./components/TodoFormReducer/TodoFormReducer";




function App() {
  return(
    // <Provider store={store}>
    //   <div className="flex justify-between items-center">
    //   <TodoFormRedux />
    //   <TodoTotalRedux />
    //   </div>
    //   <TodoListRedux />
    // </Provider>

    // <Provider store={store}>
    //   <div className="flex justify-between items-center">
    //     <TodoFormReduxToolkit />
    //     <TodoTotalReduxToolKit />
    //   </div>
    //   <TodoListReduxToolKit />
    // </Provider>

    <TodosProvider>
      <div className="flex justify-between items-center">
       <TodoFormReducer />
       <TodoTotalReducer />
      </div>
      <TodoListReducer />
    </TodosProvider>
  )
}

export default App;
