import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Pages/LoginPage/Login';
import SuccessAnimation from "./components/SuccessAnimation/SuccessAnimation";
import TOS from "./components/TosAndPrivacyPolicy/TOS";
import Dashboard from './Pages/Dashboard/Dashboard';
import Homepage from './components/Homepage/Homepage';
import Category from './components/Category/Category';
import CategoryDetails from './components/CategoryDetails/CategoryDetails';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" exact element={<Login />} />
        <Route path="/home" element={<Dashboard />}>
          <Route index element={<Homepage />} />
          <Route path="category" element={<Category />}>
            <Route index element={<CategoryDetails />} />

          </Route>
        </Route>
        <Route path="/success" element={<SuccessAnimation />} />
        <Route path="/terms-and-services" element={<TOS content="TOS" />} />
        <Route path="/privacy-policy" element={<TOS content="PP" />} />
      </Routes>
    </Router>
  );
}

export default App;
