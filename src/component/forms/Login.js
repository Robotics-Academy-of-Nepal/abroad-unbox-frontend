import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('authToken');
//     if (token) {
//       navigate('/');
//     }
//   }, [navigate]);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('', formData, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       const { token, user } = response.data;
//       localStorage.setItem('authToken', token);
//       localStorage.setItem('user', JSON.stringify(user)); 

//       if (user.is_staff) {
//         navigate('/admin/adminhome');
//       } else {
//         navigate('/');
//       }

//       window.location.reload();
//     } catch (error) {
//       console.log(error);
//       setError('Invalid credentials, please try again.');
//     }
//   };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md my-12 px-10 p-6">
      <h2 className="mb-4 text-2xl font-bold text-center">Login</h2>
      {/* {error && <p className="text-center text-red-500">{error}</p>} */}
      <form>
        {/* onSubmit={handleSubmit} */}
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-950">Username</label>
          <input
            type="username"
            name="username"
            value={formData.username}
            // onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-950">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            // onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button type="submit" className="w-full py-2 text-white bg-blue-900 rounded-lg">
          Login
        </button>

        {/* <h2 className="mt-2 text-center">Don't have an account?</h2>
        <Link to="/signup">
          <h2 className="px-3 py-2 mt-2 font-semibold text-center">Signup</h2>
        </Link> */}
      </form>
    </div>
  );
};

export default Login;