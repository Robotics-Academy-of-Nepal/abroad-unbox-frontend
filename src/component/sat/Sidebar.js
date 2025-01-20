import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [topics, setTopics] = useState([]);
  const [subtopics, setSubtopics] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Fetch all topics
    const fetchTopics = async () => {
      try {
        const response = await axios.get("http://192.168.1.29:8000/api/topics/");
        setTopics(response.data);
      } catch (error) {
        console.error("Error fetching topics:", error);
      }
    };

    // Check admin status
    const checkAdminStatus = async () => {
      try {
        const token = localStorage.getItem("token");
        const userResponse = await axios.get("http://192.168.1.29:8000/api/get-user/", {
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        const user = userResponse.data;
        if (user.is_staff) {
          setIsAdmin(true);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchTopics();
    checkAdminStatus();
  }, []);

  // Fetch subtopics for a specific topic
  const fetchSubtopics = async (topicId) => {
    try {
      const response = await axios.get(`http://192.168.1.29:8000/api/subtopics/?topic_id=${topicId}`);
      console.log(response);
      setSubtopics((prev) => ({
        ...prev,
        [topicId]: response.data,
      }));
    } catch (error) {
      console.error(`Error fetching subtopics for topic ${topicId}:`, error);
    }
  };

  const verbalTopics = topics.filter((topic) => topic.section === "verbal");
  const quantTopics = topics.filter((topic) => topic.section === "quant");

  return (
    <div className="flex h-full max-h-screen">
      {/* Sidebar */}
      <div className="w-64 h-full bg-gray-100 p-4 md:border-r-2 md:border-[#020346] shadow-md shadow-black">
        {/* Add Topic Link, visible only to admins */}
        {isAdmin && (
          <ul>
            <li>
              <Link to="/addtopic" className="underline text-green-500">
                Add Topic
              </Link>
            </li>
          </ul>
        )}

        {/* Verbal Section */}
        <div className="mt-6">
          <h2 className="font-bold text-lg cursor-default">Verbal</h2>
          <ul>
            {verbalTopics.map((topic) => (
              <li key={topic.id} className="mb-2">
                {/* Topic Name */}
                <div
                  className="text-blue-700 cursor-pointer"
                  onClick={() => fetchSubtopics(topic.id)}
                >
                  <Link to={`/topics/${topic.id}`}>{topic.name}</Link>
                </div>
                {/* Subtopics List */}
                {subtopics[topic.id] && (
                  <ul className="ml-4 mt-1">
                    {subtopics[topic.id].map((subtopic) => (
                      <li key={subtopic.id} className="text-gray-700">
                        <Link to={`/subtopics/${subtopic.id}`}>{subtopic.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Quant Section */}
        <div className="mt-6">
          <h2 className="font-bold text-lg cursor-default">Quant</h2>
          <ul>
            {quantTopics.map((topic) => (
              <li key={topic.id} className="mb-2">
                {/* Topic Name */}
                <div
                  className="text-blue-700 cursor-pointer"
                  onClick={() => fetchSubtopics(topic.id)}
                >
                  <Link to={`/topics/${topic.id}`}>{topic.name}</Link>
                </div>
                {/* Subtopics List */}
                {subtopics[topic.id] && (
                  <ul className="ml-4 mt-1">
                    {subtopics[topic.id].map((subtopic) => (
                      <li key={subtopic.id} className="text-gray-700">
                        <Link to={`/subtopics/${subtopic.id}`}>{subtopic.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
