import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Pages/LoginPage/Login';
import SuccessAnimation from "./components/SuccessAnimation/SuccessAnimation";
import TOS from "./components/TosAndPrivacyPolicy/TOS";
import Dashboard from './Pages/Dashboard/Dashboard';
import Homepage from './components/Homepage/Homepage';
import Category from './components/Category/Category';
import CategoryDetails from './components/CategoryDetails/CategoryDetails';
import Product from './components/Product/Product';
import CreateListing from './Pages/CreateListing/CreateListing';
import CreateListingCard from './components/CreateListingCard/CreateListingCard';
import UploadImageModal from './components/UploadImageModal/UploadImageModal';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" exact element={<Login />} />
        <Route path="/home" element={<Dashboard />}>
          <Route index element={<Homepage />} />
          <Route path="category" element={<Category />}>
            <Route index element={<CategoryDetails />} />
            <Route path="product" element={<Product />} />
          </Route>
        </Route>
        <Route path="/create-listing" element={<CreateListing />} >
          <Route index element={<CreateListingCard />} />
          <Route path="upload-images" element={<UploadImageModal />} />
        </Route>
        <Route path="/success" element={<SuccessAnimation />} />
        <Route path="/terms-and-services" element={<TOS content="TOS" />} />
        <Route path="/privacy-policy" element={<TOS content="PP" />} />
      </Routes>
    </Router>
  );
}

export default App;
