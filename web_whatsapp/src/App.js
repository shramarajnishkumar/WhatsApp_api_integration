import './App.css';
import FirstLeftSidebar from './components/1stLeftSidebar';
import SecondLeftSidebar from './components/2nsLeftSidebar';
import Messages from './components/Messages';
import AudioCall from './components/AudioCall';
import VideoCall from './components/VideoCall';
// import Merge from './containers/Merge';

function App() {
  return (
    <>
      <div className='d-flex'>
        <FirstLeftSidebar />
        <SecondLeftSidebar />
        <Messages />
        <AudioCall/>
        <VideoCall/>
        
      </div>
    </>
  );
}

export default App;
