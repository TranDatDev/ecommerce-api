import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h1>
      <div className="card bg-gray-100 p-4 rounded-md shadow-md mb-4">
        <h2 className="text-xl font-semibold">Overview</h2>
        <p>This is a simple dashboard component.</p>
      </div>
      <div className="card bg-gray-100 p-4 rounded-md shadow-md">
        <h2 className="text-xl font-semibold">Recent Activities</h2>
        <ul>
          <li>Activity 1 - Logged in</li>
          <li>Activity 2 - Completed a task</li>
          <li>Activity 3 - Updated profile</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
