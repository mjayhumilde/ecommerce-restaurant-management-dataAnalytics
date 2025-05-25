import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import Layout from "./components/Layout";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import ProfilePage from "./pages/ProfilePage";
import PurchasePage from "./pages/PurchasePage";
import ForgotPassword from "./pages/ForgotPassword";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import DashBoredPage from "./pages/DashBoredPage";
import ManageAccountsPage from "./pages/ManageAccountsPage";
import OrdersPage from "./pages/OrdersPage";
import StaffUIPage from "./pages/StaffUIPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProductPage />} />
          <Route path="products" element={<ProductPage />} />
          <Route path="product-details" element={<ProductDetailsPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="purchase" element={<PurchasePage />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />

          {/* admin routes */}

          <Route path="dashboard" element={<DashBoredPage />} />
          <Route path="manage-accounts" element={<ManageAccountsPage />} />
          <Route path="orders" element={<OrdersPage />} />
        </Route>
        <Route path="staff/order-management" element={<StaffUIPage />} />
      </Routes>
    </Router>
  );
};

export default App;
