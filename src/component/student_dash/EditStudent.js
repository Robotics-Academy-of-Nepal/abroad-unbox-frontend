import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const EditDetails = () => {
  const [studentData, setStudentData] = useState({
    name: "",
    grade: "",
    percentage: "",
    work_experience: "",
    research_paper: "",
    image: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { userId } = location.state || {};

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("User is not authenticated. Please log in.");
          return;
        }

        const studentResponse = await axios.get(
          `http://192.168.1.29:8000/api/student-details/?userid=${userId}`,
          { headers: { Authorization: `Token ${token}` } }
        );
        const student = studentResponse.data[0];
        if (student) {
          setStudentData({
            name: student.name || "",
            grade: student.grade || "",
            percentage: student.percentage || "",
            work_experience: student.work_experience || "",
            research_paper: student.research_paper || "",
            image: student.image || "",
          });
        } else {
          setError("No student data found.");
        }
      } catch (error) {
        setError("Error fetching data. Please try again later.");
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, [userId]);

  const handleChange = (e) => {
    setStudentData({
      ...studentData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("User is not authenticated. Please log in.");
        return;
      }

      const response = await axios.put(
        `http://192.168.1.29:8000/api/student-details/${userId}/`,
        studentData,
        { headers: { Authorization: `Token ${token}` } }
      );

      if (response.status === 200) {
        setSuccess("Student details updated successfully.");
        setTimeout(() => navigate("/student-details"), 2000); 
      }
    } catch (error) {
      setError("Error updating student details. Please try again.");
      console.error("Update error:", error);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 border border-gray-300 shadow-md">
      {error && <div className="text-red-500">{error}</div>}
      {success && <div className="text-green-500">{success}</div>}
      <h2 className="text-2xl font-semibold mb-4">Edit Student Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={studentData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="grade" className="block text-sm font-medium">Grade</label>
          <input
            type="text"
            id="grade"
            name="grade"
            value={studentData.grade}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="percentage" className="block text-sm font-medium">Percentage</label>
          <input
            type="text"
            id="percentage"
            name="percentage"
            value={studentData.percentage}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="work_experience" className="block text-sm font-medium">Work Experience</label>
          <textarea
            id="work_experience"
            name="work_experience"
            value={studentData.work_experience}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="research_paper" className="block text-sm font-medium">Research Paper</label>
          <input
            type="url"
            id="research_paper"
            name="research_paper"
            value={studentData.research_paper}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium">Image URL</label>
          <input
            type="text"
            id="image"
            name="image"
            value={studentData.image}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditDetails;
