import { createBrowserRouter, RouterProvider } from "react-router";
// import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "../pages/home/HomePage";
import ForgetPassword from "../pages/auth/ForgetPassword";
import NotFound from "../pages/error/NotFound";

const routerData = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/forget-password", Component: ForgetPassword },
  // Layout 
  // Design a dahsboard page for a POS applicaiton 
  // path: '/admin/dashboard'

  // path:'/reset-password'
  // path: '/admin/products'
  // path: '/admin/products/create'
  // path: '/admin/order/create'
  // path: '/admin/order'
  // path: '/admin/order/payment'

  // Design a 404 not found page
  { path: "*", element: <NotFound /> },
]);


export default function RouterConfig() {
  return (
    <RouterProvider router={routerData} />
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<HomePage />}></Route>
    //     <Route path="/forget-password" Component={ForgetPassword} />
    //     <Route path="*" element={<NotFound />} />
    //   </Routes>
    //   <Routes>
    //     <Route path="/" element={<HomePage />}></Route>
    //     <Route path="/forget-password" Component={ForgetPassword} />
    //   </Routes>
    // </BrowserRouter>
  );
}