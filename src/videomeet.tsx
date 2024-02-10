// import React, { CSSProperties, useState } from 'react';
// import AgoraUIKit, { layout } from 'agora-react-uikit';

// const Videomeet: React.FunctionComponent = () => {
//   const [videocall, setVideocall] = useState(true);
//   const [isHost, setHost] = useState(true);
//   const [isPinned, setPinned] = useState(false);
//   const [username, setUsername] = useState('');

//   return (
//     <div style={styles.container}>
//       <div style={styles.videoContainer}>
//         <h1 style={styles.heading}>Omegle-like Video Meetings</h1>
//         {videocall ? (
//           <>
//             <AgoraUIKit
//               rtcProps={{
//                 appId: '5dff16dd1f7b424ab1a92a130e9d3176',
//                 channel: 'mechannel1',
//                 token: "007eJxTYCjw2v676dY2p5dHDCS1FtXNtl8Qs+XkbP8SqZkcajXPb5xTYDBNSUszNEtJMUwzTzIxMklMMky0NEo0NDZItUwxNjQ3u6t1NLUhkJHBftlMFkYGCATxuRhyU5MzEvPyUnMMGRgAiskjAw==", // add your token if using app in secured mode
//                 role: isHost ? 'host' : 'audience',
//                 layout: isPinned ? layout.pin : layout.grid,
//                 enableScreensharing: true
//               }}
//               rtmProps={{ username: username || 'user', displayUsername: true }}
//               callbacks={{
//                 EndCall: () => setVideocall(false)
//               }}
//             />
//             <div style={styles.nav}>
//               <p style={{ fontSize: 20, width: 200 }}>
//                 You're {isHost ? 'a host' : 'an audience'}
//               </p>
//               <p style={styles.btn} onClick={() => setHost(!isHost)}>
//                 Change Role
//               </p>
//               <p style={styles.btn} onClick={() => setPinned(!isPinned)}>
//                 Change Layout
//               </p>
//             </div>
//           </>
//         ) : (
//           <div style={styles.nav}>
//             <input
//               style={styles.input}
//               placeholder='Enter your nickname'
//               type='text'
//               value={username}
//               onChange={(e) => {
//                 setUsername(e.target.value);
//               }}
//             />
//             <h3 style={styles.btn} onClick={() => setVideocall(true)}>
//               Start Call
//             </h3>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     width: '100vw',
//     height: '100vh',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f2f2f2'
//   } as CSSProperties,
//   heading: { textAlign: 'center' as const, marginBottom: 20 },
//   videoContainer: {
//     width: 600,
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 10
//   } as CSSProperties,
//   nav: { display: 'flex', justifyContent: 'space-around', marginTop: 20 },
//   btn: {
//     backgroundColor: '#007bff',
//     cursor: 'pointer',
//     borderRadius: 5,
//     padding: '8px 16px',
//     color: '#ffffff',
//     fontSize: 18
//   },
//   input: { height: 40, fontSize: 16, padding: '0 10px', borderRadius: 5, border: '1px solid #ccc' }
// };

// export default Videomeet;
