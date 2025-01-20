import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const QuizQuestion = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get quiz ID from the query string
  const queryParams = new URLSearchParams(location.search);
  const quizId = queryParams.get('id');

  const [formData, setFormData] = useState({
    quiz: quizId,  // Set quiz ID from query params
    passage: '',
    question: '',
    option_1: '',
    option_2: '',
    option_3: '',
    option_4: '',
    answer: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = { ...formData };

      const response = await axios.post('http://192.168.1.29:8000/api/questions/', payload);

      if (response.status === 201) {
        alert('Question added successfully!');
        navigate('/abroad-unbox');
      }
    } catch (error) {
      console.error('Error submitting the quiz question:', error);
      alert('Failed to add the question.');
    }
  };

  return (
    <div className="p-6 w-full">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center text-black mb-6">Add Quiz Question</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Passage */}
          <div>
            <label htmlFor="passage" className="block text-lg font-medium text-gray-700">Passage</label>
            <input
              type="text"
              name="passage"
              value={formData.passage}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Question */}
          <div>
            <label htmlFor="question" className="block text-lg font-medium text-gray-700">Question</label>
            <input
              type="text"
              name="question"
              value={formData.question}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Options */}
          <div>
            <label htmlFor="options" className="block text-lg font-medium text-gray-700">Add Options</label>
            <div className="space-y-4">
              {['option_1', 'option_2', 'option_3', 'option_4'].map((option, index) => (
                <input
                  key={index}
                  type="text"
                  name={option}
                  value={formData[option]}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={`Option ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Answer */}
          <div>
            <label htmlFor="answer" className="block text-lg font-medium text-gray-700">Answer</label>
            <input
              type="text"
              name="answer"
              value={formData.answer}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-900 text-white p-3 rounded-lg w-full md:w-1/4 hover:bg-blue-950 transition duration-300"
            >
              Submit Question
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuizQuestion;
