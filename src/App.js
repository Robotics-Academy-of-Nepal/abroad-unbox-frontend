import { Routes, Route } from 'react-router-dom';
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./component/home/Home";
import StudentDash from './component/student_dash/StudentDash';
import AppTimeline from './component/application_timeline/AppTimeline';
import EssayWriting from './component/essay_writing/EssayWriting';
import Info from './component/info/Info';
import Reading from './component/sat/verbal/Reading';
import TopHeader from './component/TopHeader';
import Login from './component/forms/Login';
import AddStudent from './component/add_student/AddStudent';
import Signup from './component/forms/StudentRegister';
import AddContentForm from './component/info/AddContentForm';
import PrivateRoute from './component/admin/PrivateRoute';
import React from 'react';
import EditContentForm from './component/info/EditContent';
import StudentForm from './component/student_dash/StudentForm';
import AddEssay from './component/essay_writing/AddEssay';
import EditEssay from './component/essay_writing/EditEssay';
import StudentDetails from './component/student_dash/StudentInfo';
import EditDetails from './component/student_dash/EditStudent';
import DocumentUploadForm from './component/student_dash/UplaodDocs';
import EditDocs from './component/student_dash/EditDocs';
import FetchDocuments from './component/student_dash/FetchDocs';
import AddTopic from './component/sat/AddTopic';
import TopicDetail from './component/sat/TopicDetail';
import AddSubTopic from './component/sat/AddSubTopic';
import SubTopicDetail from './component/sat/SubTopicDetail';
import AddContent from './component/sat/AddContent';
import QuizTitle from './component/sat/quiz/QuizTitle';
import QuizQuestion from './component/sat/quiz/QuizQuestion';

function App() {
  const [isStaff, setIsStaff] = React.useState(false);

  return (
    <div className="App">
      <TopHeader />
      <Header setIsStaff={setIsStaff} />
      <Routes>
        <Route path="/abroad-unbox" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/sat/reading" element={<Reading />} />
        <Route path="/studentdash" element={<StudentDash />} />
        <Route path="/applicationtimeline" element={<AppTimeline />} />
        <Route path="/essaywriting" element={<EssayWriting />} />
        <Route path="/info" element={<Info />} />

        {/* routing for sat topic section */}
        <Route path="/addtopic" element={<AddTopic/>} />
        <Route path="/addsubtopic/:topicId" element={<AddSubTopic/>} />

        <Route path="/topics/:id" Component={TopicDetail} />
        <Route path="/subtopics/:id" Component={SubTopicDetail} />
        <Route path="/addcontent" element={<AddContent/>} />
        <Route path="/addquiz" element={<QuizTitle/>} />
        <Route path="/addquestion" element={<QuizQuestion/>} />

        {/* routing for login */}
        <Route path="/login" element={<Login />} />

        {/* private routing for admin only */}
        <Route path="/addstudent" element={<PrivateRoute isStaff={isStaff}><AddStudent /></PrivateRoute>} />
        <Route path="/info-addcontent" element={<PrivateRoute isStaff={isStaff}><AddContentForm /></PrivateRoute>} />
        <Route path="/signup" element={<PrivateRoute isStaff={isStaff}><Signup /></PrivateRoute>} />
        <Route path="/info-editcontent/:id"element={<PrivateRoute isStaff={isStaff}><EditContentForm /></PrivateRoute>} />
        <Route path="/essay-addcontent"element={<PrivateRoute isStaff={isStaff}><AddEssay /></PrivateRoute>} />
        <Route path="/essay-editcontent/:id"element={<PrivateRoute isStaff={isStaff}><EditEssay /></PrivateRoute>} />
        
        {/* roting for student dashboard */}
        <Route path="/studentform" element={<StudentForm/>} />
        <Route path="/studentinfo/:userid" element={<StudentDetails/>} />
        <Route path="/edit-students/:userId" element={<EditDetails/>} />
        <Route path="/upload-docs" element={<DocumentUploadForm/>} />
        <Route path="/edit-docs/:userid" element={<EditDocs/>} />
        <Route path="/fetch-docs/:userid" element={<FetchDocuments/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
