import { Routes, Route } from 'react-router-dom';
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./component/home/Home";
import StudentDash from './component/student_dash/StudentDash';
import AppTimeline from './component/application_timeline/AppTimeline';
import EssayWriting from './component/essay_writing/EssayWriting';
import Info from './component/info/Info';
import Reading from './component/sat/verbal/Reading';
import Grammar from './component/sat/verbal/Grammar';
import Contextual from './component/sat/verbal/Contextual-reference';
import Inference from './component/sat/verbal/Inference';
import TopHeader from './component/TopHeader';
import Vocabulary from './component/sat/verbal/Vocabulary';
import SectionalTest from './component/sat/verbal/SectionalTest';
import FullLength from './component/sat/verbal/FullLength';
import Basics from './component/sat/quant/Basics';
import Algebra from './component/sat/quant/Algebra';
import AdvanceMath from './component/sat/quant/AdvanceMath';
import QuantSectional from './component/sat/quant/QuantSectional';
import QuantFullLength from './component/sat/quant/QuantFullLength';
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

        {/* routing for the verbal section */}
        <Route path="/grammar" element={<Grammar />} />
        <Route path="/contextual-evidence" element={<Contextual />} />
        <Route path="/inference" element={<Inference />} />
        <Route path="/vocabulary" element={<Vocabulary />} />
        <Route path="/sectional-test" element={<SectionalTest />} />
        <Route path="/full-length-test" element={<FullLength />} />

        {/* routing for the quant section */}
        <Route path="/basic" element={<Basics />} />
        <Route path="/algebra" element={<Algebra />} />
        <Route path="/advance-math" element={<AdvanceMath />} />
        <Route path="/sectional-test-quant" element={<QuantSectional />} />
        <Route path="/full-length-test-quant" element={<QuantFullLength />} />

        {/* routing for login */}
        <Route path="/login" element={<Login />} />
        <Route path="/studentform" element={<StudentForm/>} />

        {/* private routing for admin only */}
        <Route path="/addstudent" element={<PrivateRoute isStaff={isStaff}><AddStudent /></PrivateRoute>} />
        <Route path="/info-addcontent" element={<PrivateRoute isStaff={isStaff}><AddContentForm /></PrivateRoute>} />
        <Route path="/signup" element={<PrivateRoute isStaff={isStaff}><Signup /></PrivateRoute>} />
        <Route path="/info-editcontent/:id"element={<PrivateRoute isStaff={isStaff}><EditContentForm /></PrivateRoute>} />
        <Route path="/essay-addcontent"element={<PrivateRoute isStaff={isStaff}><AddEssay /></PrivateRoute>} />
        <Route path="/essay-editcontent/:id"element={<PrivateRoute isStaff={isStaff}><EditEssay /></PrivateRoute>} />
        

        <Route path="/studentinfo" element={<StudentDetails/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
