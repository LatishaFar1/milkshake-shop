import React from "react";
import './App.css';
import milkshakes from "./milkshakes";
import {useState} from "react"; 
import Menu from "./components/Menu";
import Categories from "./components/Categories";


function App() {

  const [menuItems, setMenuItems] = useState(milkshakes);
  const [categories, setCategories] = useState([]);


  return (
    <div className="App">
      <div className="container-fluid">
      <div className="title">
        <h2>menu:</h2>
        <div className="underline"></div>
          <Menu />
          <Categories />
      </div>
      </div>
    </div>
  );
}

export default App;
