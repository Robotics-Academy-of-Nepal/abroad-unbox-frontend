import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const EssayBody = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState({
    id: null,
    title: '',
    video_link: '',
    description: '',
    about: '',
    ppt_file: ''
  });
  const [contentLoaded, setContentLoaded] = useState(false);  // State to track if content is displayed

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');

      if (token) {
        try {
          const response = await axios.get('http://192.168.1.29:8000/api/get-user/', {
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
        const response = await axios.get('http://192.168.1.29:8000/api/essay-writing/');
        const fetchedContent = response.data[0];
        if (fetchedContent) {
          setContent({
            id: fetchedContent.id,
            title: fetchedContent.title,
            video_link: fetchedContent.video_link,
            description: fetchedContent.description,
            about: fetchedContent.about,
            ppt_file: fetchedContent.ppt_file
          });
          setContentLoaded(true);  // Set content as loaded
        } else {
          setContentLoaded(false);  // If no content is found
        }
      } catch (error) {
        console.error('Error fetching content data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
    fetchContentData();
  }, []);

  const handleDelete = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        await axios.delete(
          `http://192.168.1.29:8000/api/essay-writing/${content.id}/`,
          { headers: { 'Authorization': `Token ${token}` } }
        );
        alert('Content deleted successfully!');
        setContentLoaded(false);  // Content is deleted, so hide the button
        setContent({});  // Clear the content data
      } catch (error) {
        console.error('Error deleting content', error);
      }
    }
  };

  return (
    <div>
      <div className="container mx-auto p-6">
        <div className="flex justify-between mb-2">
          <h1 className="text-2xl font-bold mb-4">{content.title || 'Failed to get title'}</h1>
          {!contentLoaded && isAdmin && (
            <button>
              <Link className="bg-green-600 px-4 py-3 text-lg text-white rounded-lg" to="/essay-addcontent">
                Add Content
              </Link>
            </button>
          )}
        </div>

        {contentLoaded ? (
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2">
              {content.video_link ? (
                <iframe className="w-full h-64 md:h-full" src={content.video_link} ></iframe>
              ) : (
                <p className="p-4 shadow-inner shadow-gray-100">Video is not available</p>
              )}
            </div>

            <div className="w-full md:w-1/2 p-4 border-b-slate-200 shadow-inner shadow-gray-200">
              {content.ppt_file ? (
                <iframe
                  src={`${content.ppt_file}#toolbar=0&navpanes=0&scrollbar=0`}
                  width="100%"
                  height="400"
                  title="Presentation Slides"
                  style={{ border: "none" }}
                ></iframe>
              ) : (
                <p>No presentation slides available.</p>
              )}
            </div>
          </div>
        ) : (
          <p>No content available.</p>
        )}

        <div className="my-3 text-justify">
          <h2 className="text-lg font-semibold">Description:</h2>
          <p className="mb-4">{content.description || 'No description available.'}</p>

          <h2 className="text-lg font-semibold">About:</h2>
          <p className="mb-4">{content.about || 'No about information available.'}</p>
        </div>

        {isAdmin && contentLoaded && (
          <div className="flex gap-4 mt-4">
            <Link
              to={`/essay-editcontent/${content.id}`}
              className="text-green-600 underline"
            >
              Edit Content
            </Link>
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

export default EssayBody;
