import React from 'react';
import video1 from '../../../my-app/src/video/video1.mp4';
import video2 from '../../../my-app/src/video/video2.mp4';

function Video() {
    
  return (
    <div className='video_container'>
     
      <div>
     <video width="418" height="230" controls >
      <source src={video2} type="video/mp4"/>
     </video>
     </div>
     <div></div>
     <div>
     <video width="418" height="230" controls >
      <source src={video1} type="video/mp4"/>
     </video>
     </div>
     </div>
     
     
   
    
  )
}

export default Video
