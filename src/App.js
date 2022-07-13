import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Pages/LoginPage';
import SuccessAnimation from "./components/SuccessAnimation/SuccessAnimation";
import TOS from "./components/TosAndPrivacyPolicy/TOS";
import Dashboard from './Pages/Dashboard';
import Homepage from './components/Homepage/Homepage';
import Category from './components/Category/Category';
import CategoryDetails from './components/CategoryDetails/CategoryDetails';
import Product from './components/Product/Product';
import CreateListing from './Pages/CreateListing';
import CreateListingCard from './components/CreateListingCard/CreateListingCard';
import UploadImageModal from './components/UploadImageModal/UploadImageModal';
import Account from './Pages/AccountInformation';
import AccountInfo from './components/AccountInfo';
import ChangePassword from './components/ChangePassword/ChangePassword';
import MyListings from './Pages/MyListings';
import MyListingDetails from './components/MyListingDetails/MyListingDetails';
import Dummydata from "./dummyData.json";
import MyListingEdit from './components/MyListingEdit/MyListingEdit';
import MyPurchase from './Pages/MyPurchase';
import MyPurchases from './components/MyPurchases/MyPurchases';
import PickUpInformation from './components/PickUpInformation/PickUpInformation';
import ProductDetails from './components/ProductDetails/ProductDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" exact element={<Login />} />
        <Route path="/home" element={<Dashboard />}>
          <Route index element={<Homepage />} />
          <Route path="category" element={<Category />}>
            <Route index element={<CategoryDetails />} />
            <Route path="product" element={<Product />}>
              <Route index element={<ProductDetails />} />
              <Route path="checkout" element={<PickUpInformation checkout={false} />} />
              <Route path="pickup-information" element={<PickUpInformation checkout={true} />} />

            </Route>
          </Route>
        </Route>
        <Route path="/create-listing" element={<CreateListing />} >
          <Route index element={<CreateListingCard />} />
          <Route path="upload-images" element={<UploadImageModal />} />
        </Route>
        <Route path="/account" element={<Account />}>
          <Route index element={<AccountInfo />} />
          <Route path='change-password' element={<ChangePassword />} />
        </Route>
        <Route path="/my-listings" element={<MyListings />}>
          <Route index element={<MyListingDetails data={Dummydata} />} />
          <Route path='mylistingEdit' element={<MyListingEdit />} />
        </Route>
        <Route path="/my-purchases" element={<MyPurchase />}>
          <Route index element={<MyPurchases />} />
          <Route path='pickupInfo' element={<PickUpInformation />} />
        </Route>
        <Route path="/success" element={<SuccessAnimation />} />
        <Route path="/terms-and-services" element={<TOS content="TOS" />} />
        <Route path="/privacy-policy" element={<TOS content="PP" />} />
      </Routes>
    </Router>
  );
}

export default App;
