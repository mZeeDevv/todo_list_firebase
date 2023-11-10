import React from "react";
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn"
import Main from "./pages/Main";
import Header from './components/Header'
import PrivateRoute from "./hook/PrivateRoute";
import Spinner from "./pages/Spinner";
import { ToastContainer } from "react-toastify";
function App() {
  

  return (
  <>
     <Router>
  <Header/>
   <Routes>
  <Route path="/todo_list_firebase" element={<SignIn/>}></Route>
  <Route path="/profile" element={<PrivateRoute/>}>
  <Route path="/profile" element={<Main/>}/>
  </Route>
  <Route path="/son" element={<Spinner/>}></Route>
  </Routes>
  </Router>

  </>
  );
}

export default App;
