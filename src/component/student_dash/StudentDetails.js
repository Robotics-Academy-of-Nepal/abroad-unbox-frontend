import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import FetchDocuments from "./FetchDocs";

const StudentDetails = () => {
  const [studentData, setStudentData] = useState({
    image: "",
    name: "",
    grade: "",
    percentage: "",
    work_experience: "",
    research_paper: "",
  });
  const [userId, setUserId] = useState(null);
  const [documentsSubmitted, setDocumentsSubmitted] = useState(false); 
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("User is not authenticated. Please log in.");
          return;
        }

        const userResponse = await axios.get("http://192.168.1.29:8000/api/get-user/", {
          headers: { Authorization: `Token ${token}` },
        });

        const userId = userResponse.data?.id;
        setUserId(userId);

        if (userId) {
          // Fetch student details
          const studentResponse = await axios.get(
            `http://192.168.1.29:8000/api/student-details/?userid=${userId}`,
            { headers: { Authorization: `Token ${token}` } }
          );

          const student = studentResponse.data[0];
          if (student) {
            setStudentData({
              id: student.id || "",
              image: student.image || "",
              name: student.name || "",
              grade: student.grade || "",
              percentage: student.percentage || "",
              work_experience: student.work_experience || "",
              research_paper: student.research_paper || "",
            });
            console.log(studentResponse);
            console.log(studentResponse.data.id);
          } else {
            setError("No student data found.");
          }

          // Fetch document submission status from docs-upload api endpoints
          const docResponse = await axios.get(
            `http://192.168.1.29:8000/api/student-document/?userid=${userId}`,
            { headers: { Authorization: `Token ${token}` } }
          );

          // Check if documents are submitted
          const documents = docResponse.data;
          setDocumentsSubmitted(documents && documents.length > 0); 
        }
      } catch (error) {
        setError("Error fetching data. Please try again later.");
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="w-full mx-auto flex flex-col md:flex-row">
      {/* Student details section */}
      <div className="w-full md:w-[55%] text-xl text-gray-900 border-r-4 border-[#020346] shadow-md shadow-black p-6 relative">
        <button className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600">
          <Link to={studentData.name ? `/edit-students/${studentData.id}` : "/studentform"}>
            {studentData.name ? "" : "Add"}
          </Link>
        </button>
        <h1 className="text-left font-semibold text-2xl">Student Bio:</h1>
        {/* Photo and details section */}
        <div className="flex flex-col md:flex-row gap-6 my-3">
          <div>
            <img
              src={studentData.image || "/path/to/placeholder-image.jpg"}
              alt="User"
              className="w-32 h-32 object-cover border-2 border-gray-300"
            />
          </div>
          <div>
            <ul>
              <li>Name: {studentData.name || "N/A"}</li>
              <li>Grade Passed: {studentData.grade || "N/A"}</li>
              <li>GPA/Percentage: {studentData.percentage || "N/A"}</li>
            </ul>
          </div>
        </div>
        {/* Work experience and projects */}
        <ul>
          <li className="my-2">Work Experience: {studentData.work_experience || "N/A"}</li>
          Projects/Research Paper: <a href={studentData.research_paper || "#"} className="my-2 text-lg underline">Research paper</a>
        </ul>
      </div>

      {/* Updated documents section */}
      <div className="w-full md:w-[45%] p-6 relative">
        {documentsSubmitted ? (
          <button className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600">
            <Link to={`/edit-docs/${userId}`}></Link>
          </button>
        ) : (
          <button className="absolute top-4 right-4 bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600">
            <Link
              to={{
                pathname: "/upload-docs",
                state: { userId },
              }}
            >
              Add
            </Link>
          </button>
        )}
        <h2 className="text-xl font-semibold">Updated Documents:</h2>
        <FetchDocuments userId={userId} />
      </div>
    </div>
  );
};

export default StudentDetails;
