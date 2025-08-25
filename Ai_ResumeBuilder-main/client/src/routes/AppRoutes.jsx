// src/routes/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

  // Home 
import Home from "../pages/Home.jsx"

  // Login 
import Login from "../pages/auth/Login.jsx"
import SignUp from "../pages/auth/Signup.jsx"

  // Main TemplatePage
import TemplatePage from '../pages/TemplatePage.jsx';

  // AI Edit Page (Add this import)
import ResumeUploadPage from '../pages/ResumeUploadPage.jsx'; // or whatever you name your AI Edit component
  // ResumeTemplates
import Template1 from "../components/ai-resume-templates/Template1.jsx";
import Template2 from '../components/ai-resume-templates/Template2.jsx';
import Template3 from '../components/ai-resume-templates/Template3.jsx';
import Template4 from '../components/ai-resume-templates/Template4.jsx';
import Template5 from '../components/ai-resume-templates/Template5.jsx';
import Template6 from '../components/ai-resume-templates/Template6.jsx';
import Template7 from '../components/ai-resume-templates/Template7.jsx';
import Template8 from '../components/ai-resume-templates/Template8.jsx';
import Template9 from '../components/ai-resume-templates/Template9.jsx';
import Template10 from '../components/ai-resume-templates/Template10.jsx';
import Template11 from '../components/ai-resume-templates/Template11.jsx';
import Template12 from '../components/ai-resume-templates/Template12.jsx';
import Template13 from '../components/ai-resume-templates/Template13.jsx';
import Template14 from '../components/ai-resume-templates/Template14.jsx';
import Template15 from '../components/ai-resume-templates/Template15.jsx';
import Template16 from '../components/ai-resume-templates/Template16.jsx';
import Template17 from '../components/ai-resume-templates/Template17.jsx';
import Template18 from '../components/ai-resume-templates/Template18.jsx';
import Template19 from '../components/ai-resume-templates/Template19.jsx';
import Template20 from '../components/ai-resume-templates/Template20.jsx';
import Template21 from '../components/ai-resume-templates/Template21.jsx';
import Template22 from '../components/ai-resume-templates/Template22.jsx';
import Template23 from '../components/ai-resume-templates/Template23.jsx';
import Template26 from '../components/ai-resume-templates/Template26.jsx';
import Template27 from '../components/ai-resume-templates/Template27.jsx';
import Template29 from '../components/ai-resume-templates/Template29.jsx';
import Template30 from '../components/ai-resume-templates/Template30.jsx';
import Template31 from '../components/ai-resume-templates/Template31.jsx';

// Not Found
import NotFound from "../pages/NotFound.jsx";

const AppRoutes = () => {
  return (
    <Routes>
  {/* Public Routes */}
  <Route path='/' element={<Home />} />
  <Route path='/templatepage' element={<TemplatePage />} />

  {/* AI Edit Route - Add this line */}
      <Route path='/ai-edit' element={<ResumeUploadPage />} />

          <Route  path='/' element={<Home />} />
          <Route  path='/template1' element={<Template1 />} />
          <Route  path='/template2' element={<Template2/>} />
          <Route  path='/template3' element={<Template3 />} />
          <Route  path='/template4' element={<Template4 />} />
          <Route  path='/template5' element={<Template5 />} />
          <Route  path='/template6' element={<Template6 />} />
          <Route  path='/template7' element={<Template7 />} />
          <Route  path='/template8' element={<Template8 />} />
          <Route  path='/template9' element={<Template9 />} />  
          <Route  path='/template10' element={<Template10 />} />
          <Route  path='/template11' element={<Template11 />} />
          <Route  path='/template12' element={<Template12 />} />
          <Route  path='/template13' element={<Template13 />} />
          <Route  path='/template14' element={<Template14 />} />
          <Route  path='/template15' element={<Template15 />} />
          <Route  path='/template16' element={<Template16 />} />
          <Route  path='/template17' element={<Template17 />} />
          <Route  path='/template18' element={<Template18 />} />
          <Route  path='/template19' element={<Template19 />} />
          <Route  path='/template20' element={<Template20 />} />
          <Route  path='/template21' element={<Template21 />} />
          <Route  path='/template22' element={<Template22 />} />
          <Route  path='/template23' element={<Template23 />} />
          <Route  path='/template26' element={<Template26 />} />
          <Route  path='/template27' element={<Template27 />} />
          <Route  path='/template29' element={<Template29 />} />
          <Route  path='/template30' element={<Template30 />} />
          <Route  path='/template31' element={<Template31 />} />

          {/* Login and Signup */}
          <Route exact path='/Login' element={<Login/>} />
          <Route exact path='/SignUp' element={<SignUp/>} />
         

          {/*  404 Not Found Route  */}
  <Route path='*' element={<NotFound />} />
</Routes>
  );
};
export default AppRoutes;      