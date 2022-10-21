import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate= useNavigate()
  const formik=useFormik({
    initialValues:{
      email:"",
      password:"",
    },
    validate:(values)=>{
      let error ={};
     if(values.email===""){
        error.email="*Please enter Email-ID"
      }
      if(values.password===""){
        error.password="*Please enter password"
      }
       return error
    },
    onSubmit : async(values)=>{
    await axios.post("https://630a16213249910032803b78.mockapi.io/todo",values)
    console.log(values)
     navigate("/login")
    }
  })
 
  return (
   
    <div className='wrapper'>
    <div className='login col-lg-4 col-md-8 '>
    <form onSubmit={formik.handleSubmit}>
  <h1>LOGIN</h1>
  <div class="form-outline mb-4">
     <label>Email</label>
             <input className="form-control" type={"email"}
             value={formik.values.email}
             onChange={formik.handleChange}
             name="email"></input>
             <span style={{color:"red"}}>{formik.errors.email}</span>
     </div>

     <div class="form-outline mb-4">
     <label>Password</label>
             <input className="form-control" type={"password"}
             value={formik.values.password}
             onChange={formik.handleChange}
             name="password"></input>
             <span style={{color:"red"}}>{formik.errors.password}</span>
     </div>

    <div class="new">
      <Link to="/">New Register?</Link>
    </div>

<div className='button'>
<input className='btn btn-primary mt-2' type={"submit"} disabled={!formik.isValid} value="submit"></input>
  </div>
 
</form>
    </div></div>
  )
}

export default Login