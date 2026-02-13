import Register from "./views/user/register.jsx";
import Navbar from "./views/layouts/Navbar.jsx";
import { Routes, Route,Link } from 'react-router-dom'
import './style/App.css';


function App(){
   return(
   <div className="app">
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
   );
}

export default App;