import React from "react";

const SocialMediaDisclaimers = () => {
  return (
    <section className="from-[#0b0f14] to-[#111827] text-gray-200 py-16 px-4">
      <div className="max-w-6xl mx-auto bg-[#0f172a]/80 backdrop-blur rounded-2xl shadow-xl p-6 md:p-10">
        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Social Media Disclaimers
        </h1>

        {/* CONTENT */}
        <ol className="list-decimal pl-6 space-y-5 text-gray-300 leading-relaxed">
          <li>
            <strong className="text-white">Krishna Kumar Pathak</strong>{" "}
            (Individual) is registered with the Securities and Exchange Board of
            India (SEBI) as an Individual Research Analyst, BSE Enlistment No.
            <strong> 5590</strong>, vide Registration No.
            <strong> INH300009914</strong> dated June 22, 2022, pursuant to
            which he provides Research Analyst services to his clients.
          </li>

          <li>
            Any content displayed or shared on social media platforms is purely
            for educational and knowledge purposes only and shall not be treated
            as investment advice or an opinion of any kind. Neither Krishna
            Kumar Pathak nor any marketing agents associated with him shall be
            held liable or responsible, in any manner whatsoever, for any losses
            incurred by viewers or users acting upon such content.
          </li>

          <li>
            Investment in securities markets is subject to market risks. Read
            all related documents carefully before investing.
          </li>

          <li>
            Registration granted by SEBI and certification from NISM do not in
            any way guarantee the performance of the intermediary or provide any
            assurance of returns to investors.
          </li>

          <li>
            Any opinion on a specific position, suggestion, or view expressed
            under any circumstances shall not be considered as investment
            advice. Krishna Kumar Pathak shall not be liable for any losses
            whatsoever that a client or viewer may incur by acting upon such
            opinions.
          </li>

          <li>
            Krishna Kumar Pathak does not make any representation, warranty, or
            guarantee as to the accuracy, completeness, or timeliness of the
            information including news, prices, statistics, analysis, or
            commentary provided through social media platforms. In no event
            shall he be liable to any person for any decision made or action
            taken in reliance upon such information.
          </li>

          <li>
            The securities quoted, if any, are for illustration purposes only
            and are not recommendatory.
          </li>
        </ol>
      </div>
    </section>
  );
};

export default SocialMediaDisclaimers;
