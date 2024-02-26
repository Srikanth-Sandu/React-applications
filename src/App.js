import React from "react";
import { useFormik } from "formik";
import Cusform from "./formikelement";
function App() {

  var userForm =useFormik({
    initialValues:{'fn':'','ln':'','age':''},
    onSubmit:(fv)=>{console.log(fv)}
  })
  return (
    <>
      <h1>User Form using Formik</h1>
      <form onSubmit={userForm.handleSubmit}>
        <input type="text" placeholder="Firstname" name='fn' onChange={userForm.handleChange}  /><br/>
        <input type="text" placeholder="Lasstname" name='ln' onChange={userForm.handleChange}  /><br/>
        <input type="text" placeholder="Age" name='age' onChange={userForm.handleChange} /><br/>
        <button type="submit">Save</button>
      </form>
      <Cusform/>   
       </>
    
  )
}

export default App;
