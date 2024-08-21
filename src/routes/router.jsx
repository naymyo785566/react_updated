import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import ProductDetail from "../Pages/ProductDetail";
import MyCart from "../Pages/MyCart";
import MainLayout from "../components/MainLayout";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/about-us",
          element: <AboutUs/>
        },
        {
          path: "/product-detail/:productSlug",
          element: <ProductDetail/>
        },
        {
          path: "/my-cart",
          element: <MyCart/>
        },
      ]
    }
  ])

  export default router;