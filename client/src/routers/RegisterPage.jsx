import { useState } from "react";
import "../style/registerpage.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

function Register() {

    const [error, seterror] = useState("")
    const [isloading, setisloading] = useState(false)
    const navigate=useNavigate()

    const handlesubmit= async(e)=>{
        e.preventDefault()
        setisloading(true)
        seterror('')
        const formdata=new FormData(e.target)

        const username=formdata.get("username")
        const email=formdata.get("email")
        const password=formdata.get("password")

        try{
            const res =await axios.post("http://localhost:3000/api/auth/register",{
                username,email,password
            },{withCredentials:true})
            navigate("/login")
        }catch(e){
            console.log(e)
            seterror(e.response.data.message)
        }
        finally{
      setisloading(false)
    }
    }
  return (
    <div className="register">
      <div className="formContainer">
        <form onSubmit={handlesubmit}>
          <h1>Create an Account</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="email" type="text" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button disabled={isloading} >Register</button>
          {error &&<span>{error}</span>}
          <Link to="/login">Do you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Register;