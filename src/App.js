import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Pages/LoginPage/Login';
import SuccessAnimation from "./components/SuccessAnimation/SuccessAnimation";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" exact element={<Login />} />
        <Route path="/success" element={<SuccessAnimation />} />

      </Routes>
    </Router>
  );
}

export default App;
