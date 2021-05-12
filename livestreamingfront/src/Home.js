import React, { useState, useEffect } from 'react';
import { Link ,useHistory} from "react-router-dom"
import HomeSlider from './HomeSlider'
import axios from "axios"

function Home() {
  
  let [video,setvideo]=useState([])
  let apiurl="http://localhost:5000/api/allassets"
  useEffect(() => {
        axios({
            url:apiurl,
            method:"get",
       }).then((response)=>{
          setvideo(response.data)
       },(error)=>{
          console.log("Error from api",error)  
       })
  },[]);

  return ( 
    <>
    <HomeSlider/> 
    <div style={{ paddingTop:"15px",paddingLeft:"10px"}} >
        <h2>All Videos </h2>
	    <div className="row">
		    { video.videos?.length > 0 && video.videos.map((each, index)=>{
		      return (
              <div>  
                <Link target="_blank" to={'/Playvideo/'+each}> <video width="380" height="280" style={{ marginLeft:"150px"}}>
                    <source src={`http://localhost:5000/${each}`} type="video/mp4"/>
                </video> </Link> 
              </div>
            )    
		      })
		    }
	   </div>
	</div>
  </>
  );
}

export default Home;
