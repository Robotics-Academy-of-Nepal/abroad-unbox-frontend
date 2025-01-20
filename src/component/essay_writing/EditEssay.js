import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditEssay = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    video_link: '',
    description: '',
    about: '',
    ppt_file: null,
  });

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const token= localStorage.getItem('token');
  // Fetch existing content details
  useEffect(() => {
    const fetchContent = async () => {
      try {
        // setLoading(true);
        const response = await axios.get(
          `http://192.168.1.29:8000/api/essay-writing/${id}/`,  
          { 
            headers: { 
              'Authorization': `Token ${token}`  
            }
          }
        );
        setFormData({
          title: response.data.title,
          video_link: response.data.video_link,
          description: response.data.description,
          about: response.data.about,
          ppt_file: null,
        });
      } catch (error) {
        setMessage('Failed to fetch content.');
        console.error('Error fetching content:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [id]);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  // Submit the updated content
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
      setLoading(true);
      const response = await axios.put(
        `http://192.168.1.29:8000/api/essay-writing/${id}/`,
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization':`Token ${token}`,
          },
        }
      );
      setMessage('Content updated successfully!');
      navigate('/essaywriting'); // Redirect after successful update
    } catch (error) {
      setMessage('Failed to update content.');
      console.error('Error updating content:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="md:w-[60%] w-[90%] mx-auto p-6 shadow-lg shadow-gray-300 my-4 rounded-lg bg-white">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Edit Content</h2>
      {loading && <p className="text-blue-600">Loading...</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-lg font-medium text-gray-700">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="video_link" className="block text-lg font-medium text-gray-700">Video Link:</label>
          <input
            type="url"
            id="video_link"
            name="video_link"
            value={formData.video_link}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-lg font-medium text-gray-700">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="about" className="block text-lg font-medium text-gray-700">About:</label>
          <textarea
            id="about"
            name="about"
            value={formData.about}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="ppt_file" className="block text-lg font-medium text-gray-700">PPT File (optional):</label>
          <input
            type="file"
            id="ppt_file"
            name="ppt_file"
            accept=".ppt, .pptx"
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md"
          >
            Update Content
          </button>
        </div>
      </form>
      {message && <p className="mt-4 text-center text-red-600">{message}</p>}
    </div>
  );
};

export default EditEssay;
