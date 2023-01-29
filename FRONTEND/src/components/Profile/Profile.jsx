import React,{useEffect,useState} from 'react'
import './profile.css';
import {Link,useParams} from 'react-router-dom'
import leftArrow from '../../assets/symbols/leftArrow.svg'
import Post from '../Posts/Post';

const Profile = () => {
const[user,SetUser] =useState({});
const[posts,SetPosts]=useState([]);

const {profileId}: { profileId: string } = useParams();

useEffect(()=>{
    const fetchUser =async ()=>{
     
    //     fetch('http://localhost:4000/socialify/user/63befd691ac79019f4783e5c')
    //    .then(response => response.json())
    //    .then(data => SetUser(data));
            console.log(profileId);
            const res = await fetch(`http://localhost:4000/socialify/user/${profileId}`);

            const data = await res.json();
            console.log(data);
            return data;
       }
      const SetData =async()=>{

          const data = await fetchUser();
          SetPosts(data.user.posts);
          SetUser(data.user);
      }
SetData();
},[profileId])


 console.log(user);

  return (
   <>
   <div className="profileOuter">
    <div className="profileUpper">
            <div className="navAndUserName">
                <Link to={'/'} >

                <img className='navLeftArrow'  src={leftArrow} alt="lol" />
                </Link>
                <div className="navTextWraaper">

                <strong className='navUserName'>
                    {user.username?user.username:'Cheems Vimdhayak'}        
                    </strong>
                    <small className="navNumberOfSocialIfy">
                    {user.posts?user.posts.length:'200k '} Socialifies
                    </small>
                </div>
            </div> 
            <div  className="profileBanner">
                <img  src={"https://th.bing.com/th/id/R.8cca7af050f60494ed7d703e49fa9df1?rik=Wo2ynTicldrWMg&riu=http%3a%2f%2fanimals.sandiegozoo.org%2fsites%2fdefault%2ffiles%2f2016-10%2fanimals_hero_capybara.jpg&ehk=mOEqgt8M6y1CpCffLT7M13klCeWBUxpdJZZqLNV83%2bI%3d&risl=&pid=ImgRaw&r=0"} className="img-fluid" alt="..."></img>
            </div>
            <div className="profileUpperLowerPart">
                    <div className="displayPictureProfilePage">
                    <img className='displayPictureProfilePageimage' src="https://www.rainforest-alliance.org/wp-content/uploads/2021/06/capybara-square-1-1024x1024.jpg" alt="" />
                    </div>
                    <div className="followProfilePage">
                        <span className='followButtonProfilePage'> follow </span>
                    </div>
            </div>
            <div className="profileUpperBioUSerNameFollower">
                <h5>{user.username?user.username:'Cheems Vimdhayak'}  </h5>
                <small>
                    
              {  user.user_bio?user.user_bio:`Can solve medium problems (1800-2000) slightly regularly. 3. Occasionally I can solve 2100 rated problem
                s in contest time (very rare). 4. In practice I can often find the key idea of …`}
                </small>

                <div className="followersNumberAndFollowingInProfile">
                    <span className='followersNumberinProflie'>
                        <strong>{user.followers?user.followers.length:'100k'}</strong><small>followers</small>
                    </span>
                    <span className='followingNumberinProflie'>
                        <strong>{user.following?user.following.length:'100'}</strong><small>following</small>
                    </span>
                </div>
            </div>
    </div>
    <div className="profileLower">
    <div className="ProfilePosts">
        {
            posts.map((post)=>{
                console.log(post);
                return(<>
                  <Post  id={post}/>
                </>)
            })
        }
  
  
    </div>
    </div>
   </div>
   </>
  )
}

export default Profile