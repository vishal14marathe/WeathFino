import chartImg from "../assets/chart.png"; // replace with your chart image

const FeaturesWhiteBlue = () => {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-6 py-2 rounded-full bg-blue-50 text-blue-600 font-semibold">
            Our Features
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-slate-900">
            Smarter Trading with{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Real-Time Market Insights
            </span>
          </h2>

          <p className="mt-5 text-slate-600 text-lg">
            Powerful research tools and disciplined strategies designed for
            confident investing.
          </p>
        </div>

        {/* Feature Card */}
        <div className="mt-20 bg-white rounded-3xl border border-slate-200 shadow-xl p-12 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* LEFT */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Real-time Market Insights
            </h3>

            <ul className="space-y-4 text-slate-700 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✔</span>
                Research-based Buy/Sell recommendations
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✔</span>
                Logical, insight-driven market analysis
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✔</span>
                Timely alerts with clear rationale
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✔</span>
                Model portfolio monitoring alerts
              </li>
            </ul>

            <button
              className="mt-10 px-10 py-4 rounded-full font-semibold text-white 
              bg-gradient-to-r from-blue-600 to-cyan-500 
              hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Get Started
            </button>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center">
            <div className="relative rounded-2xl border border-blue-200 bg-blue-50 p-3">
              <img
                src={chartImg}
                alt="Market Chart"
                className="rounded-xl max-h-[320px]"
              />
            </div>
          </div>
        </div>

        {/* App Section */}
        <div className="mt-24 text-center">
          <span className="inline-block px-8 py-3 rounded-full bg-blue-600 text-white font-semibold text-lg">
            WealthFino Mobile App
          </span>
          <p className="mt-4 text-slate-600">
            Research • Trade • Charts — anytime, anywhere
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesWhiteBlue;
