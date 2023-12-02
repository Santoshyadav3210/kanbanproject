import { createStore } from 'redux';
import taskReducer from './reducers/taskReducer'; // Your task reducer


const store = createStore(taskReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
// import { createStore } from 'redux';
// import taskReducer from './reducers/taskReducer'; // Your task reducer

// const initialState = {
//   tasks: [], // Initial empty tasks array
//   error: null, // To store error message if any
// };

// const loadState = () => {
//   try {
//     const serializedState = localStorage.getItem('reduxState');
//     if (serializedState === null) {
//       return initialState; // Return initial state if no persisted state found
//     }
//     return JSON.parse(serializedState);
//   } catch (err) {
//     return initialState; // Return initial state in case of any error
//   }
// };

// const saveState = (state) => {
//   try {
//     const serializedState = JSON.stringify(state);
//     localStorage.setItem('reduxState', serializedState);
//   } catch (err) {
//     // Handle errors, if any
//   }
// };

// const persistedState = loadState();

// const store = createStore(
//   taskReducer,
//   persistedState,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// store.subscribe(() => {
//   saveState(store.getState());
// });

// export default store;
