import { useState } from "react";
import { supabase } from "../config/supabase/supabase.js";

import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/userSlice";

const Login = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleLogin = async (e) => {

    e.preventDefault();
    console.log(formData)

    try {
      // 1. Login user with Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (authError) {
        alert(authError.message);
        return;
      }

      // 2. Fetch user data from users table
      const { data: userData, error: dbError } = await supabase
        .from('users')
        .select('*')
        .eq('id', authData.user.id)
        .single();

      if (dbError) {
        alert('Failed to fetch user data: ' + dbError.message);
        return;
      }

      console.log('Logged in user ==>', userData);
      dispatch(loginUser(userData))
      navigate('/dashboard');

    } catch (err) {
      console.error(err);
      alert('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4">

      {/* Heading */}
      <div className="max-w-6xl mx-auto pt-8 sm:pt-10">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 text-center sm:text-left">
          Login
        </h1>

        <div className="w-full h-[1px] bg-slate-300 mt-5"></div>

      </div>

      {/* Form */}
      <div className="flex justify-center items-center py-10 sm:py-16 md:py-20">

        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 sm:p-8 md:p-10">

          <form
            onSubmit={handleLogin}
            className="space-y-5"
          >

            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="w-full border border-slate-300 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-300 text-sm sm:text-base"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="w-full border border-slate-300 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-300 text-sm sm:text-base"
            />

            <button
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-700 to-cyan-500 text-white py-3 rounded-lg font-semibold hover:scale-[1.02] transition-all duration-300 text-sm sm:text-base"
            >
              {loading ? "Loading..." : "Login"}
            </button>

            <p className="text-center text-slate-600 text-sm sm:text-base">

              Don't have an account?{" "}

              <Link
                to="/register"
                className="text-blue-600 font-semibold"
              >
                Signup
              </Link>

            </p>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Login;