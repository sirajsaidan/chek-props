import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductTable from "./ProductTable"
let products=[
  {nom:"Ordinateur",price:"1000",category:"electronique"},
  {nom:"pull",price:"40", category:"vetement"},
  {nom:"imprimante",price:"500",category:"electronique"},
  {nom:"djean",price:"90", category:"vetement"},


]
function App() {
  return (
    <ProductTable products={products}/>  
    
  );
}

export default App;
