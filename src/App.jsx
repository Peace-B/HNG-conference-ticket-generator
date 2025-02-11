import './App.css'
import 'remixicon/fonts/remixicon.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import TicketSelection from './components/TicketSelection';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route path="/ticketselection" element={<TicketSelection />} /> */}
          {/* <Route path="/contact" element={<Contact />} />  */}
        </Routes>
      </Router>
    </>
  )
}

export default App
