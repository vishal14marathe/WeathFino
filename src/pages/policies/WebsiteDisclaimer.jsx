import React from "react";

const WebsiteDisclaimer = () => {
  return (
    <section className="  from-[#0b0f14] to-[#111827] text-gray-200 py-16 px-4">
      <div className="max-w-6xl mx-auto bg-[#0f172a]/80 backdrop-blur rounded-2xl shadow-xl p-6 md:p-10">
        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Disclaimer for Website
        </h1>

        {/* MAIN DISCLAIMER POINTS */}
        <ul className="list-disc pl-6 space-y-4 text-gray-300 leading-relaxed">
          <li>
            <strong className="text-white">Krishna Kumar Pathak</strong> is
            registered with SEBI as an Individual Research Analyst vide
            Registration No. <strong>INH300009914</strong> dated 22-06-2022 and
            provides Research Analyst services to clients in accordance with
            SEBI regulations.
          </li>

          <li>
            Investment in securities markets is subject to market risks. Read
            all related documents carefully before investing.
          </li>

          <li>
            Registration granted by SEBI and certification from NISM do not
            guarantee the performance of the intermediary or provide any
            assurance of returns to investors.
          </li>

          <li>
            Krishna Kumar Pathak is not affiliated with any intermediary and
            does not receive brokerage, commission, or remuneration from any
            third party.
          </li>

          <li>
            No penalties or directions have been issued by SEBI or any other
            regulatory authority against Krishna Kumar Pathak.
          </li>

          <li>
            No stock broker or intermediary is recommended to any client, nor
            is any consideration received from such intermediary.
          </li>

          <li>
            Investment in equity shares carries inherent risks. While sincere
            efforts are made to present accurate research, information is based
            on analysis and sources believed to be reliable. Completeness or
            consistency is not guaranteed.
          </li>

          <li>
            The content is for personal informational purposes only. Krishna
            Kumar Pathak does not take responsibility for any financial loss
            arising from use of this information and does not assure profits or
            returns.
          </li>

          <li>
            No promise or assurance is given for any industry, sector, or
            business group. Investors should evaluate all risk factors
            including financial condition and suitability before investing.
          </li>

          <li>
            Krishna Kumar Pathak or related persons may hold positions in the
            securities recommended.
          </li>

          <li>
            Research recommendations are provided only to entitled clients.
            Any client or third party is prohibited from forwarding, sharing,
            or redistributing reports, calls, SMS, or content. Legal action
            may be initiated for violations.
          </li>

          <li>
            Research analysts are functionally independent from sales,
            trading, or corporate finance activities to ensure objectivity.
          </li>

          <li>
            Any opinion provided shall be treated as an opinion and not
            investment advice. No liability shall arise from reliance on such
            opinion.
          </li>

          <li>
            There is no association with issuers of securities, ensuring no
            conflict of interest and maintaining independence.
          </li>

          <li>
            Stock trading is inherently risky. Users assume full
            responsibility for all trading decisions and outcomes.
          </li>

          <li>
            Simulated or illustrative performance results do not represent
            actual trading and no assurance is given that similar results will
            be achieved.
          </li>

          <li>
            Users bear the entire risk and cost of investment decisions.
            Krishna Kumar Pathak and employees are not liable for actions
            taken based on the provided information.
          </li>

          <li>
            Investors are encouraged to use the platform as a research
            resource and to conduct independent analysis.
          </li>

          <li>
            Content shared on social media platforms (Twitter, Facebook,
            Telegram, YouTube, etc.) is for educational and illustrative
            purposes only and shall not be treated as investment advice.
          </li>
        </ul>

        {/* FINAL DISCLAIMER */}
        <div className="mt-10 border-t border-slate-700 pt-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            Final Disclaimer
          </h2>

          <p className="text-gray-300 leading-relaxed mb-4">
            Krishna Kumar Pathak and <strong>WealthFino</strong> shall not be
            liable for any direct, indirect, incidental, special, or
            consequential losses including trading losses, data inaccuracies,
            missed opportunities, technical failures, or reputational harm
            arising from:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Reliance on any research report, opinion, or recommendation</li>
            <li>Client-supplied KYC errors or outdated information</li>
            <li>Third-party API or technical disruptions</li>
            <li>Misuse, misinterpretation, or unauthorized sharing of content</li>
          </ul>

          <p className="mt-4 text-sm text-gray-400 italic">
            The sole responsibility for investment decisions lies with the
            user. By using the website, services, or content, the user
            acknowledges full acceptance of this disclaimer and agrees to
            indemnify and hold harmless Krishna Kumar Pathak and WealthFino
            from any resulting liability or claims.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WebsiteDisclaimer;
