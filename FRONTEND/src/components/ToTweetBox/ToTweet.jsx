import React, { useState } from 'react'
import Avatar from '../Avatar/Avatar';
import './toTweet.css';

import axios from 'axios';

const ToTweet = () => {
  const [text,SetText]=useState('');
  let FileUrl = `https://th.bing.com/th/id/OIP.jUTdbKVku8FQ84w4R169wAHaGN?pid=ImgDet&rs=1`;
  const handleUpload =async(e)=>{
    
    e.preventDefault();

    if(!text){
      alert("at least have something to Post");
    }
    else{
      const res=await axios({
        method: 'post',
        withCredentials : true,
        headers:{
          "Content-Type":"application/json"
        },
        url: 'http://localhost:4000/socialify/post/create',
        data: JSON.stringify({
          
       body:{
        text:text,
        images:[{
          url:FileUrl
        }]
       }
       })
      });
    
      const response = await res.data;
      // const res =await fetch(`http://localhost:4000/socialify/post/create`,{
      //   method:"POST",
      //   headers:{
      //     "Content-Type":"application/json"
      //   },
      
      //   body:JSON.stringify({

      //  body:{
      //   text:text,
      //   images:[{
      //     url:FileUrl
      //   }]
      //  }

      //   })
    
      // })


      const jsonData = await res.json();
      
      if(jsonData.success){
       console.log(jsonData);

      }
      else{
       alert(jsonData.message);
      }
    }

  }
  return (
   <>
   <div className="tweetBoxOuter">
    <div className="tweetBoxUpper">

   <Avatar imgUrl={'https://www.rainforest-alliance.org/wp-content/uploads/2021/06/capybara-square-1-1024x1024.jpg'}/>
   <input className='tweetBoxUpperInput' type="text" placeholder="What's Happening ?" onChange={(e)=>SetText(e.target.value)} />
    </div>
    <div className="tweetBoxLowerBelow">
    <label class="label">
        <input className="tweetBoxLowerBelowFile" type="file" />
        <span>Attach</span>
      </label>
      <input type="button" className='SocalifyBtn' value={'SocialiFy'} onClick={(e)=>handleUpload(e)} placeholder='SocialiFy' />
    
    </div>
   </div>

   </>
  )
}

export default ToTweet