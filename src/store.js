import { createStore } from 'redux';
import taskReducer from './reducers/taskReducer'; // Your task reducer


const store = createStore(taskReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
