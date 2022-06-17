import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Pages/LoginPage/Login';
import SuccessAnimation from "./components/SuccessAnimation/SuccessAnimation";
import TOS from "./components/TosAndPrivacyPolicy/TOS";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" exact element={<Login />} />
        <Route path="/success" element={<SuccessAnimation />} />
        <Route path="/terms-and-services" element={<TOS content="TOS" />} />
        <Route path="/privacy-policy" element={<TOS content="PP" />} />
      </Routes>
    </Router>
  );
}

export default App;
