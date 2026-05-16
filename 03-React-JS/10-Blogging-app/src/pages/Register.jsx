import { useState } from "react";
import { supabase } from "../config/supabase/supabase.js";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
    profilePicture: null,
  });

  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, profilePicture: file });
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.repeatPassword) {
      alert("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      // 1. Upload profile picture to storage
      const fileExt = formData.profilePicture.name.split('.').pop();
      const filePath = `public/${formData.email}.${fileExt}`;

      const { error: uploadError } = await supabase
        .storage
        .from('profilePicture')
        .upload(filePath, formData.profilePicture, { upsert: true });

      if (uploadError) {
        alert('Profile picture upload failed');
        return;
      }

      // 2. Get public URL
      const { data: { publicUrl } } = supabase
        .storage
        .from('profilePicture')
        .getPublicUrl(filePath);

      // 3. Register user with Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

      if (authError) {
        alert(authError.message);
        return;
      }

      // 4. Insert user data into users table
      const { error: dbError } = await supabase
        .from('users')
        .insert({
          id: authData.user.id,       // same as auth user 
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          profile_picture: publicUrl,
          created_at: new Date(),
        });

      if (dbError) {
        alert('Failed to save user data: ' + dbError.message);
        return;
      }

      console.log('User registered ==>', authData);
      alert('Registration successful! Please check your email to confirm.');
      // navigate('/login');

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
          Signup
        </h1>
        <div className="w-full h-[1px] bg-slate-300 mt-5"></div>
      </div>

      {/* Form */}
      <div className="flex justify-center items-center py-10 sm:py-16">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 sm:p-8 md:p-10">

          <form onSubmit={handleRegister} className="space-y-5">

            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              className="w-full border border-slate-300 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-300 text-sm sm:text-base"
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              className="w-full border border-slate-300 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-300 text-sm sm:text-base"
            />

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

            <input
              type="password"
              name="repeatPassword"
              placeholder="Repeat Password"
              onChange={handleChange}
              className="w-full border border-slate-300 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-300 text-sm sm:text-base"
            />

            {/* Profile Picture Upload */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-600">
                Profile Picture
              </label>

              <label className="flex items-center gap-3 w-full border border-dashed border-slate-300 px-4 py-3 rounded-lg cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-all duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-slate-400 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>

                <span className="text-sm text-slate-500 truncate">
                  {formData.profilePicture
                    ? formData.profilePicture.name
                    : "Click to upload an image"}
                </span>

                <input
                  type="file"
                  name="profilePicture"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>

              {/* Image Preview */}
              {preview && (
                <div className="flex items-center gap-3 mt-2">
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-14 h-14 rounded-full object-cover border-2 border-blue-300 shadow"
                  />
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-500 font-medium">Preview</span>
                    <button
                      type="button"
                      onClick={() => {
                        setPreview(null);
                        setFormData({ ...formData, profilePicture: null });
                      }}
                      className="text-xs text-red-400 hover:text-red-600 text-left mt-0.5"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-700 to-cyan-500 text-white py-3 rounded-lg font-semibold hover:scale-[1.02] transition-all duration-300 text-sm sm:text-base"
            >
              {loading ? "Loading..." : "Signup"}
            </button>

            <p className="text-center text-slate-600 text-sm sm:text-base">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 font-semibold">
                Login
              </Link>
            </p>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;