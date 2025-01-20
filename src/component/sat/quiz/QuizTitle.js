import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuizTitle = () => {
  const [formData, setFormData] = useState({
    topic_id: null,
    subtopic_id: null,
    title: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const topic_id = searchParams.get('topic_id');
    const subtopic_id = searchParams.get('subtopic_id');

    setFormData((prevData) => ({
      ...prevData,
      topic_id: topic_id ? parseInt(topic_id) : null,
      subtopic_id: subtopic_id ? parseInt(subtopic_id) : null,
    }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title) {
      setError('Title is required');
      return;
    }

    setLoading(true);
    const data = new FormData();
    data.append('title', formData.title);

    // Conditionally append topic or subtopic based on availability
    if (formData.topic_id) {
      data.append('topic', formData.topic_id);
    }

    if (formData.subtopic_id) {
      data.append('subtopic', formData.subtopic_id);
    }

    try {
      const response = await axios.post('http://192.168.1.29:8000/api/quizzes/', data);

      if (response.status === 200) {
        console.log('Quiz created successfully:', response.data);
      }
    } catch (error) {
      setError('Failed to create quiz');
      console.error('Error creating quiz:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleTitleChange = (e) => {
    setFormData({ ...formData, title: e.target.value });
  };

  return (
    <div className='md:w-[50%] w-[85%] mx-auto my-6'>
      <form className='shadow-md block w-[80%] items-center justify-center shadow-gray-200 p-4 mx-auto]' onSubmit={handleSubmit}>
        <h2 className='text-lg font-bold'>Quiz Title</h2>
        <label htmlFor="title" className='text-semibold'>Quiz Title</label> <br/>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleTitleChange}
          className='mt-2 border-gray-300 p-2 border w-[60%]'
          required
        /><br/>
        {error && <p className="text-red-500">{error}</p>}<br/>
        
        <button type="submit" className='rounded-md px-3 py-2 bg-blue-900 hover:bg-blue-950 text-white font-semibold'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default QuizTitle;
