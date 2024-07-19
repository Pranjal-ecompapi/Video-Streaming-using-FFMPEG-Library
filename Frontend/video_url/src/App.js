// import React , {useRef} from 'react';

// // This imports the functional component from the previous sample.
// import VideoJS from './Components/VideoPlayer'

// const App = () => {
//   const playerRef = useRef(null)
//   const videoLink = "http://localhost:8000/uploads/courses/eebac2b2-7674-4777-9aa9-0de688d0330a/index.m3u8"

//   const VideoPlayerOptions = {
//     controls: true,
//     responsive: true,
//     fluid:true,
//     sources: [
//       {
//         src: videoLink,
//         type: "application/x-mpegURL"
//       }
//     ]
//   }

//   const handlePlayerReady = (player) => {
//     playerRef.current = player;

//     // You can handle player events here, for example:
//     player.on("waiting", () => {
//       VideoJS.log("player is waiting");
//     });

//     player.on("dispose", () => {
//       VideoJS.log("player will dispose");
//     });
//   };

//   return(
//     <>
//     <div>
//       <h1>Video player</h1>
//     </div>
//     <VideoJS
//     options={VideoPlayerOptions}
//     onReady={handlePlayerReady}
//     />
//   </>
    
//   )
// }


// export default App


import React from 'react';

// This imports the functional component from the previous sample.
import VideoJS from './Components/VideoPlayer'

const App = () => {
  const playerRef = React.useRef(null);
  const videoLink = "http://localhost:3000/uploads/courses/51ba763a-0352-489e-bbdb-cb2ecdd9b086/index.m3u8"

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src: videoLink,
      type: "application/x-mpegURL"
    }]
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      VideoJS.log('player is waiting');
    });

    player.on('dispose', () => {
      VideoJS.log('player will dispose');
    });
  };

  return (
    <>
      <div>Rest of app here</div>
      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
      <div>Rest of app here</div>
    </>
  );
}

export default App