import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const InfoBody = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  // Single state for all content variables
  const [content, setContent] = useState({
    title: '',
    video_link: '',
    description: '',
    about: '',
    ppt_file: ''
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');

      if (token) {
        try {
          const response = await axios.get('http://192.168.1.2:8000/api/get-user/', {
            headers: { Authorization: `Token ${token}` }
          });
          setIsAdmin(response.data.is_staff);
        } catch (error) {
          console.error('Error fetching user data', error);
        }
      }
    };

    const fetchContentData = async () => {
      setLoading(true);

      try {
        const response = await axios.get('http://192.168.1.2:8000/api/info/', {
          headers: {
            'Authorization': `Token ${localStorage.getItem('token')}`
          }
        });

        const fetchedContent = response.data[0]; // Assuming response data is an array
        setContent({
          title: fetchedContent.title,
          video_link: fetchedContent.video_link,
          description: fetchedContent.description,
          about: fetchedContent.about,
          ppt_file: fetchedContent.ppt_file
        });
      } catch (error) {
        console.error('Error fetching content data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
    fetchContentData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContent((prevContent) => ({
      ...prevContent,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const token = localStorage.getItem('token');
    // if (token) {
    //   try {
    //     await axios.put(
    //       'http://192.168.1.2:8000/api/info/', 
    //       content, 
    //       { headers: { 'Authorization': `Token ${token}` } }
    //     );
    //     alert('Content updated successfully!');
    //   } catch (error) {
    //     console.error('Error updating content', error);
    //   }
    // }
  };

  const handleDelete = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        await axios.delete(
          'http://192.168.1.2:8000/api/info/delete/', 
          { headers: { 'Authorization': `Token ${token}` } }
        );
        alert('Content deleted successfully!');
      } catch (error) {
        console.error('Error deleting content', error);
      }
    }
  };

  return (
    <div>
      <div className="container mx-auto p-6">
        <div className="flex justify-between mb-2">
          <h1 className="text-2xl font-bold mb-4">{content.title || 'failed to get title'}</h1>
          <button>
            {isAdmin && (
              <Link className="bg-green-600 px-4 py-3 text-lg text-white rounded-lg" to="/info-addcontent">
                Add content
              </Link>
            )}
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Video Container */}
          <div className="w-full md:w-1/2">
            <iframe className="w-full h-64 md:h-full" src={content.video_link} >
            </iframe>
          </div>

          {/* Article Container */}
          <div className="w-full md:w-1/2 p-4 border-b-slate-200 shadow-inner shadow-gray-200">
            {content.ppt_file ? (
              <iframe
                src={content.ppt_file}
                width="100%"
                height="400"
                title="Presentation Slides"
              ></iframe>
            ) : (
              <p>No presentation slides available.</p>
            )}
          </div>
        </div>

        {/* Description section */}
        <div className="my-3 text-justify">
          <h2 className="text-lg font-semibold">Description:</h2>
          <p className="mb-4">{content.description || 'No description available.'}</p>

          <h2 className="text-lg font-semibold">About:</h2>
          <p className="mb-4">{content.about || 'No about information available.'}</p>
        </div>

        {/* Edit Form for Admin */}
        {isAdmin && (
                <div className="flex gap-4 mt-4">
                    <button
                    onClick={handleDelete}
                    className="text-green-600 underline"
                    >
                    Edit Content
                    </button>
                </div>
        )}

        {/* Admin Controls */}
        {isAdmin && (
          <div className="flex gap-4 mt-4">
            <button
              onClick={handleDelete}
              className="text-red-600 underline"
            >
              Delete Content
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoBody;
