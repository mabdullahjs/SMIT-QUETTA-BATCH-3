import React, { useState } from "react";

const Dashboard = () => {

  // My Blogs State
  const [myBlogs, setMyBlogs] = useState([
    {
      id: 1,
      title: "Why React Developers Love Tailwind CSS",
      description:
        "Tailwind CSS allows developers to rapidly build responsive and modern user interfaces directly inside JSX using utility classes.",
      author: "Inzamam Malik",
      date: "August 18, 2023",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
  ]);

  // All Blogs
  const allBlogs = [
    {
      id: 2,
      title: "Introducing Whisper AI",
      description:
        "Whisper is an automatic speech recognition system trained on multilingual and multitask supervised data collected from the web.",
      author: "Elon Musk",
      date: "August 17, 2023",
      image:
        "https://images.unsplash.com/photo-1511367461989-f85a21fda167",
    },

    {
      id: 3,
      title: "What Is the Event Loop in JavaScript?",
      description:
        "JavaScript uses an event loop to handle asynchronous tasks efficiently while remaining single threaded.",
      author: "John Doe",
      date: "August 15, 2023",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    },
  ];

  // Create Blog States
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Add Blog
  const publishBlog = () => {

    if (!title || !description) {
      alert("Please fill all fields");
      return;
    }

    const newBlog = {
      id: Date.now(),
      title,
      description,
      author: "You",
      date: new Date().toDateString(),
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    };

    setMyBlogs([newBlog, ...myBlogs]);

    setTitle("");
    setDescription("");
  };

  // Delete Blog
  const deleteBlog = (id) => {

    const filteredBlogs = myBlogs.filter(
      (blog) => blog.id !== id
    );

    setMyBlogs(filteredBlogs);
  };

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">

      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="mb-10">

          <h1 className="text-4xl font-bold text-slate-800">
            Dashboard
          </h1>

          <p className="text-slate-500 mt-2">
            Create and manage your blogs
          </p>

        </div>

        {/* Create Blog */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 mb-12">

          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Create New Blog
          </h2>

          <input
            type="text"
            placeholder="Enter Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-slate-300 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-300 mb-5"
          />

          <textarea
            rows="6"
            placeholder="Write your blog here..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-slate-300 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-300 resize-none"
          ></textarea>

          <button
            onClick={publishBlog}
            className="mt-5 bg-gradient-to-r from-blue-700 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:scale-[1.02] transition-all duration-300"
          >
            Publish Blog
          </button>

        </div>

        {/* My Blogs */}
        <div className="mb-14">

          <h2 className="text-3xl font-bold text-slate-800 mb-8">
            My Blogs
          </h2>

          {myBlogs.map((blog) => (

            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow-xl border border-slate-200 p-7 mb-8"
            >

              <div className="flex gap-5">

                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-24 h-24 rounded-2xl object-cover"
                />

                <div>

                  <h3 className="text-2xl font-bold text-slate-800">
                    {blog.title}
                  </h3>

                  <p className="text-sm text-slate-500 mt-2">
                    {blog.author} • {blog.date}
                  </p>

                </div>

              </div>

              <p className="text-slate-600 mt-6 leading-8 text-lg">
                {blog.description}
              </p>

              {/* Actions */}
              <div className="flex gap-6 mt-6">

                <button
                  onClick={() => deleteBlog(blog.id)}
                  className="text-red-500 font-semibold hover:underline"
                >
                  Delete
                </button>

                <button
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Edit
                </button>

              </div>

            </div>

          ))}

        </div>

        {/* All Blogs */}
        <div>

          <h2 className="text-3xl font-bold text-slate-800 mb-8">
            All Blogs
          </h2>

          {allBlogs.map((blog) => (

            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow-xl border border-slate-200 p-7 mb-8 hover:shadow-2xl transition-all duration-300"
            >

              <div className="flex gap-5">

                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-24 h-24 rounded-2xl object-cover"
                />

                <div>

                  <h3 className="text-2xl font-bold text-slate-800">
                    {blog.title}
                  </h3>

                  <p className="text-sm text-slate-500 mt-2">
                    {blog.author} • {blog.date}
                  </p>

                </div>

              </div>

              <p className="text-slate-600 mt-6 leading-8 text-lg">
                {blog.description}
              </p>

              <button className="text-blue-600 font-semibold mt-5 hover:underline">
                See all from this user
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default Dashboard;