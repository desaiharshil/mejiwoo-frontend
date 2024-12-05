import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './Mejiwoo/MainPage';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import AdminPanel from './Mejiwoo/AdminPanel';
import Singup from './Mejiwoo/Singup';
import Login from './Mejiwoo/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>



  );
}

export default App;
