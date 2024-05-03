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

  //function to generate report
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    DocumentTittle: "service report",
    onafterprint: () => alert("user report successfully "),
  });

  return (
    <div className="mx-auto max-w-5xl">
      <h2 className="ms-20 my-10 mt-20 text-5xl font-bold text-white text-center">
        Service Records
      </h2>

      <div className="mt-5 mx-10 mb-10 max-w-3xl">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full"
        />
      </div>
      <div>
      <div className="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 mt-5">
            <h2 className="py-10 text-3xl font-bold text-white text-center w-full">
              Service Records
            </h2>
          </div>
      <table
        className="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 text-white sticky  w-full print:mr-5 print:absolute"
        ref={componentRef}
      >
        <thead>
          
          <tr className="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 mt-5">
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider"
            >
              Service
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider"
            >
              Customer
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider"
            >
              Date
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider"
            >
              Category
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredRecords.map((record) => (
            <tr
              key={record.id}
              className="bg-white border-b border-gray-200 hover:bg-gray-50"
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {record.service}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {record.customer}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {new Date(record.date).toLocaleDateString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
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
        <div className="mt-1 opacity-0">.</div>
      </div>
    </div>
  );
}
