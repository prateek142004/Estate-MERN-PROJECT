import { useState } from "react";
import "../style/loginpage.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const [error, seterror] = useState("")
  const [isloading, setisloading] = useState(false)
  const {updateUser}=useContext(AuthContext)
  const navigate=useNavigate()


  const handlesubmit=async(e)=>{
    e.preventDefault()
    setisloading(true)
    seterror('')
    const formdata = new FormData(e.target)
    const username=formdata.get("username")
    const password=formdata.get("password")

    try{
      const res=await axios.post("http://localhost:3000/api/auth/login",{
        username,password
      },{withCredentials:true})

      updateUser(res.data)
      navigate('/')

    }catch(e){
      console.log(e)
      seterror(e.response.data.message)
    }
    finally{
      setisloading(false)
    }
  }

  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handlesubmit}>
          <h1>Welcome back</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="password" type="password" placeholder="Password" />
          <button disabled={isloading}>Login</button>
          {error && <span>{error}</span>}
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Login;