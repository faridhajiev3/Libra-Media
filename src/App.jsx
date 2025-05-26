import { Route, Routes } from "react-router-dom";
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
import Profile from "./Profile/Profile";
import MyOrders from "./Profile/MyOrder";
import Addresses from "./pages/Addresses/Addresses";
import OrderDetail from "./Profile/OrderDetail";
import Language from "./pages/Language/Language";
import MyReturns from "./Profile/MyReturns";
import MyPayment from "./pages/MyPayment/MyPayment";
import PersonalInfo from "./pages/PersonalInformation/PersonalInfo";
import TermsCondition from "./pages/TermsCondition/TermsConditions";
import LogoutPage from "./pages/Logout/Logout";

function App() {
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
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/order/:id" element={<OrderDetail />} />
          <Route path="/my-returns" element={<MyReturns />} />
          <Route path="/personal-info" element={<PersonalInfo />} />
          <Route path="/payment-methods" element={<MyPayment />} />
          <Route path="/addresses" element={<Addresses />} />
          <Route path="/terms" element={<TermsCondition />} />
          <Route path="/language" element={<Language />} />
          <Route path="/logout" element={<LogoutPage />} />
        </Routes>
      </PageContainer>
      <Footer />
    </>
  );
}

export default App;
