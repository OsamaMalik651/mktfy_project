import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import './App.css';
import Login from './Pages/LoginPage';
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
import FAQ from './Pages/FAQ';
import { AuthContextProvider } from './context/auth-context';
import LoginModal from './components/LoginModal/LoginModal';
import ForgetPWModal from './components/ForgetPasswordModal/ForgetPWModal';
import CreateAccountModal from './components/CreateAccountModal/CreateAccountModal';
import ResetPWModal from './components/ResetPasswordModal/ResetPWModal';
import ProtectedRoute from './utils/ProtectedRoute';
import WithAxios from './utils/WithAxios';

function App() {
  return (
    <AuthContextProvider>
      <WithAxios>
        <Router>
          <Routes>
            <Route path="/" exact element={<Login />}>
              <Route path="login" element={<LoginModal />} />
              <Route path="forgetpassword" element={<ForgetPWModal modalType="forget" />} />
              <Route path="resetpassword" element={<ForgetPWModal modalType="reset" />} />
              <Route path="signup" element={<CreateAccountModal />} />
              <Route path="createPassword" element={<ResetPWModal create={true} />} />
            </Route>
            <Route path="home" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }>
              <Route index element={<Homepage />} />
              <Route path=":category" exact element={<Category />}>
                <Route index element={<CategoryDetails />} />
                <Route path="product" element={<Product />}>
                  <Route path=":productID" element={<ProductDetails />} />
                  <Route path="checkout" element={<PickUpInformation checkout={false} />} />
                  <Route path="pickup-information" element={<PickUpInformation checkout={true} />} />
                </Route>
              </Route>

              <Route path="create-listing" element={<CreateListing />} >
                <Route index element={<CreateListingCard />} />
                <Route path="upload-images" element={<UploadImageModal />} />
              </Route>
              <Route path="account" element={<Account />}>
                <Route index element={<AccountInfo />} />
                <Route path='change-password' element={<ChangePassword />} />
              </Route>
              <Route path="my-listings" element={<MyListings />}>
                <Route index element={<MyListingDetails data={Dummydata} />} />
                <Route path='mylistingEdit' element={<MyListingEdit />} />
              </Route>
              <Route path="my-purchases" element={<MyPurchase />}>
                <Route index element={<MyPurchases />} />
                <Route path='pickupInfo' element={<PickUpInformation />} />
              </Route>
              <Route path="faq" element={<FAQ />} />
            </Route>
            <Route path="/terms-and-services" element={<TOS content="TOS" />} />
            <Route path="/privacy-policy" element={<TOS content="PP" />} />
            {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
          </Routes>
        </Router>
      </WithAxios>
    </AuthContextProvider>
  );
}

export default App;
