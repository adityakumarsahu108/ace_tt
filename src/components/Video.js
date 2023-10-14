import React from 'react';

import video2 from '../../../my-app/src/video/video2.mp4';

function Video() {
    
  return (
    <div className='video_container'>
     

     <video width="418" height="230" controls >
      <source src={video2} type="video/mp4"/>
     </video>
     </div>
     
     
   
    
  )
}

export default Video
