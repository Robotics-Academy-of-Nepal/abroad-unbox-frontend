import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Sidebar from "./Sidebar";
import ViewQuizQuestions from "./quiz/ViewQuizQuestions";

const TopicDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState({
    title: "",
    video_link: "",
    description: "",
    about: "",
    ppt_file: "",
  });
  const [quizzes, setQuizzes] = useState([]);
  const [selectedQuizId, setSelectedQuizId] = useState(null);
  const [isQuizDropdownOpen, setQuizDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAdmin, setIsAdmin] =useState(false);

  // Fetch content details and quizzes
  useEffect(() => {
    const fetchContentDetail = async () => {
      try {
        const responseContent = await axios.get(
          `http://192.168.1.29:8000/api/contents/?topic_id=${id}`
        );

        if (responseContent.data && responseContent.data.length > 0) {
          const content = responseContent.data[0];
          setData({
            title: content.title || "",
            video_link: content.video_link || "",
            description: content.description || "",
            about: content.about || "",
            ppt_file: content.ppt_file || "",
          });
        } else {
          setError("No content available.");
        }

        const responseQuizzes = await axios.get(
          `http://192.168.1.29:8000/api/quizzes/?topic_id=${id}`
        );
        setQuizzes(responseQuizzes.data || []);
      } catch (error) {
        console.error("Error fetching content details:", error);
        setError("Failed to load content details.");
      } finally {
        setLoading(false);
      }
    };
    const checkAdminStatus = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get("http://192.168.1.29:8000/api/get-user/",{
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        setIsAdmin(response.data.is_staff);
      } catch (error) {
        console.error("Error fetching admin status:", error);
        setIsAdmin(false);
      }
    };

    fetchContentDetail();
    checkAdminStatus();

  }, [id]);

  

  if (loading) return <div>Loading...</div>;

  return (
    <div className="flex w-full">
      <div className="w-[35%] md:w-[20%]">
        <Sidebar />
      </div>
      <div className="w-[70%] md:w-[80%] p-4 md:p-2">
      <div className="">
      {isAdmin && ( // Render links only if the user is an admin
          <div className="flex justify-around">
            <Link to={`/addsubtopic/${id}`} className="text-green-500 underline">
              Add SubTopic
            </Link>
            <Link to={`/addcontent?topic_id=${id}`} className="text-blue-500 underline">
              Add Content
            </Link>
          </div>
        )}
          {/* <Link to={`/addsubtopic/${id}`} className="text-green-500 underline">Add SubTopic</Link>
          <Link to={`/addcontent?topic_id=${id}`} className="text-blue-500 underline">Add Content</Link> */}
        </div>
        {/* Content Section */}
        <div className="container mx-auto p-6">
          <h1 className="text-2xl font-bold mb-4">{data.title || "Failed to get title"}</h1>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2">
              {data.video_link ? (
                <iframe
                  className="w-full h-64 md:h-full"
                  src={data.video_link}
                  title="Content Video"
                ></iframe>
              ) : (
                <p className="p-4 shadow-inner shadow-gray-100">Video is not available</p>
              )}
            </div>
            <div className="w-full md:w-1/2 p-4 border-b-slate-200 shadow-inner shadow-gray-200">
              {data.ppt_file ? (
                <iframe
                  src={`${data.ppt_file}#toolbar=0&navpanes=0&scrollbar=0`}
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
          <div className="my-3 text-justify">
            <h2 className="text-lg font-semibold">Description:</h2>
            <p className="mb-4">{data.description || "No description available."}</p>

            <h2 className="text-lg font-semibold">About:</h2>
            <p className="mb-4">{data.about || "No about information available."}</p>
          </div>
        </div>

        {/* Quizzes */}
        <div className="my-4">
          <button
            className="text-blue-500 underline"
            onClick={() => setQuizDropdownOpen(!isQuizDropdownOpen)}
          >
            Quiz Titles
          </button>
          {isAdmin&&(
            <Link to={`/addquiz?topic_id=${id}`} className="text-blue-500 underline p-6">Add Quiz</Link>
          )}
          
          {isQuizDropdownOpen && (
            <div className="mt-2 space-y-2">
              {quizzes.map((quiz) => (
                <div key={quiz.id}>
                  <p className="text-lg font-semibold">{quiz.title}</p>
                  <button
                    className="text-blue-500 underline"
                    onClick={() => setSelectedQuizId(quiz.id)}
                  >
                    View Questions
                  </button><br/>
                  {isAdmin && (
                    <Link to={`/addquestion?id=${quiz.id}`} className="text-blue-500 underline">
                    Add Questions
                </Link>
                  )}
                </div>
              ))}
            </div>
          )} 
        </div>

        {/* View Quiz Questions */}
        <ViewQuizQuestions quizId={selectedQuizId} />
      </div>
    </div>
  );
};

export default TopicDetail;
