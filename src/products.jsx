   import React from "react";
   import axios from "axios";
   import Card from './card'
   function Products(){
    var[cartitems,setCartitems]=React.useState([]);
    var [products,setProducts]=React.useState([]);
    React.useEffect(()=>{
    axios.get('https://fakestoreapi.com/products').then((res)=>{return setProducts([...res.data])})
    },[])
    function tocart(p){
        setCartitems([...cartitems,p])
    }
    return products.map((p)=>{
    return <Card prod={p} cart={tocart} />
   }) 
   }
   export default Products;