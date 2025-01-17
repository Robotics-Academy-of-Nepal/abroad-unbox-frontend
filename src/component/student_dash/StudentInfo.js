import React, { useEffect, useState } from "react";
const StudentDetails = ({ userId }) => {
  const [studentDetails, setStudentDetails] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchStudentDetails = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/student-details/?userid=${userId}`
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setStudentDetails(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchStudentDetails();
  }, [userId]);
  if (error) {
    return <div>Error: {error}</div>;
  }
  if (!studentDetails) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Student Details</h1>
      <p><strong>Name:</strong> {studentDetails.name}</p>
      <p><strong>Grade:</strong> {studentDetails.grade}</p>
      <p><strong>Percentage:</strong> {studentDetails.percentage}</p>
      <p><strong>Work Experience:</strong> {studentDetails.work_experience}</p>
      <p><strong>Research Paper:</strong> {studentDetails.research_paper}</p>
      <img 
        src={studentDetails.image} 
        alt="Student" 
        style={{ width: "200px", height: "200px", objectFit: "cover" }} 
      />
    </div>
  );
};
export default StudentDetails;