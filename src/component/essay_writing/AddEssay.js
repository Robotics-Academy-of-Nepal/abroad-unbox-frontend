import React, { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

const AddEssay = () => {
  const [formData, setFormData] = useState({
    title: '',
    video_link: '',
    description: '',
    about: '',
    ppt_file: null,  // To hold the PPT file
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  
  // Handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (e.target.type === 'file') {
      setFormData({ ...formData, ppt_file: e.target.files[0] }); // Handle file input
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('title', formData.title);
    data.append('video_link', formData.video_link);
    data.append('description', formData.description);
    data.append('about', formData.about);
    if (formData.ppt_file) {
      data.append('ppt_file', formData.ppt_file); 
    }

    try {
      const response = await axios.post(
        'http://192.168.1.54:8000/api/essay-writing/', 
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data', 
            'Authorization':`Token ${token}`,
          },
        }
      );
      setMessage('Content added successfully!');
      navigate('/essaywriting');
      setFormData({
        title: '',
        video_link: '',
        description: '',
        about: '',
        ppt_file: null,
      });
    } catch (error) {
      setMessage('Failed to add content.');
      console.error('Error posting content:', error);
    }
  };

  return (
    <div className="md:w-[60%] w-[90%] mx-auto p-6 shadow-inner shadow-gray-100 my-4 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add Essay Content</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-lg">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-[80%] mx-auto p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="video_link" className="block text-lg">Video Link:</label>
          <input
            type="url"
            id="video_link"
            name="video_link"
            value={formData.video_link}
            onChange={handleChange}
            className="w-[80%] mx-auto p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-lg">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-[80%] mx-auto p-2 border border-gray-300 rounded-md"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="about" className="block text-lg">About:</label>
          <textarea
            id="about"
            name="about"
            value={formData.about}
            onChange={handleChange}
            className="w-[80%] mx-auto p-2 border border-gray-300 rounded-md"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="ppt_file" className="block text-lg">PPT File:</label>
          <input
            type="file"
            id="ppt_file"
            name="ppt_file"
            accept=".ppt, .pptx"
            onChange={handleChange}
            className="w-[80%] mx-auto p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <button type="submit" className="bg-blue-600 mx-auto text-white px-4 py-2 rounded-md">
          Submit
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default AddEssay;
