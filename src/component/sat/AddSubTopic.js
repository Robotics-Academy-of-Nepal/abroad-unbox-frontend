import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const AddSubTopic = () => {
  const { topicId } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    topic: topicId || '', 
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.topic) {
      alert('Please fill all fields.');
      return;
    }

    try {
      setLoading(true);
      const payload = {
        name: formData.name,
        topic: formData.topic, 
      };

      const response = await axios.post(
        `http://192.168.1.29:8000/api/subtopics/`,
        payload,
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );

      console.log('SubTopic added successfully:', response.data);
      alert('SubTopic added successfully!');
      navigate('/sat/reading');
      setFormData((prevState) => ({
        ...prevState,
        name: '',
      }));
    } catch (error) {
      console.error('Error adding subtopic:', error);
      alert('Error adding subtopic. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[90%] max-w-md mx-auto p-6 border border-gray-300 my-6 shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Add SubTopic</h2>

      {loading && <p className="text-blue-500 bg-blue-100 p-2 rounded">Loading...</p>}

      <form onSubmit={handleSubmit}>
        {/* Subtopic Name Input */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium">
            Subtopic Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter subtopic name"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-900 text-white p-2 rounded hover:bg-blue-950"
          disabled={loading || !formData.topic}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddSubTopic;
