import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import moment from 'moment';
import {useReactToPrint} from 'react-to-print';

export default function ServiceRecordView() {
  const [records, setRecords] = useState([]);

  const componentRef = useRef();

  useEffect(() => {
    function getService() {
      axios
        .get("http://localhost:8090/svc-records/")
        .then((res) => {
          console.log("Response from server:", res.data);
          setRecords(res.data);
        })
        .catch((err) => {
          console.error("Error fetching data:", err);
        });
    }

    getService();
  }, []);

  //function to generate report
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    DocumentTittle: "service report",
    onafterprint: () => alert("user report successfully ")
  })
    
  

  return (
    <div className="mx-auto max-w-5xl">
      <h2 className="ms-20 my-10 mt-20 text-3xl font-bold text-white text-center">
        Service Recode.
      </h2>

      <table class="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 text-white sticky top-10 mx-10 w-full" ref={componentRef}>
        <thead>
          <tr className="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 mt-5">
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider"
            >
              service
            </th>

            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider"
            >
              customer
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider"
            >
              date
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider"
            >
              category
            </th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr
              key={record.id}
              class="bg-white border-b border-gray-200 hover:bg-gray-50"
            >
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {record.service}
              </td>
            
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {record.customer}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {new Date(record.date).toLocaleDateString()}
                </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {record.category}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <div class="flex items-center justify-start gap-2">
                  {/*Edit record button */}
                  <a
                    href={`/editrec/${record._id}`}
                    type="button"
                    class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent roundedbg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
                  >
                    Edit
                  </a>
                 
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="absolute right-8 mt-5">
            <button onClick={handlePrint} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Generate Report</button>
            <div className="mt-1 opacity-0">.</div>
      </div>
    </div>
  );
}
