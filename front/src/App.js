import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Admin from "./components/Pages/Admin";
import Home from "./components/Pages/Client/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/add" element={<Admin/>}></Route>
      </Routes>
    </>
  );
}

export default App;
