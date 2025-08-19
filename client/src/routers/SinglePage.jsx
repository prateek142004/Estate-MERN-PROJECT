import "../style/singlepage.scss";
import Slider from "../components/Slider";
import Map from "../components/Map";
import { useLoaderData, useNavigate } from "react-router-dom";
import DOMpurify from "dompurify";
import { useContext,useState } from "react";
import {AuthContext} from "../context/AuthContext"
import axios from "axios"

const SinglePage = () => {
  const post = useLoaderData();
  const {currentUser}=useContext(AuthContext)
  const [saved, setsaved] = useState(post.isSaved)
  const navigate=useNavigate()

  const handleSave= async(e)=>{

    e.preventDefault()

    if(!currentUser){
      navigate("/login")
    }
    setsaved((prev)=>!prev)
    try{
      await axios.post("http://localhost:3000/api/users/save", { postId: post.id },{
        withCredentials:true
      })
    }catch(err){
      console.log(err)
      setsaved((prev)=>!prev)
    }
  }
  return (
    <div className="singlepage">
      <div className="details">
        <div className="wrapper">
          <Slider images={post.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{post.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{post.address}</span>
                </div>
                <div className="price">$ {post.price}</div>
              </div>
              <div className="user">
                <img src={post.user.avatar} alt="" />
                <span>{post.user.username}</span>
              </div>
            </div>
            <div
              className="bottom"
              dangerouslySetInnerHTML={{
                __html: DOMpurify.sanitize(post.postDetail[0].desc),
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="verticallist">
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featuretext">
                <span>Utilities</span>
                {post.postDetail.utilities === "owner" ? (
                  <p>Owner is Responsible</p>
                ) : (
                  <p>Tenent is Responsible</p>
                )}
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featuretext">
                <span>Pet Policy</span>
                {post.postDetail.pet === "allowed" ? (
                  <p>Pet Allowed</p>
                ) : (
                  <p>Pet Not Allowed</p>
                )}
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featuretext">
                <span>Income Policy</span>
                <p>{post.postDetail.income}</p>
              </div>
            </div>
          </div>

          <p className="title">Room Size</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>{post.postDetail.size}sqft</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="" />
              <span>{post.bedroom} beds</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="" />
              <span>{post.bathroom} bathroom</span>
            </div>
          </div>

          <p className="title">Nearby Places</p>
          <div className="horizontallist">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featuretext">
                <span>School</span>
                <p>{post.postDetail.school}m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="" />
              <div className="featuretext">
                <span>Bus stop</span>
                <p>{post.postDetail.bus}m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featuretext">
                <span>Restaurant</span>
                <p>{post.postDetail.restaurants}m away</p>
              </div>
            </div>
          </div>

          <p className="title">Location</p>
          <div className="mapcontainer">
            <Map items={[post]} />
          </div>

          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              Send a Message
            </button>
            <button  type="button" onClick={handleSave} style={{
              backgroundColor:saved?"#fece51":"white"
            }}>
              <img src="/save.png" alt="" />
              {saved ?"Placed Saved":   "Save the Place" }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
