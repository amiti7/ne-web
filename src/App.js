import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
// import enquire from './pages/enquire';
// import Career from './pages/Career';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';


function App() {
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
