import React from "react";

export default function TermsConditions() {
  return (
    <section className="  from-[#0b0f14] to-[#111827] text-slate-200 py-16 px-4">
      <div className="max-w-6xl mx-auto bg-[#0f172a]/80 backdrop-blur rounded-2xl shadow-xl p-6 md:p-10 space-y-10">
        {/* ================= HEADER ================= */}
        <header className="space-y-3 border-b border-slate-700 pb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Terms and Conditions for Research Analyst Services
          </h1>

          <div className="text-sm text-slate-400 space-y-1">
            <p>
              <strong className="text-slate-200">Research Analyst:</strong>{" "}
              Krishna Kumar Pathak
            </p>
            <p>
              <strong className="text-slate-200">SEBI Registration No.:</strong>{" "}
              INH300009914
            </p>
            <p>
              <strong className="text-slate-200">BSE Enlistment No.:</strong>{" "}
              5590
            </p>
          </div>
        </header>

        {/* ================= SECTION 1 ================= */}
        <Section title="1. Preamble and Legal Capacity">
          <p>
            These Terms and Conditions (“T&C”) constitute a binding agreement
            between you (“User” / “Client”) and Krishna Kumar Pathak (“Research
            Analyst” / “RA”), registered with the Securities and Exchange Board
            of India (SEBI) under Registration No. INH300009914 and enlisted
            with BSE.
          </p>
          <p>
            This Agreement is governed by the SEBI (Research Analysts)
            Regulations, 2014, the SEBI Act, 1992, and applicable circulars,
            guidelines, and directives.
          </p>
          <p>
            By availing services, you agree to comply with all applicable SEBI
            regulations and Indian laws. All services remain subject to
            regulatory oversight.
          </p>
        </Section>

        {/* ================= SECTION 2 ================= */}
        <Section title="2. Definitions">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Research Analyst (RA):</strong> Individual registered with
              SEBI to provide research and recommendations.
            </li>
            <li>
              <strong>Client/User:</strong> Any person availing research
              services.
            </li>
            <li>
              <strong>Services:</strong> Research reports, analysis,
              recommendations, and educational material.
            </li>
            <li>
              <strong>SEBI:</strong> Securities and Exchange Board of India.
            </li>
          </ul>
        </Section>

        {/* ================= SECTION 3 ================= */}
        <Section title="3. Eligibility and Acceptance">
          <ul className="list-disc pl-6 space-y-2">
            <li>User must be at least 18 years of age</li>
            <li>
              User must be legally competent under the Indian Contract Act, 1872
            </li>
            <li>User must not be prohibited by law</li>
          </ul>
          <p>
            Usage of services constitutes acceptance of these Terms, Privacy
            Policy, SEBI regulations, and all applicable disclaimers.
          </p>
        </Section>

        {/* ================= SECTION 4 ================= */}
        <Section title="4. Scope of Services">
          <p>The Research Analyst provides:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Research reports and investment strategies</li>
            <li>Market analysis and commentary</li>
            <li>Educational and informational content</li>
          </ul>
          <p className="text-slate-400">
            The RA does not provide portfolio management, trade execution, fund
            handling, or brokerage services.
          </p>
        </Section>

        {/* ================= SECTION 5 ================= */}
        <Section title="5. SEBI Act, Regulatory Policy & Disclosures">
          <p>
            The Research Analyst complies with the SEBI Act, 1992 and SEBI
            (Research Analysts) Regulations, 2014.
          </p>
          <p>
            Regulatory disclosures including registration details, conflict of
            interest disclosures, ownership disclosures, and compensation
            structure shall be provided as required by SEBI.
          </p>
          <p>
            Investments involve market risks and past performance is not
            indicative of future results.
          </p>
        </Section>

        {/* ================= SECTION 6 ================= */}
        <Section title="6. Service Delivery and Limitations">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Services may be delivered via email, apps, websites, or messaging
              platforms
            </li>
            <li>Accuracy and uninterrupted delivery cannot be guaranteed</li>
            <li>No assurance of profits, returns, or outcomes is provided</li>
          </ul>
        </Section>

        {/* ================= SECTION 7 ================= */}
        <Section title="7. User Obligations and Conduct">
          <ul className="list-disc pl-6 space-y-2">
            <li>Research content is for personal, non-commercial use only</li>
            <li>Redistribution, resale, or misuse is prohibited</li>
            <li>User must comply with applicable securities laws</li>
          </ul>
        </Section>

        {/* ================= SECTION 8 ================= */}
        <Section title="8. Fees, Payment and Taxation">
          <p>Fees are disclosed upfront and comply with SEBI guidelines.</p>
          <p>
            Non-payment may result in suspension or termination of services.
          </p>
          <p>Users are responsible for applicable taxes including GST.</p>
        </Section>

        {/* ================= SECTION 9 ================= */}
        <Section title="9. Privacy and Confidentiality">
          <p>
            User data is handled in accordance with the Privacy Policy and legal
            requirements.
          </p>
          <p>
            Client information is confidential unless disclosure is required by
            law.
          </p>
        </Section>

        {/* ================= SECTION 10 ================= */}
        <Section title="10. Intellectual Property Rights">
          <p>
            All research content remains the intellectual property of the RA.
          </p>
          <p>Users are granted a limited license for personal use only.</p>
          <p>Unauthorized use may attract legal action.</p>
        </Section>

        {/* ================= SECTION 11 ================= */}
        <Section title="11. Liability and Indemnity">
          <p>
            The RA shall not be liable for losses arising from reliance on
            research.
          </p>
          <p>
            Users agree to indemnify the RA against claims arising from misuse.
          </p>
        </Section>

        {/* ================= SECTION 12 ================= */}
        <Section title="12. Risk Warning and Disclaimer">
          <p>Investment in securities markets is subject to market risks.</p>
          <p>SEBI registration and BSE enlistment do not guarantee returns.</p>
          <p>
            No personalized or individualized investment advice is provided.
          </p>
        </Section>

        {/* ================= SECTION 13 ================= */}
        <Section title="13. Grievance Redressal">
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
          <p>Grievances will be resolved within 30 days.</p>
        </Section>

        {/* ================= SECTION 14 ================= */}
        <Section title="14. Rights of Investors">
          <p>
            Investors have rights to privacy, transparency, adequate
            information, grievance redressal, exit, and feedback.
          </p>
        </Section>

        {/* ================= SECTION 15 ================= */}
        <Section title="15. Termination of Services">
          <p>
            Users may terminate services at any time without refund for
            delivered services.
          </p>
          <p>
            The RA may terminate services for breach, non-payment, or regulatory
            reasons.
          </p>
        </Section>

        {/* ================= SECTION 16 ================= */}
        <Section title="16. Amendments and Updates">
          <p>
            These Terms may be updated as per regulatory or legal requirements.
          </p>
        </Section>

        {/* ================= SECTION 17 ================= */}
        <Section title="17. Governing Law and Jurisdiction">
          <p>
            These Terms are governed by the laws of India. Jurisdiction lies
            exclusively with courts in Durgapur, West Bengal.
          </p>
        </Section>

        {/* ================= SECTION 18 ================= */}
        <Section title="18. Miscellaneous">
          <p>Invalid provisions shall not affect remaining clauses.</p>
          <p>These Terms constitute the entire agreement between parties.</p>
          <p>
            Contact: Krishna Kumar Pathak, SEBI Registered Research Analyst
            (INH300009914), BSE Enlistment No. 5590.
          </p>
        </Section>

        {/* ================= FOOTER ================= */}
        <footer className="border-t border-slate-700 pt-6 text-sm text-slate-400">
          These Terms and Conditions comply with SEBI (Research Analysts)
          Regulations, 2014 and applicable laws and are subject to change.
        </footer>
      </div>
    </section>
  );
}

/* ================= REUSABLE SECTION ================= */
function Section({ title, children }) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl md:text-2xl font-semibold text-white">{title}</h2>
      <div className="text-slate-300 leading-relaxed">{children}</div>
    </section>
  );
}
