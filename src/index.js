import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AllCourses from "./components/AllCourses";
import IndividualCourse from "./components/IndividualCourse";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginStudent from "./components/LoginStudent";
import SignupStudent from "./components/SignUpStudent";
import { store } from "./redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllCourses />} />
          <Route path="/login" element={<LoginStudent />} />
          <Route path="/signup" element={<SignupStudent />} />
          <Route path="/course/:id" element={<IndividualCourse />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// 1. Course List
// 2. Individual Course Page
// 3. Write a feedback form
// 4. Submission form
