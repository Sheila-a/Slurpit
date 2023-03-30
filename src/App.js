import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import LSide from './layouts/Login-side';
import Login from './pages/Login/login';
import Signup from './pages/Signup/signup';
import Admindb from './pages/AdminDB/admindb';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/'/>
          <Route path='/login' element={<Login />}/>
          <Route path='/admin_dashboard' element={<Admindb />}/>
          <Route path='/signup' element={<Signup />}/>
          
      
      {/* <LSide/> */}

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
