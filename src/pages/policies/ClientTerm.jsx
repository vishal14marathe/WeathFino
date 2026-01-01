export default function ClientTerm() {
  return (
    <div className="min-h-screen   from-slate-950 to-slate-900 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* PAGE TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          CLIENT CONSENT AND TERMS & CONDITIONS
        </h1>

        <p className="text-slate-300 text-center max-w-3xl mx-auto mb-10">
          Research Recommendation Services are provided by{" "}
          <b>Mr. Krishna Kumar Pathak</b>, SEBI-Registered Research Analyst
          (Registration No. INH300009914, BSE Enlistment No. 5590), in full
          compliance with SEBI (Research Analyst) Regulations, 2014.
        </p>

        <div className="border-t border-slate-700 mb-12" />

        {/* CLIENT AUTHORIZATION */}
        <SectionCard title="CLIENT AUTHORIZATION & MITC COMPLIANCE">
          <p>
            This document records the Client/User’s informed consent,
            acceptance, and authorization in compliance with SEBI regulations
            and applicable Indian laws.
          </p>
        </SectionCard>

        {/* 1 */}
        <SectionCard title="1. Acceptance of MITC & Terms and Conditions">
          <p>
            The Client/User confirms that the Most Important Terms & Conditions
            (MITC) and full Terms & Conditions of Mr. Krishna Kumar Pathak have
            been read, understood, and voluntarily accepted.
          </p>
          <p>
            These terms are legally binding and govern all research
            recommendation services provided under SEBI regulations.
          </p>
          <p>
            The Client/User accepts full responsibility for decisions taken
            based on research recommendations.
          </p>
        </SectionCard>

        {/* 2 */}
        <SectionCard title="2. Digital Consent, KYC & Electronic Signature Declaration">
          <p>
            The Client/User provides explicit consent through OTP verification,
            electronic signature, and digital authentication.
          </p>
          <p>
            Consent includes authorization to collect, process, verify, and
            store PAN, Aadhaar (via UIDAI/DigiLocker), name, DOB, address,
            mobile number, email ID, and KYC data through SEBI-registered KRAs.
          </p>
          <p>
            IP address, timestamps, device details, OTP logs, and digital
            signatures may be securely stored for audit, security, and
            regulatory compliance.
          </p>
          <p>
            This electronic consent is legally valid under the Indian Contract
            Act, IT Act 2000, and DPDP Act 2023 and remains effective until
            revoked in writing.
          </p>
        </SectionCard>

        {/* 3 */}
        <SectionCard title="3. Disclaimer & Risk Warning">
          <ul className="list-disc ml-5 space-y-2">
            <li>
              Investments in securities markets are subject to market risks.
            </li>
            <li>
              Registration with SEBI and certification from NISM do not
              guarantee performance or returns.
            </li>
            <li>
              Options and derivatives (F&O) trading is highly risky and may lead
              to total capital loss.
            </li>
            <li>No assurance or guarantee of profits is provided.</li>
            <li>
              The Research Analyst acts solely as a research service provider
              and shall not be liable for losses.
            </li>
          </ul>
        </SectionCard>

        {/* CLIENT CONFIRMATION */}
        <SectionCard title="CLIENT ACCEPTANCE, AGREEMENT & CONFIRMATION">
          <p>
            The Client/User confirms acceptance of MITC, Terms & Conditions,
            Privacy Policy, SEBI Disclosures, and Client Consent Policy of
            WealthFino.
          </p>
          <p>
            OTP verification or electronic signature constitutes a legally
            valid, binding, and enforceable agreement.
          </p>
          <p>
            The Client/User irrevocably waives any claim of non-reading or
            non-understanding once consent is recorded.
          </p>

          <ul className="list-disc ml-5 space-y-2 mt-4">
            <li>Markets are volatile and risky</li>
            <li>Derivatives trading may result in total loss</li>
            <li>All decisions are self-directed</li>
            <li>No assurance of profits</li>
            <li>
              Client indemnifies the Research Analyst and WealthFino against all
              claims
            </li>
          </ul>
        </SectionCard>

        {/* SEBI CONDITIONS */}
        <SectionCard title="SEBI CIRCULAR & SERVICE CONDITIONS">
          <p>
            All services are subject to SEBI Circular No.
            SEBI/HO/MIRSD/MIRSD-PoD-1/P/CIR/2025/004 and Annexure-B.
          </p>
        </SectionCard>

        {/* 4 */}
        <SectionCard title="4. Availing Research Services">
          <p>
            By subscribing, the Client confirms voluntary selection of research
            services rendered strictly under SEBI RA Regulations.
          </p>
        </SectionCard>

        {/* 5 */}
        <SectionCard title="5. Client Information and KYC">
          <p>
            The Client agrees to furnish complete and accurate KYC information
            as required by SEBI, RAASB, and KRAs.
          </p>
        </SectionCard>

        {/* 6 */}
        <SectionCard title="6. Fees & Payment">
          <p>
            Fees shall be paid only through approved banking channels such as
            UPI, NEFT, IMPS, payment gateways, or CeFCoM.
          </p>
          <p>
            Cash payments are prohibited. Advance fees may be collected only as
            permitted by SEBI.
          </p>
        </SectionCard>

        {/* 7 */}
        <SectionCard title="7. Conflict of Interest">
          <p>
            Any actual or potential conflicts of interest shall be disclosed in
            compliance with SEBI guidelines.
          </p>
        </SectionCard>

        {/* 8 */}
        <SectionCard title="8. Termination & Refund">
          <p>
            Services may be suspended or terminated upon SEBI registration
            suspension or cancellation.
          </p>
          <p>
            Pro-rata refunds shall apply for unexpired subscription periods.
          </p>
        </SectionCard>

        {/* 9 */}
        <SectionCard title="9. Use of Research Reports">
          <p>
            Research reports are confidential and intended only for subscribers.
            Unauthorized distribution is strictly prohibited.
          </p>
        </SectionCard>

        {/* 10 */}
        <SectionCard title="10. Grievance Redressal">
          <div className="bg-slate-100 rounded-lg p-4 text-slate-800 space-y-2">
            <p>
              <b>Email:</b> wealthfino@gmail.com
            </p>
            <p>
              <b>SEBI SCORES:</b>{" "}
              <a
                href="https://scores.sebi.gov.in"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                https://scores.sebi.gov.in
              </a>
            </p>
            <p>
              <b>ODR Portal:</b>{" "}
              <a
                href="https://smartodr.in"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                https://smartodr.in
              </a>
            </p>
          </div>
        </SectionCard>

        {/* DISCLAIMER */}
        <SectionCard title="USER AGREEMENT & DISCLAIMER">
          <p>
            Electronic consent is legally enforceable. The Research Analyst
            shall not be liable for losses arising from reliance on research,
            technical issues, or third-party failures.
          </p>
          <p>
            Users agree to indemnify and hold harmless the Research Analyst and
            WealthFino from any liability.
          </p>
        </SectionCard>

        {/* FOOTER */}
        <div className="mt-16 text-center text-slate-400 text-sm">
          By clicking “I Agree”, the Client/User confirms full acceptance of all
          policies, disclosures, and terms, and authorizes initiation of
          services.
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------
   REUSABLE CARD (NO MAP)
--------------------------------------- */
function SectionCard({ title, children }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-10">
      <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-4">
        {title}
      </h2>
      <div className="space-y-4 text-slate-700 leading-relaxed">{children}</div>
    </div>
  );
}
