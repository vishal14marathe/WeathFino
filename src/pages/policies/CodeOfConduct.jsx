export default function CodeOfConduct() {
  return (
    <div className="min-h-screen   from-slate-950 to-slate-900 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* PAGE HEADER */}
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          CODE OF CONDUCT FOR RESEARCH ANALYST
        </h1>

        <p className="text-slate-300 text-center leading-relaxed mb-6">
          <strong>Krishna Kumar Pathak</strong>
          <br />
          SEBI-Registered Research Analyst
          <br />
          Registration No.: INH300009914 | BSE Enlistment No.: 5590
          <br />
          Dated: 22 June 2022
        </p>

        <div className="border-t border-slate-700 mb-10" />

        {/* INTRO CARD */}
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 md:p-8 mb-10 text-slate-200">
          <p className="leading-relaxed">
            In accordance with Regulation 24(2) of the SEBI (Research Analyst)
            Regulations, 2014, I shall maintain the following Code of Conduct
            while carrying out my responsibilities as a SEBI-Registered Research
            Analyst.
          </p>
        </div>

        {/* CODE POINTS */}
        <ConductCard
          title="1. Honesty and Good Faith"
          text="I shall act honestly and in good faith while discharging my professional duties as a Research Analyst."
        />

        <ConductCard
          title="2. Diligence"
          text="I shall act with due skill, care, and diligence and ensure that research reports are prepared after thorough analysis."
        />

        <ConductCard
          title="3. Conflict of Interest"
          text="I shall effectively address conflicts of interest that may affect the impartiality of research analysis and research reports and make appropriate disclosures wherever required."
        />

        <ConductCard
          title="4. Insider Trading or Front Running"
          text="I shall not engage in insider trading or front running of my own research reports or recommendations."
        />

        <ConductCard
          title="5. Confidentiality"
          text="I shall maintain confidentiality of the research report until such time as the report is made public."
        />

        <ConductCard
          title="6. Professional Standards"
          text="I shall observe high professional standards while engaged in research analysis and preparation of research reports."
        />

        <ConductCard
          title="7. Compliance"
          text="I shall comply with all regulatory requirements applicable to the conduct of my business activities as a Research Analyst."
        />

        <ConductCard
          title="8. Responsibility of Senior Management"
          text="I shall bear primary responsibility as senior management for ensuring maintenance of appropriate standards of conduct and adherence to proper procedures."
        />

        {/* SIGNATURE */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mt-12">
          <p className="text-slate-800 font-medium">Regards,</p>
          <p className="text-slate-900 font-semibold mt-2">Krishna Pathak</p>
          <p className="text-slate-600">(Individual)</p>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------
   REUSABLE CARD (NO MAP)
--------------------------------------- */
function ConductCard({ title, text }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
      <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
        {title}
      </h2>
      <p className="text-slate-700 leading-relaxed">{text}</p>
    </div>
  );
}
