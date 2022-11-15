import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductSearch from './components/ProductSearch';

function App() {

  const[allproduct,setAllProduct]=useState([])
  const[limitproduct,setLimitProduct]=useState([])
  const[allcatagories,setAllCategories]=useState([])



  async function getallproducts()
  {
    const APT_URL ="https://fakestoreapi.com/products"
    const response= await fetch(APT_URL)
    const data=await response.json()
    console.log(data)
    setAllProduct(data)
  }

    async function getlimitproducts()
  {
    const APT_URL ="https://fakestoreapi.com/products?limit=4"
    const response= await fetch(APT_URL)
    const data=await response.json()
    console.log(data)
    setLimitProduct(data)
  }

  async function getallcatagories()
  {
    const APT_URL ="https://fakestoreapi.com/products/categories"
    const response= await fetch(APT_URL)
    const data=await response.json()
    console.log(data)
    setAllCategories(data)
  }

  useEffect(()=>{
    getallproducts()
    getlimitproducts()
    getallcatagories()
  },[])


  return (
    <div className="App">
         <Header/>
         <ProductList allproduct={allproduct} />
         <Categories allcatagories={allcatagories} allproduct={allproduct} limitproduct={limitproduct}/>
         <ProductSearch allproduct={allproduct} />
         <Footer/>
    </div>
  );
}

export default App;
