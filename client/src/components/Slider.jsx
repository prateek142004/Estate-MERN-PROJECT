import React, { useState } from 'react'
import '../style/slider.scss'

const Slider = ({images}) => {
    const [imageindex, setimageindex] = useState(null)
    const ChangeSlide=(direction)=>{
        if(direction=='left'&& imageindex>0){
            setimageindex(imageindex-1)
        }
        else if(direction=='right' && imageindex<images.length-1){
            setimageindex(imageindex+1)
        }
        else{
            setimageindex(0)
        }
    }
  return (
    <div className='slider'>
         {imageindex != null &&
         (<div className="fullslider">
             <div className="arrow">
                 <img src="/arrow.png" alt="" onClick={()=>ChangeSlide('left')}/>
             </div>
             <div className="imgcontainer">
                 <img src={images[imageindex]} alt="" />
             </div>
             <div className="arrow" >
                 <img src="/arrow.png" alt="" className='right' onClick={()=>ChangeSlide('right')}/>
             </div>
             <div className="close" onClick={()=>setimageindex(null)}>X</div>
         </div>)}
        <div className="bigimages">
            <img src={images[0]} alt="" onClick={()=>setimageindex(0)} />
        </div>
        <div className="smallimage">
            {images.slice(1).map((image,index)=>(
                <img src={image} alt="" key={index}
                onClick={()=>setimageindex(index+1)}
             />
            ))}
        </div>
    </div>
  )
}

export default Slider