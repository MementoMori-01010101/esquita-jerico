import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Seminar from "./pages/seminar/Seminar";
import AddSeminar from "./pages/seminar/AddSeminar";
import ViewSeminar from "./pages/seminar/ViewSeminar";
import EditSeminar from "./pages/seminar/EditSeminar";
import AppNavbar from "./components/AppNavbar";

function App() {
  const auth = localStorage.getItem("auth");

  return (
    <>
      <Router>
        {auth && <AppNavbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/seminars" element={<Seminar />} />
          <Route path="/seminars/new" element={<AddSeminar />} />
          <Route path="/seminars/:id" element={<ViewSeminar />} />
          <Route path="/seminars/:id/edit" element={<EditSeminar />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
