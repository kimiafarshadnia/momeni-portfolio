import { Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './layout/Layout';
import HomePage from './pages/HomePage';
import ResumePage from './pages/ResumePage';
// eslint-disable-next-line
import "swiper/css/bundle";


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage/>} /> 
        <Route path="/resume" element={<ResumePage/>} /> 
      </Routes> 
    </Layout>
  );
}

export default App;
