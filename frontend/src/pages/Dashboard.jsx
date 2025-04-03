import React from "react";
import Nav from "./Nav";
import Home from "./Home";
import Footer from "./Footer";
import CreateNote from "../components/CreateNote";
import GetNotes from "../components/GetNotes";

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <Nav />
      <Home />
      <div>
        <div>
          <div>
            <CreateNote />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
