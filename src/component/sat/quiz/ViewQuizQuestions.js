import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewQuizQuestions = ({ quizId }) => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [isQuizAnswered, setIsQuizAnswered] = useState(false);
  const [score, setScore] = useState(null); // Updated to store score after submission

  // Fetch quiz questions when the quizId changes
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          `http://192.168.1.29:8000/api/questions/?quiz_id=${quizId}`
        );

        // Transform the data to include an options array
        const transformedQuestions = response.data.map((q) => ({
          id: q.id,
          text: q.question,
          passage: q.passage,
          options: [q.option_1, q.option_2, q.option_3, q.option_4],
          answer: q.answer,
        }));

        setQuestions(transformedQuestions || []);
        setAnswers({});
        setScore(null); // Reset score when a new quiz is loaded
        setIsQuizAnswered(false);
      } catch (error) {
        console.error("Error fetching quiz questions:", error);
      }
    };

    if (quizId) fetchQuestions();
  }, [quizId]);

  // Handle answer selection for each question
  const handleAnswerChange = (questionId, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  // Check if all questions are answered
  useEffect(() => {
    if (questions.length > 0) {
      const allAnswered = questions.every(
        (question) => answers[question.id] !== undefined
      );
      setIsQuizAnswered(allAnswered);
    }
  }, [answers, questions]);

  // Handle quiz submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    let totalScore = 0;

    // Calculate the score based on answers
    questions.forEach((question) => {
      if (answers[question.id] === question.answer) {
        totalScore += 1;
      }
    });

    setScore(totalScore); // Update score state with the calculated score

    const token = localStorage.getItem("token");
    try {
      await axios.post(
        "http://192.168.1.29:8000/api/quiz-score/",
        {
          quiz: quizId,
          score: totalScore,
        },
        {
          headers: {
            Authorization: `Token ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      alert("Quiz submitted successfully!");
    } catch (error) {
      console.error("Error submitting quiz score:", error);
      alert("An error occurred while submitting the quiz.");
    }
  };

  // Render nothing if no quizId is provided
  if (!quizId) {
    return null;
  }

  return (
    <div className="my-4">
      <h3 className="text-xl font-semibold">Quiz Questions</h3>
      <form onSubmit={handleSubmit}>
        {questions?.length > 0 ? (
          questions.map((question) => (
            <div key={question.id} className="my-4">
              <p className="font-semibold">{question.text}</p>
              {question.passage && <p className="italic">{question.passage}</p>}
              <div className="space-y-2">
                {question.options.map((option, index) => (
                  <label key={index} className="flex items-center">
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value={option}
                      checked={answers[question.id] === option}
                      onChange={() => handleAnswerChange(question.id, option)}
                      className="mr-2"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>No questions available for this quiz.</p>
        )}

        {/* Submit Button */}
        {isQuizAnswered && (
          <button type="submit" className="mt-4 text-white bg-blue-500 py-2 px-4 rounded">
            Submit Quiz
          </button>
        )}
      </form>

      {/* Display the score */}
      {score !== null && (
        <div className="mt-4 text-xl">
          <h4>Your Score: {score}</h4>
        </div>
      )}
    </div>
  );
};

export default ViewQuizQuestions;
