import React, { useState } from 'react'
import Nav from './Navigation/Nav';
import Sidebar from './Sidebar/SideBar';
import Recommended from './Recommended/Recommended';
import products from "./storeDB/storeDb";
import Card from "./Components/Card";
import "./App.css"
import Products from './Products/Product';


function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };




  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products />
    </>
  )
}

export default App