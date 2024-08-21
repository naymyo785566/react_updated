
import "./index.css";
import { createElement } from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { createBrowserRouter,  RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import ProductDetail from "./Pages/ProductDetail";
import MyCart from "./Pages/MyCart";
import router from "./routes/router";


const categories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

const root = document.querySelector("#root");


// const title = document.createElement("p")
// title.innerText = "Product Category"

// root.append(title)
//View
// const app = createElement(
//   "div",
//   {id: "Category-section", className:"p-5"},
//   createElement("p", {className:"text-2xl text-gray-500 mb-3"}, "Product Categories"),
//   categories.map((categoty) => createElement("button", {className:"border border-black px-4 py-2 me-2"}, categoty))
// );

//View render
createRoot(root).render(<RouterProvider router={router} />);





