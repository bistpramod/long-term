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
import ResetPassword from "../pages/auth/PasswordReset";
import UserDetail from "../pages/admin/user/UserDetail";

const routerData = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/forget-password", Component: ForgetPassword },
  { path: "/reset-password", Component: ResetPassword },

  { path: "/moderator", Component: AdminLayout },
  { path: "/user", Component: AdminLayout },

  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, Component: AdminDashboard },

      { path: "users", element: <UserList /> }, // user listing table
      // task Update for tomorrow
      { path: "user/create", element: <UserRegister /> }, // User form

      { path: "user/:username/detail", element: <UserDetail /> },
      { path: "user/:id", element: <>User Edit form dispaly</> },
      // { path: "*", element: <NotFound redirect="/admin" /> },
      { path: "*", Component: NotFound },

      // user edit
      // user detail,
      // user delete
      // pos
      // Product
      // product list,
      // product create
      // name, description, price, discount, category, brand, code, stock, images,
      // createdBy, updatedBy, vendor, sku, status ()
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
    ],
  },

  {
    path: "/user",
    element: <UserLayout />,
    children: [
      { index: true, element: <UserDashboard /> },
      { path: "profile", element: <UserProfile /> },
    ],
  },

  // Design a 404 not found page
  { path: "*", element: <NotFound /> },
]);


export default function RouterConfig() {
  return (
    <RouterProvider router={routerData} />
  );
}