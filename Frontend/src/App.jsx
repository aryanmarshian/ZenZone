// App.jsx
import "./App.css";
import AddCamp from "./Components/Admin/AddCamp";
import Dashboard from "./Components/Dashboard";
import CampHome from "./Components/Admin/CampHome";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import AddPatientDetails from "./Components/Doctor/AddPatientDetails";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import { Routes, Route } from "react-router-dom";
import CampInfo from "./Components/Admin/CampInfo";
import UpdateDetail from "./Components/Beneficiery/UpdateDetail";
import LowStage from "./Components/Doctor/LowStage";  // Import LowStage
import MidStage from "./Components/Doctor/MidStage";  // Import MidStage
import HighStage from "./Components/Doctor/HighStage"; // Import HighStage

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/camps" element={<CampHome />} />
      <Route path="/addCamps" element={<AddCamp />} />
      <Route path="/adminDashboard" element={<AdminDashboard />} />
      <Route path="/addPatient" element={<AddPatientDetails />} />
      <Route path="/campInfo" element={<CampInfo />} />
      <Route path="/updateDetail" element={<UpdateDetail />} />
      <Route path="/low-stage" element={<LowStage />} />  // Changed from /lowStage to /low-stage
      <Route path="/mid-stage" element={<MidStage />} />  // Changed from /midStage to /mid-stage
      <Route path="/high-stage" element={<HighStage />} /> // Changed from /highStage to /high-stage
    </Routes>
  );
};

export default App;
