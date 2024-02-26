import React from "react";
import Products from './products'
import Header from "./header";
function App() {
  return <div >
             <Header/>
             <div className="maindiv">
                <Products/>
             </div>
    </div>
  
}

export default App;
