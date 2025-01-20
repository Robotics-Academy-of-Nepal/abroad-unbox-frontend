import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddTopic = () => {
  const [formData, setFormData] = useState({
    name: '',
    section: '',
  });
const navigate =useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const { name, section } = formData;

    // Check if all fields are filled
    if (!name || !section) {
      alert('Please fill all fields');
      return;
    }

    try {
      // Send POST request to backend API
      const response = await axios.post('http://192.168.1.29:8000/api/topics/', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Topic added successfully:', response.data);
      alert('Topic added successfully!');
      navigate('/sat/reading');
      
      setFormData({
        name: '',
        section: '',
      });
    } catch (error) {
      console.error('Error adding topic:', error);
      alert('Error adding topic. Please try again.');
    }
  };

  return (
    <div className="w-[90%] max-w-md mx-auto p-6 border border-gray-300 my-6 shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Add Topic</h2>
      
      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium">
            Topic Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter topic name"
          />
        </div>

        {/* Section Select */}
        <div className="mb-4">
          <label htmlFor="section" className="block text-sm font-medium">
            Select Category
          </label>
          <select
            id="section"
            name="section"
            value={formData.section}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select category</option>
            <option value="verbal">Verbal</option>
            <option value="quant">Quant</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-900 text-white p-2 rounded hover:bg-blue-950"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTopic;
