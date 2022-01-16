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
      <section className="menu section">
      <div className="title">
        <h2>menu:</h2>
        <div className="underline"></div>
      </div>
          <Menu milkshakes={menuItems} />
          <Categories />
      </section>
    </div>
  );
}

export default App;
