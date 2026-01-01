export default function TermsConditions() {
  return (
    <div className="text-slate-200 leading-relaxed space-y-8">
      {/* TITLE */}
      <header className="space-y-3 border-b border-slate-700 pb-6">
        <h1 className="text-3xl font-bold text-white">
          Terms and Conditions for Research Analyst Services
        </h1>

        <div className="text-sm text-slate-400 space-y-1">
          <p>
            <strong>Research Analyst:</strong> Krishna Kumar Pathak
          </p>
          <p>
            <strong>SEBI Registration No.:</strong> INH300009914
          </p>
          <p>
            <strong>BSE Enlistment No.:</strong> 5590
          </p>
        </div>
      </header>

      {/* SECTION 1 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">
          1. Preamble and Legal Capacity
        </h2>

        <p>
          These Terms and Conditions (“T&C”) constitute a binding agreement
          between you (“User” / “Client”) and Krishna Kumar Pathak (“Research
          Analyst” / “RA”), registered with the Securities and Exchange Board of
          India (SEBI) under Registration No. INH300009914 and enlisted with
          BSE.
        </p>

        <p>
          This Agreement governs your access to and use of research, analysis,
          recommendations, and related services offered through digital or
          physical channels, in compliance with the SEBI (Research Analysts)
          Regulations, 2014, SEBI Act, 1992, and applicable circulars.
        </p>
      </section>

      {/* SECTION 2 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">2. Definitions</h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Research Analyst (RA):</strong> An individual registered
            with SEBI permitted to provide research and recommendations on
            securities.
          </li>
          <li>
            <strong>Client/User:</strong> Any person or entity availing research
            services.
          </li>
          <li>
            <strong>Services:</strong> Research reports, market analysis,
            recommendations, educational and informational content.
          </li>
          <li>
            <strong>SEBI:</strong> Securities and Exchange Board of India.
          </li>
        </ul>
      </section>

      {/* SECTION 3 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">
          3. Eligibility and Acceptance
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>You are at least 18 years of age</li>
          <li>You are legally competent under the Indian Contract Act, 1872</li>
          <li>
            You are not prohibited by law from using research analyst services
          </li>
        </ul>

        <p>
          Use of the RA’s services implies acceptance of these T&C, Privacy
          Policy, SEBI regulations, and all applicable disclaimers.
        </p>
      </section>

      {/* SECTION 4 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">
          4. Scope of Services
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Equity, debt, and macroeconomic research reports</li>
          <li>Market outlook and strategy commentary</li>
          <li>Educational and informational material</li>
        </ul>

        <p className="text-slate-400">
          The RA does not provide portfolio management, execution, trading, or
          fund handling services.
        </p>
      </section>

      {/* SECTION 5 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">
          5. Risk Warning and Disclaimer
        </h2>

        <p>
          Investment in securities markets is subject to market risks. Past
          performance is not indicative of future results.
        </p>

        <p>
          Registration granted by SEBI and enlistment with BSE do not guarantee
          performance or assure returns to investors.
        </p>
      </section>

      {/* SECTION 6 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">
          6. Grievance Redressal
        </h2>

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-5 space-y-2">
          <p>
            <strong>Name:</strong> Krishna Kumar Pathak
          </p>
          <p>
            <strong>Email:</strong> skrishna.sk4@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> +91 9883455700
          </p>
          <p>
            <strong>SEBI SCORES:</strong>{" "}
            <a
              href="https://scores.sebi.gov.in"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline"
            >
              https://scores.sebi.gov.in
            </a>
          </p>
        </div>

        <p>
          All grievances shall be addressed within 30 days in line with SEBI
          regulations.
        </p>
      </section>

      {/* SECTION 7 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">
          7. Governing Law & Jurisdiction
        </h2>

        <p>
          These Terms and Conditions are governed by the laws of India.
          Jurisdiction shall lie exclusively with the courts of Durgapur, West
          Bengal.
        </p>
      </section>

      {/* FOOTER DISCLAIMER */}
      <footer className="border-t border-slate-700 pt-6 text-sm text-slate-400">
        <p>
          These Terms and Conditions comply with SEBI (Research Analysts)
          Regulations, 2014 and are subject to change as per regulatory or legal
          requirements.
        </p>
      </footer>
    </div>
  );
}
