import { useContext } from "react";
import "../style/updateprofile.scss";
import { AuthContext } from "../context/AuthContext";
import { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import UploadWidget from "../components/Uploadwidget";

function ProfileUpdatePage() {

  const {currentUser,updateUser}=useContext(AuthContext)
  const [error, seterror] = useState("")
  const [avatar, setavatar] = useState([])
  const navigate = useNavigate()

  const handlesubmit= async(e)=>{
    e.preventDefault()
    const formData=new FormData(e.target)
    const {username,email,password}=Object.fromEntries(formData)
    try{

      const res=await axios.put(`http://localhost:3000/api/users/${currentUser.id}`,
        {username,
          email,
          password,
          avatar:avatar[0],
        },
        {
          withCredentials: true,
        }
      )
        updateUser(res.data)
        navigate('/profile')

    }catch(err){

      console.log(err)
      seterror(err.response.data.message)
    }
  }

  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form onSubmit={handlesubmit}>
          <h1>Update Profile</h1>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              defaultValue={currentUser.username}
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={currentUser.email}
            />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
          </div>
          <button>Update</button>
          {error &&<span>error</span>}
         </form>
      </div>
      <div className="sideContainer">
        <img src={avatar[0] || currentUser.avatar || "/noavatar.jpg"} alt="" className="avatar" />
        <UploadWidget uwConfig={{
          cloudName:"dg7lc2xkv",
          uploadPreset:"estate",
          multiple:false,
          maxImageFileSize:2000000,
          folder:"avatars"
        }}
        setState={setavatar}
        />
      </div>
    </div>
  );
}

export default ProfileUpdatePage;
