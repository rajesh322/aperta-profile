import logo from './logo.svg';
import './App.css';
import Profile from './profile/profile';
import Profile2 from './profile/Profile2';
import Feed from './profile/feed';
import Timeline from './profile/Timeline';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {

  
  return (
    <div className="App">
        
  <Router>
    <Routes>
      <Route path="/" element={<Profile2 />} />
      <Route path="/Timeline" element={<Timeline/>}/>
    </Routes>
  </Router>
  </div>
  )
  }

export default App;
