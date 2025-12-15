import React from "react";

const CTA = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Financial Approach?
          </h2>

          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            Join thousands of investors who trust WealthFino. Get a personalized
            consultation with no commitment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10">
              Download Brochure
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/20">
            <div>
              <div className="text-2xl mb-2">📞</div>
              <div className="font-bold">Call Us</div>
              <div className="opacity-90">+1 (555) 123-4567</div>
            </div>
            <div>
              <div className="text-2xl mb-2">✉️</div>
              <div className="font-bold">Email Us</div>
              <div className="opacity-90">consult@wealthfino.com</div>
            </div>
            <div>
              <div className="text-2xl mb-2">🕒</div>
              <div className="font-bold">Business Hours</div>
              <div className="opacity-90">Mon-Fri, 9AM-6PM EST</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
