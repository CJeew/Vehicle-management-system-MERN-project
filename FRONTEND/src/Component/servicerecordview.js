import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from 'moment';

export default function ServiceRecordView() {
  const [records, setRecords] = useState([]);

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

  return (
    <div className="mx-auto max-w-5xl">
      <h2 className="ms-20 my-10 mt-20 text-3xl font-bold text-white text-center">
        Service Recode.
      </h2>

      <table class="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 text-white sticky top-10 mx-10 w-full">
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
                    class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent roundedbg-transparent hover:bg-yellow-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                  >
                    Edit
                  </a>
                 
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
