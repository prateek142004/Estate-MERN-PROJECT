import React from 'react'
import '../style/profilepage.scss'
import List from '../components/List'
import Chat from '../components/Chat'
import axios from 'axios'
import { useNavigate,Link,useLoaderData } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'


const ProfilePage = () => {
  const data = useLoaderData()
  console.log(data)

  const {updateUser,currentUser}= useContext(AuthContext)

  const navigate =useNavigate()
  const handlelogout= async()=>{
    try{
      await axios.post("http://localhost:3000/api/auth/logout",{},{
      withCredentials: true,
    })
      updateUser(null)
      navigate('/')

    }catch(err){
      console.log(err)
    }

  }
  return (
    <div className='profilepage'>
        <div className='detail'>
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <Link to="/profile/update">
            <button>Update Profile</button>
            </Link>
          </div>
          <div className="info">
            <span>Avatar: <img src={currentUser.avatar || "/noavatar.jpg"} alt="" /></span>
            <span>Username: <b>{currentUser.username}</b></span>
            <span>Email: <b>{currentUser.email}</b></span>
            <button onClick={handlelogout}>Logout</button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <Link to="/add">
            <button >Add New Post</button>
            </Link>
          </div>
            <List posts={data.userPosts}/>
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List posts={data.savedPost}/>
        </div>
      </div>
      <div className="chatcontainer">
        <div className="wrapper">
            <Chat/>
        </div>
      </div>
    </div>
    )
}

export default ProfilePage

