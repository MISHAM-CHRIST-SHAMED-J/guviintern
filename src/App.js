import './App.css';
import Login from './components/Login';
import Portal from './components/Portal';
import Register from './components/Register';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Profile from './components/Profile';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Register />}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/portal" element={<Portal/>}>
      <Route path="profile" element={<Profile/>}/>
        </Route>
    </Routes>
  </BrowserRouter>  
  );
}

export default App;
