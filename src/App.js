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

function App() {
  return (
    <div className="App">
      <TopHeader/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sat/reading" element={<Reading/>} />
        <Route path="/studentdash" element={<StudentDash/>} />
        <Route path="/applicationtimeline" element={<AppTimeline/>} />
        <Route path="/essaywriting" element={<EssayWriting/>} />
        <Route path="/info" element={<Info/>} />

        {/* routing for the verbal section */}
        <Route path="/grammar" element={<Grammar/>} />
        <Route path="/contextual-evidence" element={<Contextual/>} />
        <Route path="/inference" element={<Inference/>} />
        <Route path="/vocabulary" element={<Vocabulary/>} />
        <Route path="/sectional-test" element={<SectionalTest/>} />
        <Route path="/full-length-test" element={<FullLength/>} />

        {/* routing for the quant section */}
        <Route path="/basic" element={<Basics/>} />
        <Route path="/algebra" element={<Algebra/>} />
        <Route path="/advance-math" element={<AdvanceMath/>} />
        <Route path="/sectional-test-quant" element={<QuantSectional/>} />
        <Route path="/full-length-test-quant" element={<QuantFullLength/>} />

        {/* routing for login */}
        <Route  path="/login" element={<Login/>} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
