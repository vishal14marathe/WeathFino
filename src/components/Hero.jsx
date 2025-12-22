import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-trading-navy via-trading-navy to-trading-blue overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}

        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(to right, #22C55E 1px, transparent 1px),
                             linear-gradient(to bottom, #22C55E 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Animated Dots */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-trading-cyan rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-trading-green rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-trading-orange rounded-full animate-ping"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-trading-blue/20 px-4 py-2 rounded-full mb-8">
              <div className="w-2 h-2 bg-trading-green rounded-full animate-pulse"></div>
              <span className="text-trading-cyan font-medium">
                Real-time Trading Now Live
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Trade Smarter</span>
              <br />
              <span className="bg-gradient-to-r from-trading-green to-trading-cyan bg-clip-text text-transparent">
                Grow Faster
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-10 max-w-2xl">
              Access institutional-grade trading tools with AI-powered insights.
              Execute strategies that adapt to market conditions in real-time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative bg-gradient-to-r from-trading-green to-trading-cyan text-white px-8 py-4 rounded-xl font-semibold text-lg overflow-hidden">
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                <span className="relative">Start Free Trial</span>
              </button>
              <button className="border-2 border-trading-cyan text-trading-cyan px-8 py-4 rounded-xl font-semibold text-lg hover:bg-trading-cyan/10 transition-colors">
                <span className="flex items-center">
                  <span className="mr-2">▶</span>
                  Platform Demo
                </span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "<1ms", label: "Order Execution" },
                { value: "99.9%", label: "Uptime" },
                { value: "256-bit", label: "Encryption" },
                { value: "24/7", label: "Support" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm"
                >
                  <div className="text-2xl font-bold text-trading-green mb-2">
                    {item.value}
                  </div>
                  <div className="text-sm text-gray-400">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Trading Chart Visualization */}
          <div className="bg-trading-navy/50 backdrop-blur-sm rounded-2xl p-8 border border-trading-blue/30">
            <div className="flex justify-between items-center mb-6">
              <div>
                <div className="text-2xl font-bold text-white">
                  NASDAQ: AAPL
                </div>
                <div className="text-trading-green text-lg">
                  $185.25 <span className="text-sm">(+1.25%)</span>
                </div>
              </div>
              <div className="flex space-x-2">
                {["1D", "1W", "1M", "1Y"].map((period) => (
                  <button
                    key={period}
                    className="px-3 py-1 rounded-lg bg-trading-blue/30 text-sm"
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>

            {/* Simplified Chart */}
            <div className="h-64 relative">
              <div className="absolute inset-0 flex items-end space-x-px">
                {[
                  40, 45, 50, 55, 60, 65, 70, 75, 80, 75, 70, 65, 70, 75, 80,
                  85, 90, 85, 80, 75,
                ].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-trading-green to-trading-cyan/50 rounded-t"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Trading Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { label: "Volume", value: "45.2M" },
                { label: "High", value: "$186.50" },
                { label: "Low", value: "$183.80" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-3 bg-white/5 rounded-lg"
                >
                  <div className="text-sm text-gray-400">{stat.label}</div>
                  <div className="font-bold text-white">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-trading-cyan rounded-full flex justify-center">
            <div className="w-1 h-3 bg-trading-cyan rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
