import { TrendingUp, Layers, Users, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: TrendingUp,
    title: "Live Trade",
    desc: "Get real-time, research-backed trade insights with disciplined execution.",
    gradient: "from-emerald-400 to-cyan-500",
    color: "emerald",
  },
  {
    icon: Layers,
    title: "Model Portfolio",
    desc: "Professionally curated portfolios for smart sector allocation.",
    gradient: "from-indigo-400 to-purple-500",
    color: "indigo",
  },
  {
    icon: Users,
    title: "Community",
    desc: "Learn, share, and grow with serious and disciplined investors.",
    gradient: "from-orange-400 to-amber-500",
    color: "orange",
  },
];

const WhyWealthUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-40 right-1/3 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Floating sparkles */}
      <div className="absolute top-10 left-10 animate-float">
        <Sparkles className="w-6 h-6 text-emerald-400/40" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float delay-1000">
        <Sparkles className="w-5 h-5 text-indigo-400/40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header with animation */}
        <div className="max-w-4xl mx-auto text-center px-4">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-1 w-12 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 animate-pulse" />
              <span className="text-sm font-semibold tracking-wider text-emerald-600 uppercase">
                Premium Features
              </span>
              <div className="h-1 w-12 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 animate-pulse" />
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-slate-900">
              Why{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 animate-gradient bg-[length:200%_auto]">
                  WealthFino
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full animate-pulse" />
              </span>
              ?
            </h2>

            <p className="mt-8 text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              At{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                WealthFino
              </span>
              , we deliver research-backed buy, sell, and hold recommendations
              under SEBI RA guidelines—focused on{" "}
              <span className="font-semibold text-slate-800">
                risk awareness
              </span>{" "}
              and{" "}
              <span className="font-semibold text-slate-800">
                disciplined investing
              </span>
              .
            </p>
          </div>
        </div>

        {/* Cards with staggered animation */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            const delay = index * 200;

            return (
              <div
                key={index}
                className={`relative transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                {/* Card border animation */}
                <div
                  className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r opacity-0 hover:opacity-100 transition-opacity duration-500 blur-sm"
                  style={{
                    backgroundImage: `linear-gradient(45deg, ${
                      item.color === "emerald"
                        ? "#34d399, #06b6d4"
                        : item.color === "indigo"
                        ? "#818cf8, #a855f7"
                        : "#fb923c, #fbbf24"
                    })`,
                  }}
                />

                {/* Main card */}
                <div className="relative rounded-3xl bg-white/90 backdrop-blur-sm p-8 border border-slate-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                  {/* Animated icon background */}
                  <div className="relative">
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.gradient} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500`}
                    />

                    {/* Icon container with pulse animation */}
                    <div
                      className={`relative w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-r ${item.gradient} shadow-lg group-hover:scale-110 transition-transform duration-500`}
                    >
                      <Icon className="text-white w-8 h-8" />
                    </div>

                    {/* Floating dots */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-white border-2 border-emerald-400 animate-ping" />
                  </div>

                  {/* Content */}
                  <h3 className="mt-8 text-2xl font-bold text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-500">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors duration-300">
                    {item.desc}
                  </p>

                  {/* Animated underline */}
                  <div className="mt-6 h-1 w-0 group-hover:w-16 bg-gradient-to-r from-transparent via-current to-transparent transition-all duration-500 group-hover:via-emerald-500" />

                  {/* Learn more button */}
                  <button className="mt-8 flex items-center gap-2 text-sm font-medium text-slate-500 group-hover:text-emerald-600 transition-colors duration-300">
                    <span>Learn more</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats section */}
        <div
          className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {[
            { label: "Active Users", value: "50K+", color: "text-emerald-600" },
            { label: "Success Rate", value: "94%", color: "text-indigo-600" },
            { label: "Years Experience", value: "8+", color: "text-amber-600" },
            { label: "Expert Analysts", value: "24/7", color: "text-cyan-600" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-slate-200/30 hover:bg-white/80 transition-all duration-300"
            >
              <div className={`text-4xl font-bold ${stat.color}`}>
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-slate-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-gradient {
          animation: gradient 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default WhyWealthUs;
