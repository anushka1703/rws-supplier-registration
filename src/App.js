
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MultiTabbedForm from './Components/FormSetup.js';
import MyCalendar from './Components/Calendar.js'
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<MultiTabbedForm />} />
        <Route exact path="/calendar" element={<MyCalendar />} />
      </Routes>
    </Router>
  );
}

export default App;
