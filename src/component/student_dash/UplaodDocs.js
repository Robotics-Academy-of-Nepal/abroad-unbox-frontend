import React, { useEffect, useState } from "react";
import axios from "axios";

const UploadDocs = () => {
  const [formData, setFormData] = useState({
    userid:"",
    doc_name_1: "",
    doc_file_1: null,
    doc_name_2: "",
    doc_file_2: null,
    doc_name_3: "",
    doc_file_3: null,
    doc_name_4: "",
    doc_file_4: null,
    doc_name_5: "",
    doc_file_5: null,
    doc_name_6: "",
    doc_file_6: null,
    doc_name_7: "",
    doc_file_7: null,
    doc_name_8: "",
    doc_file_8: null,
    doc_name_9: "",
    doc_file_9: null,
    doc_name_10: "",
    doc_file_10: null,
  });

  useEffect(() => {
    const fetchUserID = async () => {
      const token = localStorage.getItem("token");

      try {
        const response = await axios.get("http://192.168.1.29:8000/api/get-user/", {
          headers: {
            Authorization: `Token ${token}`,
          },
        });

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

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token"); 
    if (!token) {
      setError("You must be logged in to upload documents.");
      return;
    }

    const form = new FormData();
    for (const key in formData) {
      if (formData[key]) {
        form.append(key, formData[key]);
      }
    }

    try {
      const response = await axios.post(
        "http://192.168.1.29:8000/api/student-document/",
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Token ${token}`,
          },
        }
      );
      setSuccess("Documents uploaded successfully!");
      setError(""); 
    } catch (err) {
      setError("Error uploading documents. Please try again.");
      setSuccess(""); 
      console.error("Upload error:", err);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 border border-gray-300 shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Upload Documents</h2>
      {error && <div className="text-red-500">{error}</div>}
      {success && <div className="text-green-500">{success}</div>}
      <form onSubmit={handleSubmit}>
        {[...Array(10)].map((_, index) => {
          const docIndex = index + 1;
          return (
            <div key={docIndex} className="mb-4">
              <label
                htmlFor={`doc_name_${docIndex}`}
                className="block text-sm font-medium"
              >
                Document Name {docIndex}
              </label>
              <input
                type="text"
                id={`doc_name_${docIndex}`}
                name={`doc_name_${docIndex}`}
                value={formData[`doc_name_${docIndex}`]}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              <label
                htmlFor={`doc_file_${docIndex}`}
                className="block text-sm font-medium mt-2"
              >
                Document File {docIndex}
              </label>
              <input
                type="file"
                id={`doc_file_${docIndex}`}
                name={`doc_file_${docIndex}`}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          );
        })}
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Upload Documents
        </button>
      </form>
    </div>
  );
};

export default UploadDocs;
