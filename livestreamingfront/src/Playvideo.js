import { useParams,Link } from "react-router-dom"
import {useEffect , useState} from "react";
import axios from 'axios'
import ReactPlayer from 'react-player'
var video ={
    objectFit: "cover",
    width: "100vw",
    height: "100vh",
    position: "fixed",
    top: "0",
    left: "0"
  }

function Playvideo()
{
    let[videoName,setvideoName]=useState()
    let  params= useParams()
    useEffect(()=>{
        let allvideoname="http://localhost:5000/api/playvideo?filename="+params.vname
        axios({
        url:allvideoname,
        method:"get"
        
    }).then((response)=>{
        console.log("response from api" ,response)
        setvideoName(response.data)
    },(error)=>{
        console.log("error from api",error)
    })
    },[])

    return(
        <div>
            <video style={video} controls autoPlay loop data={videoName}>
                   <source src={"http://localhost:5000/"+params.vname}></source>
                </video>
        </div>
    )
}

export default Playvideo