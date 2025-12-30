import { useState } from "react";
import { policiesData } from "./data/policiesData";

const policyNames = Object.keys(policiesData);

export default function Policies() {
  const [activePolicy, setActivePolicy] = useState(policyNames[0]);
  const selectedPolicy = policiesData[activePolicy];

  return (
    <div className="min-h-screen bg-slate-900 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6 px-4">
        {/* LEFT SIDEBAR */}
        <div className="col-span-12 md:col-span-4 lg:col-span-3">
          <div className="bg-slate-800 rounded-xl border border-slate-700 shadow-sm overflow-hidden">
            {policyNames.map((name) => (
              <button
                key={name}
                onClick={() => setActivePolicy(name)}
                className={`w-full text-left px-5 py-4 text-sm font-medium border-b border-slate-700 last:border-b-0 transition
                  ${
                    activePolicy === name
                      ? "bg-slate-700 text-blue-400 border-l-4 border-blue-500"
                      : "text-slate-300 hover:bg-slate-700/60"
                  }`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="col-span-12 md:col-span-8 lg:col-span-9">
          <div className="bg-slate-800 rounded-xl border border-slate-700 shadow-sm p-8 h-[75vh] overflow-y-auto">
            <h1 className="text-2xl font-semibold text-slate-100 mb-6">
              {selectedPolicy.title}
            </h1>

            <div className="space-y-4 text-slate-300 leading-relaxed">
              {selectedPolicy.content.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
