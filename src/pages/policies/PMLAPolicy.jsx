import React from "react";

const PMLAPolicy = () => {
  return (
    <section className="  from-[#0b0f14] to-[#111827] text-gray-200 py-16 px-4">
      <div className="max-w-6xl mx-auto bg-[#0f172a]/80 backdrop-blur rounded-2xl shadow-xl p-6 md:p-10">
        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
          PMLA (Anti Money Laundering) Policy
        </h1>

        {/* INTRODUCTION */}
        <Section title="Introduction">
          <p>
            This policy is framed and adopted as a requirement under the
            Prevention of Money Laundering Act, 2002 (PMLA). The policy provides
            a framework for anti-money laundering measures to be undertaken by{" "}
            <strong>Krishna Kumar Pathak</strong> (Individual), SEBI Registered
            Research Analyst (Registration No. INH300009914).
          </p>
        </Section>

        {/* OBJECTIVE */}
        <Section title="I. Objective of the PMLA Policy">
          <List
            items={[
              "To prevent misuse of services for money laundering or terrorist financing.",
              "To create awareness and clarity on KYC standards and AML measures.",
              "To establish a proper Client Due Diligence (CDD) process.",
              "To monitor and report suspicious transactions.",
              "To monitor and maintain records of cash transactions exceeding ₹10 lakh.",
            ]}
          />
        </Section>

        {/* CDD */}
        <Section title="II. Client Due Diligence (CDD) Process">
          <List
            items={[
              "Maintain records of valid KYC documents at the time of client onboarding.",
              "Verify client genuineness through direct interaction.",
              "Maintain proper records of all client communications and transactions.",
            ]}
          />
        </Section>

        {/* CLIENT ACCEPTANCE */}
        <Section title="III. Policy for Acceptance of Client">
          <List
            items={[
              "No account shall be opened in a fictitious or anonymous name.",
              "No account shall be opened if fees for services are offered in cash.",
              "No account shall be opened where appropriate CDD measures cannot be applied.",
              "Client identity shall be verified against sanction lists issued by UNSCR.",
              "Clients shall be categorized into low, medium, or high risk categories.",
              "Clients of Special Category (CSC) include non-residents, HNIs, trusts, NGOs, PEPs, complex ownership entities, non face-to-face clients, and high-risk jurisdiction clients.",
            ]}
          />
        </Section>

        {/* SUSPICIOUS TRANSACTIONS */}
        <Section title="IV. Suspicious Transactions">
          <List
            items={[
              "Transactions where identity verification is difficult.",
              "Unclear or suspicious source of funds.",
              "Unusual increase in transaction volume.",
              "Transactions involving high-risk jurisdictions.",
              "Third-party fund transfers.",
            ]}
          />
          <p className="mt-3">
            All suspicious or attempted transactions shall be reported to{" "}
            <strong>FIU-IND</strong>.
          </p>
        </Section>

        {/* MONITORING */}
        <Section title="V. Monitoring of Transactions">
          <List
            items={[
              "Monitoring of unusually large or complex transactions.",
              "Internal threshold limits for client accounts.",
              "Documentation of findings for auditors and regulators.",
              "Preservation of transaction records for five years.",
              "Monitoring includes cash transactions exceeding ₹10 lakh and structuring of transactions.",
              "Periodic review against UNSC sanction lists.",
            ]}
          />
        </Section>

        {/* RECORD KEEPING */}
        <Section title="VI. Record Keeping and Retention">
          <List
            items={[
              "Maintain audit trail of all transactions.",
              "Preserve records related to suspicious transactions for a minimum of five years.",
              "Maintain beneficial ownership and fund flow records.",
              "Records to be retained until closure of investigations, if applicable.",
            ]}
          />
        </Section>

        {/* INFORMATION */}
        <Section title="VII. Information to be Maintained">
          <List
            items={[
              "Nature of transaction.",
              "Amount and currency.",
              "Date of transaction.",
              "Parties involved in the transaction.",
            ]}
          />
        </Section>

        {/* FIU REPORTING */}
        <Section title="VIII. Reporting to FIU-IND">
          <div className="bg-[#020617] border border-slate-700 rounded-xl p-4">
            <p className="font-semibold text-white">
              Director, Financial Intelligence Unit – India (FIU-IND)
            </p>
            <p>6th Floor, Hotel Samrat</p>
            <p>Chanakyapuri, New Delhi – 110021</p>
            <a
              href="https://fiuindia.gov.in"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline"
            >
              https://fiuindia.gov.in
            </a>
          </div>
        </Section>

        {/* OFFICER DETAILS */}
        <Section title="IX. Principal Officer & Designated Director">
          <InfoGrid
            data={[
              ["Name", "Krishna Kumar Pathak"],
              ["Designation", "Research Analyst"],
              ["SEBI Registration No.", "INH300009914"],
              ["BSE Enlistment No.", "5590"],
              ["Email", "skrishna.sk4@gmail.com"],
              ["Phone", "+91 9883455700"],
            ]}
          />
        </Section>

        {/* RESPONSIBILITIES */}
        <Section title="X. Rights & Responsibilities of Principal Officer">
          <List
            items={[
              "Full access to customer identification and CDD data.",
              "Independence in reporting suspicious transactions.",
              "Ensuring effective implementation of PMLA framework.",
              "Timely reporting to FIU-IND.",
              "Cooperation with regulators and statutory authorities.",
              "Regular staff updates on PMLA changes.",
            ]}
          />
        </Section>

        {/* DIRECTOR */}
        <Section title="XI. Rights & Responsibilities of Designated Director">
          <List
            items={[
              "Ensure maintenance of proper records.",
              "Accountable for failures and subject to regulatory action.",
            ]}
          />
        </Section>

        {/* TRAINING */}
        <Section title="XII. Employee Hiring & Training">
          <List
            items={[
              "Adequate employee screening procedures.",
              "Regular AML / CFT training programs for staff.",
            ]}
          />
        </Section>

        {/* REVIEW */}
        <Section title="XIII. Review of Policy">
          <p>
            This policy shall be reviewed periodically and updated as per
            applicable regulatory requirements.
          </p>
        </Section>

        {/* DISCLAIMER */}
        <div className="mt-10 border-t border-slate-700 pt-6">
          <p className="text-sm text-gray-400 italic">
            Disclaimer: This PMLA Policy is framed in accordance with SEBI
            regulations and Indian laws and is subject to modification as per
            regulatory changes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PMLAPolicy;

/* ================== REUSABLE UI ================== */

const Section = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
      {title}
    </h2>
    <div className="text-gray-300 leading-relaxed">{children}</div>
  </div>
);

const List = ({ items }) => (
  <ul className="list-disc pl-6 space-y-2">
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
);

const InfoGrid = ({ data }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#020617] border border-slate-700 rounded-xl p-4">
    {data.map(([label, value], i) => (
      <div key={i}>
        <p className="text-sm text-gray-400">{label}</p>
        <p className="text-white font-medium">{value}</p>
      </div>
    ))}
  </div>
);
