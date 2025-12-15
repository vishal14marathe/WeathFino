import React from 'react';

const About = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Trust-Driven
              <br />
              <span className="gradient-text">Wealth Management</span>
            </h2>
            <p className="text-gray-600 mb-8">
              We combine institutional expertise with cutting-edge technology to deliver personalized wealth solutions for modern investors.
            </p>
            
            {/* Feature List */}
            <div className="space-y-4">
              {[
                'AI-Powered Analytics',
                'Real-time Market Insights',
                'Risk-Managed Strategies',
                'Transparent Pricing'
              ].map((feature) => (
                <div key={feature} className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { value: '15+', label: 'Years Experience' },
              { value: '98%', label: 'Client Retention' },
              { value: '$2.5B+', label: 'Assets Managed' },
              { value: '24/7', label: 'Monitoring' }
            ].map((stat) => (
              <div key={stat.label} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-sm">
                <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;