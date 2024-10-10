import React from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import AdminNavbar from "./AdminNavbar";
import WellnessPrograms from "../../assets/images/Camps.png";
import Therapists from "../../assets/images/Doctor.png";
import ActivePatients from "../../assets/images/TotalPatients.png";
import RecoveredPatients from "../../assets/images/CuredPatients.png";

const Dashboard = () => {
  // Updated dataset for mental health wellness
  const data = [
    {
      title: "Wellness Programs",
      icon: WellnessPrograms,
      value: 12,
      change: "+20% from last year",
      changeColor: "text-green-500",
      bgColor: "bg-purple-200",
    },
    {
      title: "Active Therapists",
      icon: Therapists,
      value: 35,
      change: "+5% since last month",
      changeColor: "text-green-500",
      bgColor: "bg-blue-200",
    },
    {
      title: "Patients in Therapy",
      icon: ActivePatients,
      value: 550,
      change: "+10% since last month",
      changeColor: "text-green-500",
      bgColor: "bg-green-200",
    },
    {
      title: "Patients Recovered",
      icon: RecoveredPatients,
      value: 430,
      change: "Recently updated",
      changeColor: "text-gray-500",
      bgColor: "bg-yellow-200",
    },
  ];

  // Updated graph data for patient recovery
  const recoveryData = [
    { month: "July", recovered: 40, inTherapy: 60 },
    { month: "August", recovered: 50, inTherapy: 70 },
    { month: "September", recovered: 45, inTherapy: 65 },
    { month: "October", recovered: 55, inTherapy: 60 },
    { month: "November", recovered: 60, inTherapy: 55 },
    { month: "December", recovered: 65, inTherapy: 50 },
    { month: "January", recovered: 70, inTherapy: 45 },
    { month: "February", recovered: 75, inTherapy: 40 },
  ];

  // Data for wellness programs by month
  const wellnessProgramsData = [
    { month: "July", programs: 3 },
    { month: "August", programs: 4 },
    { month: "September", programs: 5 },
    { month: "October", programs: 3 },
    { month: "November", programs: 6 },
    { month: "December", programs: 7 },
    { month: "January", programs: 5 },
    { month: "February", programs: 4 },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNavbar />
      <main className="max-w-7xl mx-auto p-6">
        {/* First Row for Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {data.map((item, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow">
              <div className="flex items-center">
                <div className={`p-3 rounded-full ${item.bgColor}`}>
                  <img
                    style={{ height: "30px", width: "30px" }}
                    src={item.icon}
                    alt={item.title}
                  />
                </div>
                <div className="ml-4">
                  <p
                    style={{ fontSize: "20px" }}
                    className="text-sm text-gray-500"
                  >
                    {item.title}
                  </p>
                  <p className="text-2xl font-bold">{item.value}</p>
                  <p className={`text-sm ${item.changeColor}`}>{item.change}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Grid for Graphs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Recovery Data Chart */}
          <div className="p-4 bg-white rounded-lg shadow lg:col-span-2">
            <div className="text-blue-900 mb-4">
              <h3 className="text-lg font-bold">Patient Recovery Progress</h3>
              <p className="text-sm text-gray-500">
                Tracking recovered vs. in therapy patients
              </p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={recoveryData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="recovered" fill="#82ca9d" />
                <Bar dataKey="inTherapy" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Wellness Program Data */}
          <div className="p-4 bg-white rounded-lg shadow">
            <div className="text-blue-900 mb-4">
              <h3 className="text-lg font-bold">Monthly Wellness Programs</h3>
              <p className="text-sm text-gray-500">Number of programs</p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={wellnessProgramsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="programs" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
