import React, {useState} from "react"
// import video from "../data/video";
import CommentsCard from "./CommentsCard";

function VideoInfo({videoData}){
  const [videoInfo, setVideoInfo] = useState(videoData)
  const [isVisible, setIsVisible] = useState(true)

  function handleLikes(){
    let video = {...videoInfo}
    video.upvotes = video.upvotes + 1;
    setVideoInfo(video)
  }
  function handleDislikes(){
    let video = {...videoInfo}
    video.downvotes = video.downvotes - 1;
    setVideoInfo(video)
  }
function handleVisibility(){
setIsVisible(!isVisible)
}
    return (
        <div>
        <iframe
        width="919"
        height="525"
        src={videoInfo.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={videoInfo.title}
      />
      <h1>{videoInfo.title}</h1>
      <span>{videoInfo.views} Views | Uploaded {videoInfo.createdAt}</span>
      <br></br>
      <button onClick={handleLikes}>{videoInfo.upvotes} 👍 </button>
      <button onClick={handleDislikes}>{videoInfo.downvotes} 👎 </button>
      <br></br>
      <button onClick={handleVisibility}> { isVisible ? "Hide Comments" : "Show Comments" } </button>
      <hr></hr>
      {isVisible ? <CommentsCard comments={videoData.comments}/> : "" }
        </div>
       
    )
}

export default VideoInfo;