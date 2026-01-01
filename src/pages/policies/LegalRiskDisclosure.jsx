import React from "react";

const LegalRiskDisclosure = () => {
  const legalData = {
    title: "Legal & Risk Disclosure",
    meta: {
      issuedBy: "Krishna Kumar Pathak",
      sebiRegNo: "INH300009914",
      bseEnlistment: "5590",
      website: "www.krishnapathak.com",
    },
    content: [
      "Krishna Kumar Pathak, a SEBI Registered Research Analyst (Registration No. INH300009914), and the brand WealthFino operate this platform strictly as a research and information service only.",
      "All content provided under WealthFino — including research reports, recommendations, charts, market opinions, or analysis — is intended solely for general informational and educational purposes.",
      "As permitted under the SEBI (Research Analysts) Regulations, 2014, Krishna Kumar Pathak may provide Buy, Sell, or Hold recommendations based on publicly available data and independent analysis.",
      "Such views do not constitute personalised investment advice, portfolio management services, or an invitation to trade or invest. Users must independently evaluate suitability and are advised to consult a qualified investment advisor before making any financial decision.",
      "The platform is not registered to provide portfolio management, investment advisory, broking, or fund management services.",
      "By accessing this platform or its content, users expressly agree and acknowledge that Krishna Kumar Pathak and WealthFino are not responsible or liable for any outcome whatsoever, including financial, technical, or market-related losses.",
      "Krishna Kumar Pathak and WealthFino expressly disclaim liability for technical or system failures including but not limited to website or app crashes, server downtime, cloud outages, power failures, internet disruptions, API timeouts, OTP or authentication failures, login errors, notification failures, or telecom gateway issues.",
      "Security-related events such as malware attacks, ransomware, DDoS attacks, third-party hacking incidents, natural calamities, government actions, strikes, or force majeure events are beyond reasonable control, and no liability shall arise from such occurrences.",
      "Content-related risks include typographical errors, charting delays, incorrect pricing, outdated data, third-party API inaccuracies, graphical inconsistencies, or misinterpretation of research or analysis.",
      "No profit guarantee is provided. Investments in equity, derivatives (F&O), or IPOs are subject to market volatility, price gaps, liquidity risks, trading halts, and capital loss. Users may incur partial or total loss of invested capital.",
      "All trading or investment decisions taken based on platform content are made entirely at the user's own discretion and risk. Emotional or speculative trading decisions are solely the user's responsibility.",
      "As per SEBI's January 2023 study, 9 out of 10 retail traders in equity F&O incur losses, with an average net loss of approximately ₹50,000 plus transaction costs.",
      "WealthFino may display or link third-party tools, data providers, stock screeners, broker platforms, or APIs. Such third-party services are neither owned nor controlled by Krishna Kumar Pathak or WealthFino, and no guarantee is provided regarding their accuracy, safety, reliability, or uptime.",
      "No guarantee or assurance is provided regarding returns, data accuracy, service continuity, notification delivery, AI outputs, API reliability, or uninterrupted platform access.",
      "Users agree not to hold Krishna Kumar Pathak or WealthFino responsible for network failures, OTP/SMS/email failures, app or website crashes, missed opportunities, profit loss, data breaches, or third-party frauds.",
      "This Legal & Risk Disclosure is governed by the laws of India. Jurisdiction shall lie exclusively with the courts of Durgapur, West Bengal. Any disputes shall be resolved in accordance with applicable Indian arbitration laws.",
      "Payments must be made only through official WealthFino platforms including the mobile application or websites (www.krishnapathak.com) or through payment instructions shared from verified official email IDs only.",
      "Krishna Kumar Pathak and WealthFino shall not be liable for any loss arising from unauthorized payments, impersonation, fraud, scams, or payments made outside official channels.",
      "Users bear full responsibility for verifying the authenticity of communication, protecting personal and financial information, and ensuring payments are made only through authorized channels.",
      "In accordance with SEBI (Research Analysts) Regulations, 2014, the Information Technology Act, 2000, and the Indian Contract Act, 1872, Krishna Kumar Pathak and WealthFino disclaim all liability to the fullest extent permitted by law.",
      "Final Declaration: Krishna Kumar Pathak (SEBI Registered Research Analyst – INH300009914) and the brand WealthFino shall not be held liable for any loss, error, technical failure, fraud, or decision made based on any content shared through their platforms.",
      "Important Payment Notice: Do not transfer funds to unknown individuals or unauthorized links claiming to represent WealthFino. Any such transactions are undertaken at the user's own risk.",
      "हम किसी भी चीज़ की जिम्मेदारी नहीं लेते — चाहे कोई भी कारण हो, कोई भी परिस्थिति हो, हमें कोई जिम्मेदारी नहीं है।",
    ],
  };

  const technicalFailures = [
    "Mobile app or website crashes, freezes, or shutdowns",
    "Server downtime, maintenance, or cloud outages",
    "Internet disruption, API failures, or data delays",
    "OTP, login, authentication, or notification failures",
    "Telecom gateway or messaging failures",
    "Cyber attacks, malware, ransomware, or DDoS incidents",
    "Force majeure events such as natural calamities or government actions",
  ];

  const contentErrors = [
    "Typographical or formatting errors",
    "Incorrect, delayed, or outdated prices or charts",
    "Third-party API inaccuracies",
    "Misinterpretation of research or analysis",
  ];

  const marketRisks = [
    "No profit or return guarantee is provided",
    "Equity, F&O, and IPO investments involve market volatility",
    "Users may incur partial or total capital loss",
    "All decisions are taken solely at the user's own risk",
    "As per SEBI study (Jan 2023), 9 out of 10 retail F&O traders incur losses",
  ];

  const thirdPartyServices = [
    "Links to brokers, APIs, screeners, or tools are third-party services",
    "WealthFino does not control accuracy, uptime, or reliability",
    "No liability is accepted for third-party failures or fraud",
  ];

  const noGuarantees = [
    "No guarantee of returns or capital protection",
    "No assurance of uninterrupted platform access",
    "No assurance of AI or API data accuracy",
    "No guarantee of alerts, notifications, or reminders",
  ];

  const fraudPrevention = [
    "WealthFino is not responsible for impersonation or fraud",
    "Payments made to unknown persons are at user's own risk",
    "No legal claim shall arise for unauthorized transactions",
    "Users must verify authenticity before sharing information",
  ];

  const legalJurisdiction = [
    "Governed by the laws of India",
    "Jurisdiction lies exclusively with courts of Durgapur, West Bengal",
    "Disputes resolved under Indian Arbitration Laws",
  ];

  return (
    <section className=" from-[#0b0f14] to-[#111827] text-gray-200 py-16 px-4">
      <div className="max-w-6xl mx-auto bg-[#0f172a]/80 backdrop-blur rounded-2xl shadow-xl p-6 md:p-10">
        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {legalData.title}
        </h1>

        {/* META */}
        <div className="mb-8 text-gray-300 space-y-1">
          <p>
            <strong>Issued by:</strong> {legalData.meta.issuedBy}
          </p>
          <p>
            <strong>SEBI Registered Research Analyst:</strong>{" "}
            {legalData.meta.sebiRegNo}
          </p>
          <p>
            <strong>BSE Enlistment:</strong> {legalData.meta.bseEnlistment}
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href={`https://${legalData.meta.website}`}
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline"
            >
              {legalData.meta.website}
            </a>
          </p>
          <p>
            <strong>Founder & CEO:</strong> www.krishnapathak.com
          </p>
        </div>

        {/* SECTION 1 */}
        <Section title="1. General Disclaimer">
          <p>{legalData.content[0]}</p>
          <p className="mt-3">{legalData.content[1]}</p>
          <p className="mt-3">{legalData.content[2]}</p>
          <p className="mt-3">{legalData.content[3]}</p>
          <p className="mt-3">{legalData.content[4]}</p>
        </Section>

        {/* SECTION 2 */}
        <Section title="2. Full Non-Liability Declaration">
          <p className="mb-3 font-semibold text-white">
            {legalData.content[5]}
          </p>

          <SubTitle title="A. Technical & System Failures" />
          <List items={technicalFailures} />

          <SubTitle title="B. Content & Data Errors" />
          <List items={contentErrors} />
        </Section>

        {/* SECTION 3 */}
        <Section title="3. Market Risks & Trading Loss Disclaimer">
          <List items={marketRisks} />
          <p className="mt-3">{legalData.content[11]}</p>
        </Section>

        {/* SECTION 4 */}
        <Section title="4. Third-Party Services">
          <List items={thirdPartyServices} />
          <p className="mt-3">{legalData.content[12]}</p>
        </Section>

        {/* SECTION 5 */}
        <Section title="5. We Make NO Guarantee or Promise">
          <List items={noGuarantees} />
          <p className="mt-3">{legalData.content[13]}</p>
        </Section>

        {/* SECTION 6 */}
        <Section title="6. Total Legal Protection for Errors & Failures">
          <p className="mb-3">{legalData.content[14]}</p>
          <p className="mt-3 italic">
            Whatever happens — loss, mistake, delay, error, server problem, app
            problem, anything — we are NOT responsible.
          </p>
        </Section>

        {/* SECTION 7 */}
        <Section title="7. Fraud Protection, Payment Disclaimer & Liability Waiver">
          <p className="mb-3">
            <strong>Official Email:</strong> info@krishnapathak.com |
            wealthfino@gmail.com
          </p>
          <p className="mb-3">
            <strong>Authorised Platforms:</strong> Mobile App – "WealthFino" |
            Website – www.krishnapathak.com
          </p>

          <SubTitle title="Official Payment Channels Only" />
          <p className="mb-3">
            All payments to Krishna Kumar Pathak or the brand WealthFino must be
            made only through:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Via the official mobile app: WealthFino (available on Play
              Store/App Store)
            </li>
            <li>Through our official websites: www.krishnapathak.com</li>
            <li>
              By using payment links or UPI/Bank details provided directly from
              our official email IDs
            </li>
          </ul>

          <SubTitle title="Right to Verify Before Payment" />
          <p className="mb-3">
            Before making any payment, the User has the full right and option
            to:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Call and confirm the payment details</li>
            <li>Email to confirm via our official IDs</li>
            <li>Check the mobile app or website for authentic instructions</li>
          </ul>

          <SubTitle title="No Liability for Fraudulent or Unauthorized Payments" />
          <p className="mb-3">
            Krishna Kumar Pathak (SEBI Registered Research Analyst) and/or the
            brand WealthFino shall not, under any circumstances, be held liable
            or responsible for any monetary loss, damage, or grievance suffered
            by any individual or entity due to fraudulent impersonation through
            unauthorized channels.
          </p>

          <List items={fraudPrevention} />
        </Section>

        {/* SECTION 8 */}
        <Section title="8. Governing Law & Jurisdiction">
          <List items={legalJurisdiction} />
          <p className="mt-3">{legalData.content[15]}</p>
        </Section>

        {/* SECTION 9 */}
        <Section title="9. Legal Standing & Protection">
          <p className="mb-3">This clause is enforceable under:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Regulation 18 of SEBI (Research Analysts) Regulations, 2014</li>
            <li>Sections 43A & 79 of the Information Technology Act, 2000</li>
            <li>
              Section 73 of the Indian Contract Act, 1872 (liability limitation)
            </li>
            <li>General cyber fraud protection laws of India</li>
          </ul>
        </Section>

        {/* FINAL DECLARATION */}
        <div className="mt-10 border-t border-slate-700 pt-6">
          <h3 className="text-xl font-semibold text-white mb-4">
            Final Declaration
          </h3>

          <p className="italic text-gray-400 mb-3">{legalData.content[20]}</p>

          <p className="text-gray-400 mb-3">{legalData.content[21]}</p>

          <p className="text-gray-400 mb-3 font-semibold">
            Important Payment Notice: {legalData.content[22]}
          </p>

          <p className="text-gray-400 mb-3">
            If you become a victim of any scam, fraud, impersonation, or false
            promise made outside our official channels, you alone will be held
            responsible. Krishna Kumar Pathak and WealthFino are not liable in
            any manner whatsoever.
          </p>

          <p className="text-gray-400 mt-4 text-center font-semibold">
            {legalData.content[23]}
          </p>
        </div>
      </div>
    </section>
  );
};

/* ================= REUSABLE UI ================= */

const Section = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
      {title}
    </h2>
    <div className="text-gray-300 leading-relaxed space-y-3">{children}</div>
  </div>
);

const SubTitle = ({ title }) => (
  <h3 className="text-lg font-semibold text-white mt-4 mb-2">{title}</h3>
);

const List = ({ items }) => (
  <ul className="list-disc pl-6 space-y-2">
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
);

export default LegalRiskDisclosure;
