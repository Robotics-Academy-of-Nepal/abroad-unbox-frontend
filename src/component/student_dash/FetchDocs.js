import React, { useState, useEffect } from "react";
import axios from "axios";

const FetchDocs = () => {
  const [documents, setDocuments] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDocuments = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("You must be logged in to view documents.");
        setLoading(false);
        return;
      }

      try {
        const userResponse = await axios.get("http://192.168.1.29:8000/api/get-user/", {
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        
        const userId = userResponse.data.id;
        console.log(userId);

        const docsResponse = await axios.get(`http://192.168.1.29:8000/api/student-document/?userid=${userId}`, {
          headers: {
            Authorization: `Token ${token}`,
          },
        });

        setDocuments(docsResponse.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching documents. Please try again.");
        setLoading(false);
        console.error("Fetch documents error:", err);
      }
    };

    fetchDocuments();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full max-w-md mx-auto p-6 border border-gray-300 shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Your Uploaded Documents</h2>

      {error && <div className="text-red-500">{error}</div>}

      {documents.length === 0 ? (
        <div>No documents found.</div>
      ) : (
        <div>
          {documents.map((doc, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-semibold">{doc.doc_name_1}</h3>
              <a
                href={`http://192.168.1.29:8000${doc.doc_file_1}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                Download Document 1
              </a>

              {doc.doc_name_2 && (
                <>
                  <h3 className="text-lg font-semibold">{doc.doc_name_2}</h3>
                  <a
                    href={`http://192.168.1.29:8000${doc.doc_file_2}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    Download Document 2
                  </a>
                </>
              )}

              {doc.doc_name_3 && (
                <>
                  <h3 className="text-lg font-semibold">{doc.doc_name_3}</h3>
                  <a
                    href={`http://192.168.1.29:8000${doc.doc_file_3}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    Download Document 3
                  </a>
                </>
              )}

              {doc.doc_name_4 && (
                <>
                  <h3 className="text-lg font-semibold">{doc.doc_name_4}</h3>
                  <a
                    href={`http://192.168.1.29:8000${doc.doc_file_4}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    Download Document 4
                  </a>
                </>
              )}

              {doc.doc_name_5 && (
                <>
                  <h3 className="text-lg font-semibold">{doc.doc_name_5}</h3>
                  <a
                    href={`http://192.168.1.29:8000${doc.doc_file_5}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    Download Document 5
                  </a>
                </>
              )}

              {doc.doc_name_6 && (
                <>
                  <h3 className="text-lg font-semibold">{doc.doc_name_6}</h3>
                  <a
                    href={`http://192.168.1.29:8000${doc.doc_file_6}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    Download Document 6
                  </a>
                </>
              )}

              {doc.doc_name_7 && (
                <>
                  <h3 className="text-lg font-semibold">{doc.doc_name_7}</h3>
                  <a
                    href={`http://192.178.1.29:8000${doc.doc_file_6}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    Download Document 7
                  </a>
                </>
              )}

              {doc.doc_name_8 && (
                <>
                  <h3 className="text-lg font-semibold">{doc.doc_name_8}</h3>
                  <a
                    href={`http://192.168.1.29:8000${doc.doc_file_8}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    Download Document 8
                  </a>
                </>
              )}

              {doc.doc_name_9 && (
                <>
                  <h3 className="text-lg font-semibold">{doc.doc_name_9}</h3>
                  <a
                    href={`http://192.168.1.29:8000${doc.doc_file_9}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    Download Document 9
                  </a>
                </>
              )}

              {doc.doc_name_10 && (
                <>
                  <h3 className="text-lg font-semibold">{doc.doc_name_10}</h3>
                  <a
                    href={`http://192.168.1.29:8000${doc.doc_file_10}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    Download Document 10
                  </a>
                </>
              )}

            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FetchDocs;
