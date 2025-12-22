import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Proven Track Record",
      description: "Consistent market outperformance",
      stat: "24.7%",
      statLabel: "Avg Annual Return",
    },
    {
      title: "Security First",
      description: "Bank-level encryption and protection",
      stat: "100%",
      statLabel: "Secure Since 2010",
    },
    {
      title: "Expert Team",
      description: "Former Wall Street professionals",
      stat: "50+",
      statLabel: "Market Experts",
    },
    {
      title: "24/7 Support",
      description: "Always available for our clients",
      stat: "<5 min",
      statLabel: "Response Time",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              The
              <span className="gradient-text"> WealthFino Edge</span>
            </h2>
            <p className="text-gray-600 mb-8">
              What sets us apart in the competitive world of wealth management.
            </p>

            {/* Feature List */}
            <div className="space-y-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center mr-4">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-600 mb-2">{feature.description}</p>
                    <div className="text-2xl font-bold gradient-text">
                      {feature.stat}
                    </div>
                    <div className="text-sm text-gray-500">
                      {feature.statLabel}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white">
            <h3 className="text-2xl text-gray-600 font-bold mb-6">Our Commitment</h3>
            <ul className="space-y-4 text-gray-600">
              {[
                "Transparent fee structure",
                "Regular performance reviews",
                "Custom risk parameters",
                "Institutional research access",
              ].map((item) => (
                <li key={item} className="flex items-center">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                  {item}
                </li>
              ))}
            </ul>

            {/* Floating Stats */}
            <div className="mt-12 p-6 bg-blue-500/10 rounded-xl backdrop-blur-sm">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">🏆</div>
                <div className="text-red-600 font-semibold">
                  "Best Wealth Tech 2023"
                </div>
                <div className="text-sm text-gray-600 opacity-80">
                  Finance Monthly
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
