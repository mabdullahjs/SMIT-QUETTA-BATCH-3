const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center mb-8">
          Good Morning Readers!
        </h1>

        {/* Subheading */}
        <h2 className="text-lg font-semibold mb-4">All Blogs</h2>

        {/* Blog Card 1 */}
        <div className="bg-white p-5 rounded-lg shadow mb-5">
          <div className="flex gap-4">
            <img
              src="https://via.placeholder.com/60"
              alt="author"
              className="w-14 h-14 rounded-md object-cover"
            />

            <div>
              <h3 className="font-semibold text-lg">
                Introducing Whisper
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                Elon Musk - August 17th, 2023
              </p>
              <p className="text-gray-600 text-sm">
                Whisper is an automatic speech recognition (ASR) system trained on
                680,000 hours of multilingual and multitask supervised data collected
                from the web...
              </p>
              <p className="text-blue-500 text-sm mt-2 cursor-pointer">
                see all from this user
              </p>
            </div>
          </div>
        </div>

        {/* Blog Card 2 */}
        <div className="bg-white p-5 rounded-lg shadow mb-5">
          <div className="flex gap-4">
            <img
              src="https://via.placeholder.com/60"
              alt="author"
              className="w-14 h-14 rounded-md object-cover"
            />

            <div>
              <h3 className="font-semibold text-lg">
                An Action Button Could Be Coming to the iPhone 15
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                Inzamam Malik - August 16th, 2023
              </p>
              <p className="text-gray-600 text-sm">
                Apple could be putting an Action button on your next iPhone.
                According to a July report from MacRumors, code in the fourth iOS
                17 developer beta hints at functionality...
              </p>
              <p className="text-blue-500 text-sm mt-2 cursor-pointer">
                see all from this user
              </p>
            </div>
          </div>
        </div>

        {/* Blog Card 3 */}
        <div className="bg-white p-5 rounded-lg shadow">
          <div className="flex gap-4">
            <img
              src="https://via.placeholder.com/60"
              alt="author"
              className="w-14 h-14 rounded-md object-cover"
            />

            <div>
              <h3 className="font-semibold text-lg">
                What Is the Event Loop and How Does It Improve App Performance?
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                Inzamam Malik - August 15th, 2023
              </p>
              <p className="text-gray-600 text-sm">
                JavaScript is a single-threaded language, but it handles tasks one
                at a time. However, the event loop lets JavaScript handle events and
                callbacks asynchronously by simulating simultaneous programming
                systems...
              </p>
              <p className="text-blue-500 text-sm mt-2 cursor-pointer">
                see all from this user
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;