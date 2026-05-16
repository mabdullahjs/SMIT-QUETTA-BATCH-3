import React, { useEffect } from "react";

import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import Dashboard from "./Dashboard";

const Home = () => {

  const navigate = useNavigate();

  /* Redux User */
  const user = useSelector(
    (state) => state.user.user
  );

  useEffect(() => {

    if (!user) {

      navigate("/login");

    }

  }, [user]);

  return (
    <div className="min-h-screen bg-slate-100">

      {/* Main Content */}
      <div className="w-full">

        <Dashboard />

      </div>

    </div>
  );
};

export default Home;