// client/src/components/Dashboard.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';



const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8090/dashboard/overview/')
      .then(response => {
        setDashboardData(response.data);
      })
      .catch(error => {
        console.error('Error fetching dashboard data:', error);
      });
  }, []);



  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-white">Dashboard Overview</h1>
      {dashboardData ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-800 bg-opacity-75 p-4 rounded-md text-white">
            <h2 className="text-lg font-semibold mb-2">Total Items</h2>
            <p className="text-xl">{dashboardData.totalParts}</p>
          </div>
          <div className="bg-gray-800 bg-opacity-75 p-4 rounded-md text-white">
            <h2 className="text-lg font-semibold mb-2">Total Issued Items</h2>
            <p className="text-xl">{dashboardData.totalIssuedItems}</p>
          </div>
          <div className="bg-gray-800 bg-opacity-75 p-4 rounded-md text-white">
            <h2 className="text-lg font-semibold mb-2">Total Orders</h2>
            <p className="text-xl">{dashboardData.totalOrders}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}


    </div>
  );
};

export default Dashboard;