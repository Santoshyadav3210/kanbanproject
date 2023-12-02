import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import DashBoard from "./components/DashBoard/DashBoard";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskForm from "./components/TaskForm/TaskForm";


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/registration" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/dashboard" element={<DashBoard/>} />
            <Route path="/taskManagement" element={<TaskForm/>} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
