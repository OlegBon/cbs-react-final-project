import "./App.css";
import Categories from "./components/Categories/Categories";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import CartProduct from "./Pages/Home/Products/CartProdact/CartProduct";

const Layout = () => {
  return (
    <div className="App">
      <Header />
      <Categories />
      <div className="Content">
        <Outlet />
      </div>
      <Sidebar />
      <Footer />
    </div>
  );
};

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/cart", element: <Cart /> },
        { path: "/products/:formattedTitle", element: <CartProduct /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
