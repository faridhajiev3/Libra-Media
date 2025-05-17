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
import Login from "./pages/Login/login";
import SignUp from "./pages/SignUp/SignUp";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkAuthState } from "./redux/slice/authSlice";
import Profile from "./Profile/Profile";
import MyOrders from "./Profile/MyOrders";
import MyReturns from "./Profile/MyReturns";
import Check from "./components/Check";

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
      <PageContainer>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<PageDetail />} />
          <Route path="/category" element={<Category />} />
          <Route path="/like" element={<Wishllst />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/map" element={<Maps />} />
          <Route path="/credit" element={<CreditCard />} />
          <Route path="/profil" element={<Profile />}>
            <Route index element={<MyOrders />} />
            <Route path="myorder" element={<MyOrders />} />
            <Route path="myreturn" element={<MyReturns />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </PageContainer>
      <Check item={cartItems}/>
      <Footer />
    </>
  );
}

export default App;
