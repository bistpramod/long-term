import { createBrowserRouter, RouterProvider } from "react-router";
// import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "../pages/home/HomePage";
import ForgetPassword from "../pages/auth/ForgetPassword";
import NotFound from "../pages/error/NotFound";
import UserList from "../pages/admin/user/UserList";
import AdminLayout from "../pages/layouts/AdminLayout";
import AdminDashboard from "../pages/admin/Dashboard";
import UserLayout from "../pages/layouts/UserLayout";
import UserDashboard from "../pages/user/UserDashboard";
import UserProfile from "../pages/user/UserProfile";
import UserRegister from "../pages/admin/user/UserRegister";

const routerData = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/forget-password", Component: ForgetPassword },

  { path: "/admin", element: <AdminLayout />, children: [
    { index: true, Component: AdminDashboard},
    
    { path: "users", element: <UserList />} ,   // user listing table 
    // task Update for tomorrow
    { path: "user/create", element: <UserRegister />},  // User form
    { path: "user/userId/detail", element:<>User Detail</>},
    
      // user edit 
      // user detail,
      // user delete 
    // pos
    // Product 
      // product list, 
      // product create 
      // product Detail 
      // product Edit.
      // product delete
    // Order 
      // order list 
      // Order Order 
      // Order Detil 
      // order edit 
      // order delete 
    // inventory
      // Stock View 
      // stock update 
    // Transactions 
      // list 
      // view 
  ]},


  { path: "/user", element: <UserLayout />, children:[
    { index: true, element: <UserDashboard />},
    { path:"profile", element: <UserProfile />}
  ]},

  
  
  
  // Design a 404 not found page
  { path: "*", element: <NotFound /> },
]);


export default function RouterConfig() {
  return (
    <RouterProvider router={routerData} />
  );
}