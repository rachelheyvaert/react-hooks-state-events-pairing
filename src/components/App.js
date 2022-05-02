import video from "../data/video.js";
import VideoInfo from "./VideoInfo.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <VideoInfo videoData={video}/>
    //instead of retruning specific values, just pass down entire obj
      
  )
}

export default App;