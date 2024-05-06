import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import moment from "moment";
import { useReactToPrint } from "react-to-print";

export default function ServiceRecordView() {
  const [records, setRecords] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRecords, setFilteredRecords] = useState([]);

  const componentRef = useRef();

  useEffect(() => {
    function getService() {
      axios
        .get("http://localhost:8090/svc-records/")
        .then((res) => {
          console.log("Response from server:", res.data);
          setRecords(res.data);
          setFilteredRecords(res.data); // Initialize filtered records with all records
        })
        .catch((err) => {
          console.error("Error fetching data:", err);
        });
    }

    getService();
  }, []);

  useEffect(() => {
    // Filter records based on search query
    const filtered = records.filter(
      (record) =>
        record.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        record.service.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredRecords(filtered);
  }, [searchQuery, records]);

  // Function to generate report
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    DocumentTitle: "Service Report",
   
  });

  return (
    <div className="mx-auto max-w-5xl">
      <h2 className="my-10 text-5xl font-bold text-center text-gray-300">Service Records</h2>

      <div className="mx-10 mb-10 max-w-3xl">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full"
        />
      </div>
      <div ref={componentRef}>
      <div className="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900">
        <h2 className="py-5 text-3xl font-bold text-white text-center">
          Service Records
        </h2>
      </div>

      <table className="bg-white w-full print:absolute" ref={componentRef}>
        <thead>
          <tr className="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 text-white">
            <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
              Service
            </th>
            <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
              Customer
            </th>
            <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
              Category
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredRecords.map((record) => (
            <tr key={record.id} className="border-b border-gray-200">
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                {record.service}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                {record.customer}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                {new Date(record.date).toLocaleDateString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                {record.category}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <div className="absolute right-8 mt-5">
        <button
          onClick={handlePrint}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Download Report
        </button>
      </div>
    </div>
  );
}
