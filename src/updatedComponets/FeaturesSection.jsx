import { motion } from "framer-motion";
import chartImg from "../assets/chart.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const FeaturesWhiteBlueAnimated = () => {
  return (
    <section className="bg-white py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
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
        </motion.div>

        {/* Feature Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 bg-white rounded-3xl border border-slate-200 shadow-xl p-12 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center"
        >
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Real-time Market Insights
            </h3>

            <ul className="space-y-4 text-slate-700 text-lg">
              {[
                "Research-based Buy/Sell recommendations",
                "Logical, insight-driven market analysis",
                "Timely alerts with clear rationale",
                "Model portfolio monitoring alerts",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-blue-600 font-bold">✔</span>
                  {item}
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              className="mt-10 px-10 py-4 rounded-full font-semibold text-white 
                bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg"
            >
              Get Started
            </motion.button>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative rounded-2xl border border-blue-200 bg-blue-50 p-3"
            >
              <img
                src={chartImg}
                alt="Market Chart"
                className="rounded-xl max-h-[320px]"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* App Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center"
        >
          <span className="inline-block px-8 py-3 rounded-full bg-blue-600 text-white font-semibold text-lg">
            WealthFino Mobile App
          </span>
          <p className="mt-4 text-slate-600">
            Research • Trade • Charts — anytime, anywhere
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesWhiteBlueAnimated;
