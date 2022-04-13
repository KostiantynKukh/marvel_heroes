import React, {useEffect} from 'react';
import { Routes, Route, Link, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import './app.scss';
import 'antd/dist/antd.css';
import Home from "./pages/Home/Home";
import Hero from "./pages/Hero/Hero";

function App() {
  return (
    <div className="App">
        <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="hero/:id" element={<Hero />}/>
        <Route path="*" element={<Home />}/>
      </Routes>

    </div>
  );
}

export default App;
