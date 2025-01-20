import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentForm = () => {
  const [formData, setFormData] = useState({
    userid: "",
    name: "",
    image: null,
    grade: "",
    percentage: "",
    work_experience: "",
    research_paper: null,
  });

  useEffect(() => {
    const fetchUserID = async () => {
      const token = localStorage.getItem("token");

      // console.log("Token fetched from localStorage:", token); 
      try {
        const response = await axios.get("http://192.168.1.29:8000/api/get-user/", {
          headers: {
            Authorization: `Token ${token}`,
          },
        });

        // Update userid in form data
        setFormData((prevData) => ({
          ...prevData,
          userid: response.data.id,
        }));
      } catch (error) {
        console.error("Error fetching user ID:", error);
      }
    };

    fetchUserID();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (!token) {
      alert("No token found! Please log in.");
      return;
    }

    const formDataToSubmit = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key]) {
        formDataToSubmit.append(key, formData[key]);
      }
    });

    try {
      const response = await axios.post(
        "http://192.168.1.29:8000/api/student-details/",
        formDataToSubmit,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Token ${token}`,
          },
        }
      );

      console.log("Form Data Submitted:", response.data);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Student Details</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Name"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-gray-200"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="image">
            Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleFileChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-gray-200"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="grade">
            Grade
          </label>
          <input
            type="text"
            id="grade"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            placeholder="Enter Grade"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-gray-200"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="percentage">
            Percentage
          </label>
          <input
            type="number"
            id="percentage"
            name="percentage"
            value={formData.percentage}
            onChange={handleChange}
            placeholder="Enter Percentage"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-gray-200"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="work_experience"
          >
            Work Experience
          </label>
          <textarea
            id="work_experience"
            name="work_experience"
            value={formData.work_experience}
            onChange={handleChange}
            placeholder="Enter Work Experience (Optional)"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-gray-200"
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="research_paper"
          >
            Research Paper
          </label>
          <input
            type="file"
            id="research_paper"
            name="research_paper"
            onChange={handleFileChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-gray-200"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-950 focus:ring focus:ring-gray-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
