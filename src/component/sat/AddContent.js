import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";

const AddContent = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    topic_id: null,
    subtopic_id: null,
    title: "",
    video_link: "",
    description: "",
    about: "",
    ppt_file: null,
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const topic_id = searchParams.get("topic_id");
    const subtopic_id = searchParams.get("subtopic_id");

    setFormData((prevData) => ({
      ...prevData,
      topic_id: topic_id ? parseInt(topic_id) : null,
      subtopic_id: subtopic_id ? parseInt(subtopic_id) : null,
    }));
  }, [searchParams]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      ppt_file: e.target.files[0],
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const data = new FormData();

    // Check if topic_id is set, then send topic, and leave subtopic as null
    if (formData.topic_id) {
      data.append("topic", formData.topic_id);
      data.append("subtopic", '');
    }

    // Check if subtopic_id is set, then send subtopic, and leave topic as null
    if (formData.subtopic_id) {
      data.append("subtopic", formData.subtopic_id);
      data.append("topic", '');
    }

    // Add other fields to FormData
    data.append("title", formData.title);
    data.append("video_link", formData.video_link);
    data.append("description", formData.description);
    data.append("about", formData.about);

    if (formData.ppt_file) {
      data.append("ppt_file", formData.ppt_file);
    }

    // Log FormData content for debugging
    for (let pair of data.entries()) {
      console.log(pair[0], pair[1]);
    }

    try {
      await axios.post("http://192.168.1.29:8000/api/contents/", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setMessage("Content added successfully!");
      setFormData({
        topic_id: null,
        subtopic_id: null,
        title: "",
        video_link: "",
        description: "",
        about: "",
        ppt_file: null,
      });
      navigate('/abroad-unbox');

    } catch (error) {
      console.error("Error adding content:", error.response || error);
      setMessage("Failed to add content. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container items-center block justify-center w-[90%] md:w-[50%] shadow-md shadow-gray-300 mx-auto p-4 m-5">
      <h1 className="text-2xl font-bold mb-4">Add Content</h1>
      {message && <p className="mb-4">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        {formData.topic_id && (
          <div>
            <label className="block font-semibold">Topic ID:</label>
            <input
              type="text"
              value={formData.topic_id}
              readOnly
              className="border p-2 w-[80%] bg-gray-100 cursor-not-allowed"
            />
          </div>
        )}
        {formData.subtopic_id && (
          <div>
            <label className="block font-semibold">Subtopic ID:</label>
            <input
              type="text"
              value={formData.subtopic_id}
              readOnly
              className="border p-2 w-[80%] bg-gray-100 cursor-not-allowed"
            />
          </div>
        )}
        <div>
          <label className="block font-semibold">Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="border p-2 w-[80%]"
            required
          />
        </div>
        <div>
          <label className="block font-semibold">Video Link:</label>
          <input
            type="url"
            name="video_link"
            value={formData.video_link}
            onChange={handleChange}
            className="border p-2 w-[80%]"
          />
        </div>
        <div>
          <label className="block font-semibold">Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="border p-2 w-[80%]"
            rows="4"
          ></textarea>
        </div>
        <div>
          <label className="block font-semibold">About:</label>
          <textarea
            name="about"
            value={formData.about}
            onChange={handleChange}
            className="border p-2 w-[80%]"
            rows="4"
          ></textarea>
        </div>
        <div>
          <label className="block font-semibold">PPT File:</label>
          <input
            type="file"
            name="ppt_file"
            onChange={handleFileChange}
            className="border p-2 w-[80%]"
            accept=".ppt, .pptx, .pdf"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-900 text-center text-white px-4 py-2 rounded hover:bg-blue-950"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Content"}
        </button>
      </form>
    </div>
  );
};

export default AddContent;
