export default function DisclosureUserKYC() {
  return (
    <div className="min-h-screen   from-slate-950 to-slate-900 py-16 px-4">
      <div className="max-w-5xl mx-auto text-slate-200">
        {/* HEADER */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
          DISCLOSURE, USER & KYC AGREEMENT
        </h1>

        <div className="space-y-2 text-slate-300 mb-10">
          <p>
            <b>Issued by:</b> Krishna Kumar Pathak
          </p>
          <p>
            <b>SEBI Registered Research Analyst:</b> INH300009914
          </p>
          <p>
            <b>Brand Name:</b> WealthFino
          </p>
          <p>
            <b>BSE Enlistment No.:</b> 5590
          </p>
          <p>
            <b>Address:</b> RS-39/43, 5/3C Golden Park, Sankarpur West, Near
            Rabindranatar Co-operative, Durgapur, West Bengal – 713206
          </p>
        </div>

        <Divider />

        {/* 1 */}
        <Section title="1. About the Research Analyst">
          <p>
            Mr. Krishna Kumar Pathak is a SEBI-registered Research Analyst
            (Registration No. INH300009914) operating under the brand name
            <b> WealthFino</b> from Durgapur, West Bengal. He provides
            independent research analysis and model portfolios.
          </p>
        </Section>

        {/* 2 */}
        <Section title="2. Educational & Professional Qualifications">
          <ul className="list-disc ml-5 space-y-2">
            <li>Post Graduate Diploma in Management (PGDM)</li>
            <li>Certified under NISM-Series XV: Research Analyst</li>
          </ul>
        </Section>

        {/* 3 */}
        <Section title="3. Nature of Business Activities">
          <ul className="list-disc ml-5 space-y-2">
            <li>Independent equity research reports</li>
            <li>
              Buy/Sell/Hold recommendations on listed Indian equities and
              derivatives
            </li>
            <li>Model portfolio strategies and educational resources</li>
          </ul>
          <p className="mt-3 text-slate-400">
            WealthFino does <b>not</b> offer portfolio management, fund-based,
            or execution services.
          </p>
        </Section>

        {/* 4 */}
        <Section title="4. Disciplinary History">
          <p>
            There are no pending or past disciplinary actions, penalties, or
            litigations against Krishna Kumar Pathak by SEBI, stock exchanges,
            or any regulatory authority.
          </p>
        </Section>

        {/* 5 */}
        <Section title="5. Terms & Conditions of Research Usage">
          <p>
            Information is prepared with due diligence; however, accuracy or
            completeness is not guaranteed. Opinions may change without notice.
          </p>
          <p>
            Users must rely on their own judgment and seek professional advice
            before acting.
          </p>
          <p>
            The Research Analyst shall not be responsible for any loss arising
            from use of the information.
          </p>
        </Section>

        {/* 6 */}
        <Section title="6. Financial Interest / Ownership Disclosure">
          <ul className="list-disc ml-5 space-y-2">
            <li>
              The Research Analyst holds no financial interest or beneficial
              ownership ≥ 1% in securities discussed.
            </li>
            <li>
              No material conflict of interest exists on the date of
              publication.
            </li>
          </ul>
        </Section>

        {/* 7 */}
        <Section title="7. Brokerage & Affiliations">
          <p>
            WealthFino and Krishna Kumar Pathak are not affiliated with any
            broker, intermediary, or distributor.
          </p>
        </Section>

        {/* 8 */}
        <Section title="8. Compensation Disclosure">
          <p>
            No compensation has been received from companies covered in research
            during the past twelve months.
          </p>
        </Section>

        {/* 9 */}
        <Section title="9. Public Offering Involvement">
          <p>
            Neither Krishna Kumar Pathak nor WealthFino has managed or
            co-managed any public offering during the past twelve months.
          </p>
        </Section>

        {/* 10 */}
        <Section title="10. Employment Disclosure">
          <p>
            The Research Analyst has never been employed as an officer,
            director, or executive of companies mentioned in reports and is not
            involved in market-making.
          </p>
        </Section>

        {/* 11 */}
        <Section title="11. Sources and Risk Advisory">
          <p>
            Information is sourced from publicly available platforms such as
            NSE/BSE, SEBI filings, Bloomberg, corporate announcements, annual
            reports, and financial news portals.
          </p>
          <p className="text-slate-400">
            Research content is informational and educational only and not
            investment advice.
          </p>
        </Section>

        {/* 12 */}
        <Section title="12. Risk Disclosure on Derivatives (F&O)">
          <ul className="list-disc ml-5 space-y-2">
            <li>
              SEBI study shows 9 out of 10 individual traders incur losses
            </li>
            <li>Average net trading loss ~ ₹50,000</li>
            <li>
              Derivatives trading is high-risk and not suitable for all
              investors
            </li>
          </ul>
        </Section>

        {/* 13 */}
        <Section title="13. Comprehensive Legal Disclaimer">
          <p>
            Research content does not constitute financial, legal, or tax
            advice. No warranty or guarantee is provided.
          </p>
          <p>
            Users agree to indemnify and hold harmless the Research Analyst and
            WealthFino.
          </p>
        </Section>

        {/* FINAL */}
        <div className="border-t border-slate-700 pt-8 mt-16 text-center text-slate-400 text-sm">
          By continuing to use the services, the User confirms full acceptance
          of this Disclosure, User & KYC Agreement.
        </div>
      </div>
    </div>
  );
}

/* ------------------ COMPONENTS ------------------ */

function Section({ title, children }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-10 text-slate-800">
      <h2 className="text-xl md:text-2xl font-semibold mb-4">{title}</h2>
      <div className="space-y-4 leading-relaxed">{children}</div>
    </div>
  );
}

function Divider() {
  return <div className="border-t border-slate-700 mb-12" />;
}
