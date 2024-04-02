import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function EmployeeAnnouncement() {
  const [employeeannouncement, setAnnouncement] = useState([]); // State for storing announcement details
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null); // State for storing the selected announcement

  // Fetch announcement details from the server on component mount
  useEffect(() => {
    function getAnnouncement() {
      axios.get("http://localhost:8090/employeeannouncement/").then((res) => {
        console.log(res);
        setAnnouncement(res.data);
      }).catch((err) => {
        alert(err.message);
      })
    }
    getAnnouncement();
  }, [])

  // Function to handle deletion of an announcement
  const onDeleteClick = async (userId) => {
    await axios.delete(`http://localhost:8090/employeeannouncement/delete/${userId}`);
    alert('Announcement Deleted Successfully');
    window.location.reload(); // Refresh page after successful deletion
  }

  // Function to handle viewing an announcement
  const onViewClick = (announcement) => {
    setSelectedAnnouncement(announcement);
  }

  // Card component to display announcement details
  const AnnouncementCard = ({ announcement, onClose  }) => (
    <div class="bg-white rounded-lg shadow-lg p-4 mb-20">
       <button
      className="absolute top-0 right-0 bg-gray-200 hover:bg-gray-300 text-gray-800 hover:text-gray-900 rounded-full h-6 w-6 flex items-center justify-center"
      onClick={onClose}
    >
        X
    </button> 
      <h2 className="text-lg font-bold mb-2">{announcement.title}</h2>
      <p className="text-sm text-gray-500 mb-4">{announcement.date}</p>
      <p className="text-base text-gray-700">{announcement.announcement}</p>
    </div>
    
  );

    // Function to handle closing the card
    const onCloseCard = () => {
        setSelectedAnnouncement(null);
    };

  return (
    <div>
      {/* Table to display announcement details */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          {/* Table header */}
          <thead>
            <tr className="bg-blue-500 text-white">
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">ID</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Date</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Title</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          {/* Table body */}
          <tbody>
            {/* Loop through announcement details and display in table rows */}
            {employeeannouncement.map((announcement, index) => (
              <tr key={index} className="bg-white border-b border-gray-200 hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{announcement.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{announcement.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex items-center justify-start gap-2">
                    {/* Edit announcement button */}
                    <a href={`/editannouncement/${announcement._id}`} type="button" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                      Edit
                    </a>
                    {/* View announcement button */}
                    <button onClick={() => onViewClick(announcement)} className="bg-transparent hover:bg-yellow-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                      View
                    </button>
                    {/* Delete announcement button */}
                    <button onClick={() => onDeleteClick(announcement._id)} className="bg-transparent hover:bg-red-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Button to add a new announcement */}
      <div className="mt-4">
        <a href="/addannouncement" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add
        </a>
      </div>

      {/* Display selected announcement in a card */}
      {selectedAnnouncement && (
        <div className="mt-4">
          <AnnouncementCard announcement={selectedAnnouncement} onClose={onCloseCard} />
        </div>
      )}

    </div>

    
  );
};
