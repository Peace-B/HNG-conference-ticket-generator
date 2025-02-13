import './App.css'
import 'remixicon/fonts/remixicon.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import AttendeeDetails from './components/AttendeeDetails';
import Ready from './components/Ready';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/attendeedetails" element={<AttendeeDetails />} />
          <Route path="/ready" element={<Ready/>} /> 
        </Routes>
      </Router>
    </>
  )
}

export default App
