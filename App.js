// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './component/Nav';
// import CardComponent from './component/Card';
import LoginForm from './component/Login';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from "./pages/ProductList";

function App() {
  return (
    <BrowserRouter>
          <div>

    <CustomNavbar/>
    <Routes>
    {/* <Route path="./component/Card" element={<CardComponent />} /> */}
    <Route path="./Login" element={<LoginForm />} />

    <Route path="/" element={<ProductList />} />
    
</Routes>

</div>

</BrowserRouter>
      

    
    
  );
}

export default App;
