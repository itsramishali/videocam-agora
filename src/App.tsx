import React, { CSSProperties, useState } from 'react'
import AgoraUIKit, { layout } from 'agora-react-uikit'
// import 'agora-react-uikit/dist/index.css'n



const App: React.FunctionComponent = () => {
  const [videocall, setVideocall] = useState(true)
  const [isHost, setHost] = useState(true)
  const [isPinned, setPinned] = useState(false)
  const [username, setUsername] = useState('')

  return (
    <div style={styles.container}>
      <div style={styles.videoContainer}>
        <h1 style={styles.heading}>Video Meetings</h1>
        {videocall ? (
          <>
            <div style={styles.nav}>
              <p style={{ fontSize: 20, width: 200 }}>
                You're {isHost ? 'a host' : 'an audience'}
              </p>
              <p style={styles.btn} onClick={() => setHost(!isHost)}>
                Change Role
              </p>
              <p style={styles.btn} onClick={() => setPinned(!isPinned)}>
                Change Layout
              </p>
            </div>
            <AgoraUIKit
              rtcProps={{
                appId: '5dff16dd1f7b424ab1a92a130e9d3176',
                channel: 'mechannel1',
                token: "007eJxTYNj5+gJ71PR7nm96P6ZcDGRVuR7CnPvjhmnwvESxuyu+/jmiwGCakpZmaJaSYphmnmRiZJKYZJhoaZRoaGyQaplibGhu9oXxbGpDICOD6L4YVkYGCATxuRhyU5MzEvPyUnMMGRgA7LQj/g==", // add your token if using app in secured mode
                role: isHost ? 'host' : 'audience',
                layout: isPinned ? layout.pin : layout.grid,
                enableScreensharing: true
              }}
              rtmProps={{ username: username || 'user', displayUsername: true }}
              callbacks={{
                EndCall: () => setVideocall(false)
              }}
            />
          </>
        ) : (
          <div style={styles.nav}>
            <input
              style={styles.input}
              placeholder='nickname'
              type='text'
              value={username}
              onChange={(e) => {
                setUsername(e.target.value)
              }}
            />
            <h3 style={styles.btn} onClick={() => setVideocall(true)}>
              Start Call
            </h3>
          </div>
        )}
      </div>
    </div>
  )
}


const styles = {
  container: {
    // margin: 0,
    // padding: 0,
    width: '98vw',
    height: '100vh',
    display: 'flex',
    // alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff7ee'
  },
  heading: { textAlign: 'center' as const, marginBottom: 0, marginTop:30 },
  videoContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  } as CSSProperties,
  nav: { display: 'flex', justifyContent: 'space-around' },
  btn: {
    backgroundColor: ' #c700ff',
    cursor: 'pointer',
    borderRadius: 5,
    padding: '4px 8px',
    color: '#ffffff',
    fontSize: 20
  },
  input: { display: 'flex', height: 24, alignSelf: 'center' } as CSSProperties
}

export default App





