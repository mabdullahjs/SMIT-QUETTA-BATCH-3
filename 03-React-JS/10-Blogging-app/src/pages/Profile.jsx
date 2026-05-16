import React, { useState } from "react";

const Profile = () => {

  const [userName, setUserName] = useState(
    localStorage.getItem("userName") || "User Name"
  );

  const [isEditing, setIsEditing] = useState(false);

  const [newName, setNewName] = useState(userName);

  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    repeatPassword: "",
  });

  /* Handle Inputs */
  const handleChange = (e) => {

    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value,
    });

  };

  /* Update Name */
  const handleNameUpdate = () => {

    localStorage.setItem("userName", newName);

    setUserName(newName);

    setIsEditing(false);

    alert("Name Updated Successfully");

  };

  /* Update Password */
  const handlePasswordUpdate = (e) => {

    e.preventDefault();

    if (
      passwordData.newPassword !==
      passwordData.repeatPassword
    ) {

      alert("Passwords do not match");

      return;
    }

    alert("Password Updated Successfully");

    setPasswordData({
      oldPassword: "",
      newPassword: "",
      repeatPassword: "",
    });
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 sm:px-6">

      {/* Heading */}
      <div className="max-w-6xl mx-auto pt-8 sm:pt-10">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 text-center sm:text-left">
          Profile
        </h1>

        <div className="w-full h-[1px] bg-slate-300 mt-5"></div>

      </div>

      {/* Profile Card */}
      <div className="max-w-5xl mx-auto mt-8 sm:mt-12 bg-white rounded-2xl shadow-xl border border-slate-200 p-5 sm:p-8 md:p-10">

        <div className="flex flex-col lg:flex-row gap-10">

          {/* Left Side */}
          <div className="flex flex-col items-center lg:items-start">

            {/* Profile Image */}
            <div className="relative">

              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                alt="profile"
                className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl object-cover shadow-lg"
              />

              {/* Edit Image */}
              <button
                className="absolute bottom-2 right-2 bg-blue-600 text-white p-2 rounded-full shadow-md hover:scale-105 transition"
              >
                ✏️
              </button>

            </div>

            {/* Name */}
            <div className="mt-5 flex items-center gap-3 flex-wrap justify-center lg:justify-start">

              {isEditing ? (

                <input
                  type="text"
                  value={newName}
                  onChange={(e) =>
                    setNewName(e.target.value)
                  }
                  className="border border-slate-300 px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-300 text-sm sm:text-base"
                />

              ) : (

                <h2 className="text-xl sm:text-2xl font-bold text-slate-800 text-center lg:text-left break-words">
                  {userName}
                </h2>

              )}

              {/* Edit Name */}
              <button
                onClick={() => {

                  if (isEditing) {

                    handleNameUpdate();

                  } else {

                    setIsEditing(true);

                  }
                }}
                className="text-blue-600 hover:scale-110 transition"
              >
                ✏️
              </button>

            </div>

          </div>

          {/* Right Side */}
          <div className="flex-1">

            <h3 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-5 text-center lg:text-left">
              Update Password
            </h3>

            <form
              onSubmit={handlePasswordUpdate}
              className="space-y-4 max-w-xl mx-auto lg:mx-0"
            >

              <input
                type="password"
                name="oldPassword"
                placeholder="Old Password"
                value={passwordData.oldPassword}
                onChange={handleChange}
                className="w-full border border-slate-300 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-300 text-sm sm:text-base"
              />

              <input
                type="password"
                name="newPassword"
                placeholder="New Password"
                value={passwordData.newPassword}
                onChange={handleChange}
                className="w-full border border-slate-300 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-300 text-sm sm:text-base"
              />

              <input
                type="password"
                name="repeatPassword"
                placeholder="Repeat Password"
                value={passwordData.repeatPassword}
                onChange={handleChange}
                className="w-full border border-slate-300 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-300 text-sm sm:text-base"
              />

              <button
                className="w-full sm:w-auto bg-gradient-to-r from-blue-700 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:scale-[1.02] transition-all duration-300 text-sm sm:text-base"
              >
                Update Password
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Profile;