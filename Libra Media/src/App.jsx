import { Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import Navbar from "./layout/Header/Navbar";
import Category from "./pages/Category/Category";
import Home from "./pages/Home/Home";
import Footer from "./layout/Footer/Footer";
import PageContainer from "./container/PageContainer";
import PageDetail from "./pages/Detail/PageDetail";
import Cart from "./pages/Cart/Cart";
import Maps from "./components/Maps";
import Wishllst from "./pages/Wishlist/Wishllst";
import CreditCard from "./components/CreditCard";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkAuthState } from "./redux/slice/authSlice";
import Profile from "./Profile/Profile";
import MyOrders from "./Profile/MyOrders";
import MyReturns from "./Profile/MyReturns";
import Check from "./components/Check";
import ShippingAddress from "./pages/Shipping/ShippingAddress";
import OrderDetail from "./Profile/OrderDetail";
import PersonalInformation from "./Profile/PersonalInformation";
import FilterBar from "./components/FilterBar";
import Addresses from "./Profile/Addresses";
import LanguageSelector from "./Profile/LanguageSelector";
import Forgot from "./registration/Forgot";
import VerifyOtp from "./registration/VerifyOtp";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

function App() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.basket.cart);

  useEffect(() => {
    dispatch(checkAuthState());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <PageContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<PageDetail />} />
          <Route path="/category" element={<Category />} />
          <Route path="/like" element={<Wishllst />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/map" element={<Maps />} />
          <Route path="/credit" element={<CreditCard />} />
          <Route path="/shipping" element={<ShippingAddress />} />
          <Route path="/filter" element={<FilterBar />} />
          <Route path="/profil" element={<Profile />}>
            <Route path="myorder" element={<MyOrders />} />
            <Route path="myreturn" element={<MyReturns />} />
            <Route path="information" element={<PersonalInformation />} />
            <Route path="address" element={<Addresses />} />
            <Route path="language" element={<LanguageSelector />} />
          </Route>
          <Route path="/orderdetail" element={<OrderDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/otp" element={<VerifyOtp />} />
        </Routes>
      </PageContainer>
      {/* <Check item={cartItems} /> */}
      <Footer />
    </>
  );
}

export default App;
