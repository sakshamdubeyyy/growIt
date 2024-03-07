import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const About = React.lazy(() => import("pages/About"));
const Pricing = React.lazy(() => import("pages/Pricing"));
const Homepage = React.lazy(() => import("pages/Homepage"));
const SignUp = React.lazy(() => import("pages/SignUp"));
const Login = React.lazy(() => import("pages/Login"));
const Contact = React.lazy(() => import("pages/Contact"));

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<div className="flex justify-center">Loading...</div>}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
