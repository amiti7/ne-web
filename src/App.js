import React, {useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
// import enquire from './pages/enquire';
// import Career from './pages/Career';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import ReactGA4 from "react-ga4";

ReactGA4.initialize('G-9T21YZCGK0');

function App() {
  useEffect(()=>{
    console.log('firing app load', window.location.pathname)
    ReactGA4.send({ hitType: "pageview", page: window.location.pathname });
    },[])
  return (
    <Router >
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/career" element={<Career/>}/> */}
        <Route path="/Privacy-Policy" element={<PrivacyPolicy/>}/>
        <Route path="/Terms" element={<Terms/>}/>
      </Routes>
    </Router>
  );
}

export default App;
