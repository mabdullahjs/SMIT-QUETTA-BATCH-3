import React from "react";
import { Link, useNavigate } from "react-router-dom";

/* Redux */
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../redux/userSlice";
import { supabase } from "../config/supabase/supabase";

const Navbar = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user } = useSelector(state => state.user)
  console.log(user);


  const handleLogout =async () => {
    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        alert(error.message);
        return;
      }
      dispatch(logoutUser())
      navigate('/login')

    } catch (err) {
      console.error(err);
      alert('Something went wrong');
    } finally {
      setLoading(false);
    }


  }

  return (
    <nav className="bg-gradient-to-r from-blue-700 to-cyan-500 shadow-lg">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Logo */}
        <Link
          to="/"
          className="text-white text-xl sm:text-2xl font-bold tracking-wide text-center sm:text-left"
        >
          Personal Blogging App
        </Link>

        {/* Right Side */}
        <div className="flex items-center flex-wrap justify-center gap-3 sm:gap-4">

          {user && <div>
            <Link
              to="/profile"
              className="text-white font-semibold text-sm sm:text-base hover:text-slate-200 transition-all duration-300"
            >
              {user.first_name}
            </Link>

            {/* Logout */}
            <button
              className="bg-white text-blue-700 px-4 py-2 rounded-lg font-medium hover:bg-slate-100 transition-all duration-300 text-sm sm:text-base"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>}


          {!user && <>
            <Link
              to="/login"
              className="text-white border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-blue-700 transition-all duration-300 text-sm sm:text-base"
            >
              Login
            </Link>

            {/* Signup */}
            <Link
              to="/register"
              className="bg-white text-blue-700 px-4 py-2 rounded-lg font-medium hover:bg-slate-100 transition-all duration-300 text-sm sm:text-base"
            >
              Signup
            </Link>
          </>}

        </div>

      </div>

    </nav>
  );
};

export default Navbar;