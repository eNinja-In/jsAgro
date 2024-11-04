// import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/nav-foot/navBar";
import FootBar from "./components/nav-foot/footBar";
import Home from "./components/home/homeMain";
import Login from "./components/other/SignUp/signIn";
import Private from "./components/other/Other/privateComp";
import Product from "./components/product/productMain";
import AddProductForm from "./components/product/addProduct";
import ListProduct from "./components/product/productList";

// Temporary placeholders for UpdateProduct and DeleteProduct components
const UpdateProduct = () => <div>Update Product Page</div>;
const DeleteProduct = () => <div>Delete Product Page</div>;

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route element={<Private />}>
            <Route path="/" element={<Home />} />
            <Route path="/JSproducts" element={<Product />}>
              <Route index element={<ListProduct />} />
              <Route path="list-Product" element={<ListProduct />} />
              <Route path="add-Product" element={<AddProductForm />} />
              <Route path="update-product" element={<UpdateProduct />} />
              <Route path="delete-product" element={<DeleteProduct />} />
            </Route>
            <Route path="/JSDataanalyse" element={<div>JS-Data-analyse</div>} />
            <Route path="/JSsales" element={<div>JS-sales</div>} />
            <Route path="/settings" element={<div>settings</div>} />
          </Route>
          <Route path="/JSlogin" element={<Login />} />
          <Route path="/*" element={<Login />} />
        </Routes>
        <FootBar />
      </BrowserRouter>
    </>
  );
}

export default App;
