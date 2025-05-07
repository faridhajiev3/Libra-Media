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
        </Routes>
      </PageContainer>
      <Footer />
    </>
  );
}

export default App;

