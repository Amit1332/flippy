import * as React from "react";
import { RouterProps } from "./interfaces/interfaces";

import { BrowserRouter, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import GuestRoute from "./common/GuestRoute";
import { Route } from "react-router-dom";
import Home from './pages/website/Home/Home';
import Shop from "./pages/website/Shop/Shop";
import ProductDetails from "./pages/website/ProductDetails/ProductDetails";
import AboutUs from "./pages/website/AboutUs/AboutUs";
import ContactUs from "./pages/website/ContactUs/ContactUs";
import Cart from "./pages/website/Cart/Cart";
import Checkout from "./pages/website/Checkout/Checkout";
import Payment from "./pages/website/Payment/Payment";
import Thankyou from "./pages/website/Thankyou/Thankyou";
import SupplierHome from "./pages/supplier/SupplierHome/SupplierHome";
import SupplierSignIn from "./pages/supplier/SignIn/SupplierSignIn";
import SupplierSignUp from "./pages/supplier/SignUp/SupplierSignUp";
import SupplierForgotPassword from "./pages/supplier/ForgotPassword/SupplierForgotPassword";
import SupplierResetPassword from "./pages/supplier/ResetPassword/SupplierResetPassword";
import SupplierAdmin from "./pages/supplier/Admin/SupplierAdmin";
import SupplierDashboard from "./pages/supplier/Admin/SupplierDashboard";
import SupplierAllProduct from "./pages/supplier/Admin/SupplierAllProduct";
import TestComponent from "./pages/website/TestComponent";
import NotFound from "./common/NotFound";
import WebsiteLayout from "./pages/website/WebsiteLayout";
import SupplierLayout from "./pages/supplier/SupplierLayout";
import SupplierAllOrder from "./pages/supplier/Admin/SupplierAllOrder";

// const privateRoutes: RouterProps[] = [
//   {
//     path: "/",
//     component: <Home />,
//     caseSensitive: true,
//   },
//   {
//     path: "/about-us",
//     component: <AboutUs />,
//     caseSensitive: true,
//   },
//   {
//     path: "/contact-us",
//     component: <ContactUs />,
//     caseSensitive: true,
//   },
//   {
//     path: "/shop",
//     component: <Shop />,
//     caseSensitive: true,
//   },
//   {
//     path: "/product-details",
//     component: <ProductDetails />,
//     caseSensitive: true,
//   },
//   {
//     path: "/cart",
//     component: <Cart />,
//     caseSensitive: true,
//   },
//   {
//     path: "/checkout",
//     component: <Checkout />,
//     caseSensitive: true,
//   },
//   {
//     path: "/payment",
//     component: <Payment />,
//     caseSensitive: true,
//   },
//   {
//     path: "/thankyou",
//     component: <Thankyou />,
//     caseSensitive: true,
//   },
//   {
//     path: "/test-component",
//     component: <TestComponent />,
//     caseSensitive: true,
//   },
//   {
//     path: "/supplier",
//     component: <SupplierHome />,
//     caseSensitive: true,
//   },
//   {
//     path: "/sign-in",
//     component: <SupplierSignIn />,
//     caseSensitive: true,
//   },
//   {
//     path: "/sign-up",
//     component: <SupplierSignUp />,
//     caseSensitive: true,
//   },
//   {
//     path: "/forgot-password",
//     component: <SupplierForgotPassword />,
//     caseSensitive: true,
//   },
//   {
//     path: "/reset-password",
//     component: <SupplierResetPassword />,
//     caseSensitive: true,
//   },
//   // {
//   //   path: "/supplier",
//   //   component: <Supplier />,
//   //   caseSensitive: true,
//   //   children: [
//   //     { path: '', element: <SupplierHome /> },
//   //     { path: '/sign-in', element: <SupplierSignIn /> },
//   //     { path: '/sign-up', element: <SupplierSignUp /> },
//   //   ],
//   // },
//   // {
//   //   path: "/supplier/admin",
//   //   component: <SupplierAdmin />,
//   //   caseSensitive: true,
//   //   children: [
//   //     { path: 'products', element: <SupplierAllProduct /> }
//   //   ],
//   // },
//   // {
//   //   path: "/products",
//   //   component: <SupplierAllProduct />,
//   //   caseSensitive: true,
//   // }

// ];

const AppRouter = (): JSX.Element => {

  const [sidebarOpen, setSidebarOpen] = React.useState<any>(false);
  // const loginFlag = localStorage.getItem("loginFlag") === null ? true : false;
  return (
    <Router>
      <React.Suspense
        fallback={<div className="lazy-loading">Loading...</div>}
      >
        {/* <Routes>

          {privateRoutes.map((route, i) => (
            <Route
              key={i}
              caseSensitive={route.caseSensitive}
              path={route.path}
              element={route.component} children={route.children}
            />
          ))}

          <Route path="*" element={<NotFound />} />
        </Routes> */}

        <Routes>
          <Route caseSensitive={true} path={'/'} element={<WebsiteLayout />} >
            <Route path="" element={<Home />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="shop" element={<Shop />} />
            <Route path="product-details" element={<ProductDetails />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="payment" element={<Payment />} />
            <Route path="thankyou" element={<Thankyou />} />
            <Route path="test-component" element={<TestComponent />} />

          </Route>
          <Route caseSensitive={true} path={'/supplier'} element={<SupplierLayout />} >
            <Route path="" element={<SupplierHome />} />
            <Route path="sign-in" element={<SupplierSignIn />} />
            <Route path="sign-up" element={<SupplierSignUp />} />
            <Route path="forgot-password" element={<SupplierForgotPassword />} />
            <Route path="reset-password" element={<SupplierResetPassword />} />
            <Route caseSensitive={true} path={'/supplier/admin'} element={<SupplierAdmin />} >
              <Route path="dashboard" element={<SupplierDashboard />} />
              <Route path="products" element={<SupplierAllProduct />} />
              <Route path="orders" element={<SupplierAllOrder />} />
            </Route>
          </Route>
        </Routes>
      </React.Suspense>
    </Router>
  );
};

export default AppRouter;
