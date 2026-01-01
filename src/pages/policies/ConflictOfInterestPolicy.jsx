import React from "react";
import {
  Shield,
  FileText,
  AlertTriangle,
  Eye,
  Lock,
  CheckCircle,
  XCircle,
  Scale,
  UserCheck,
  BookOpen,
  AlertCircle,
  RefreshCw,
  Archive,
  Mail,
  Clock,
  Award,
} from "lucide-react";

const ConflictOfInterestPolicy = () => {
  const policyData = {
    title: "Internal Policy on Conflict of Interest",
    meta: {
      issuedBy: "Krishna Kumar Pathak",
      sebiRegNo: "INH300009914",
      bseEnlistment: "5590",
    },
    content: [
      "This Internal Policy on Conflict of Interest is formulated in compliance with Regulation 15(1) of the SEBI (Research Analyst) Regulations, 2014 and outlines the principles and mechanisms adopted by Krishna Kumar Pathak to identify, avoid, disclose, and manage conflicts of interest arising during the course of research activity.",
      "A conflict of interest refers to any circumstance that may give rise to a personal or professional interest conflicting with the interest of clients or impacting the objectivity and independence of research recommendations.",
      "The Research Analyst ensures honesty, integrity, independence, and transparency in all research and recommendation activities, while maintaining a clear separation between research and any commercial interest.",
      "The Analyst always acts in the best interest of clients, subject to applicable regulatory frameworks, and discloses all material interests or conflicts before or at the time of making any recommendation.",
      "Conflict scenarios include situations where the Analyst or immediate relatives hold financial interest in recommended securities, receive consideration from issuer companies, or provide services to companies under research coverage. In such cases, mandatory disclosures are made as per SEBI RA norms.",
      "Every research report contains disclosures required under Regulation 19(1)(e), including ownership of securities, any past or present business relationship with the issuer, and whether the subject company has been a client within the previous twelve months.",
      "The research function operates independently and is fully segregated from any commercial, advisory, or distribution activity. No incentives, compensation, or consideration are accepted from companies for research coverage.",
      "The Research Analyst is not influenced by promoters, brokers, or any third parties while preparing research reports and does not participate in IPO allocation decisions or fund-raising activities of covered companies.",
      "A restricted list is maintained and updated regularly for companies where conflicts may exist, and no research reports or commentary are issued on such companies during the restriction period.",
      "Internal monitoring mechanisms, audits, and compliance checks are conducted periodically to ensure effective conflict management and adherence to SEBI Research Analyst Regulations.",
      "The Research Analyst and associated personnel undergo periodic training on SEBI RA Regulations, conflict identification and avoidance, research ethics, and compliance standards.",
      "Clients are informed of the Analyst's SEBI registration details, potential conflicts of interest (if any), and their right to seek clarification or lodge grievances related to conflict matters.",
      "Any breach of this policy is treated as a serious violation and may result in disciplinary action, including reporting to SEBI or BSE where required.",
      "All research reports, disclosures, recommendation logs, and conflict declarations are preserved for a minimum period of five (5) years in accordance with Regulation 25 of the SEBI (Research Analyst) Regulations.",
      "This policy is reviewed annually or earlier if required due to changes in laws, regulations, or business practices, and updated accordingly.",
      "Investment in securities markets is subject to market risks. Past performance is not indicative of future results. Registration granted by SEBI and certification from NISM do not guarantee performance or assurance of returns.",
    ],
  };

  const keyPrinciples = [
    {
      icon: <Scale className="w-5 h-5" />,
      title: "Compliance",
      description: "Formulated in compliance with SEBI Regulation 15(1)",
      color: "from-blue-500/20 to-blue-600/10",
    },
    {
      icon: <Eye className="w-5 h-5" />,
      title: "Transparency",
      description: "Full disclosure of all material interests and conflicts",
      color: "from-green-500/20 to-emerald-600/10",
    },
    {
      icon: <Lock className="w-5 h-5" />,
      title: "Independence",
      description: "Complete separation from commercial interests",
      color: "from-purple-500/20 to-purple-600/10",
    },
    {
      icon: <UserCheck className="w-5 h-5" />,
      title: "Client Interest",
      description: "Always acting in the best interest of clients",
      color: "from-amber-500/20 to-amber-600/10",
    },
  ];

  const conflictScenarios = [
    {
      icon: <AlertCircle className="w-5 h-5" />,
      title: "Financial Interest",
      description: "Analyst or relatives holding securities being recommended",
    },
    {
      icon: <XCircle className="w-5 h-5" />,
      title: "Consideration Received",
      description: "Receiving compensation from issuer companies",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Service Provider",
      description: "Providing services to companies under research coverage",
    },
  ];

  const disclosureRequirements = [
    "Ownership of securities in subject company",
    "Past or present business relationships with issuer",
    "Client status within previous 12 months",
    "Any material conflicts of interest",
  ];

  const complianceMeasures = [
    {
      icon: <RefreshCw className="w-5 h-5" />,
      title: "Restricted List",
      description: "Regularly updated list of restricted companies",
    },
    {
      icon: <Eye className="w-5 h-5" />,
      title: "Internal Monitoring",
      description: "Periodic audits and compliance checks",
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Training Programs",
      description: "Regular training on SEBI regulations and ethics",
    },
    {
      icon: <Archive className="w-5 h-5" />,
      title: "Record Keeping",
      description: "5-year preservation of all documents as per SEBI norms",
    },
  ];

  return (
    <section className="min-h-screen  from-gray-900 via-slate-900 to-gray-950 text-gray-200 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header with Gradient */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-2xl border border-blue-500/30">
              <Scale className="w-10 h-10 text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
              {policyData.title}
            </h1>
          </div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Ensuring transparency, independence, and client-first approach in
            all research activities
          </p>
        </div>

        {/* Meta Information Card */}
        <div className="mb-12 p-6 bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <UserCheck className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">Issued By</h3>
              </div>
              <p className="text-gray-300 pl-10 text-lg font-medium">
                {policyData.meta.issuedBy}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-500/10 rounded-lg">
                  <Award className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  SEBI Registration
                </h3>
              </div>
              <p className="text-gray-300 pl-10 font-mono">
                {policyData.meta.sebiRegNo}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <FileText className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  BSE Enlistment
                </h3>
              </div>
              <p className="text-gray-300 pl-10">
                {policyData.meta.bseEnlistment}
              </p>
            </div>
          </div>
        </div>

        {/* Key Principles */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Core Principles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyPrinciples.map((principle, index) => (
              <div
                key={index}
                className="group relative p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${principle.color} rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
                ></div>
                <div className="relative z-10">
                  <div className="p-3 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 mb-4 inline-flex">
                    {principle.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-16">
          {/* Policy Overview */}
          <Section
            title="Policy Overview"
            icon={<FileText className="w-6 h-6" />}
            gradient="from-blue-500/20 to-blue-600/10"
          >
            <div className="space-y-6">
              <div className="p-5 bg-gradient-to-r from-blue-900/10 to-transparent rounded-xl">
                <p className="text-gray-300 text-lg leading-relaxed">
                  {policyData.content[0]}
                </p>
              </div>
              <div className="p-5 bg-gradient-to-r from-slate-800/30 to-slate-900/30 rounded-xl">
                <p className="text-gray-300 leading-relaxed">
                  {policyData.content[1]}
                </p>
              </div>
            </div>
          </Section>

          {/* Commitment to Integrity */}
          <Section
            title="Commitment to Integrity"
            icon={<Shield className="w-6 h-6" />}
            gradient="from-green-500/20 to-emerald-600/10"
          >
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-5 bg-gradient-to-br from-green-900/10 to-slate-800/50 rounded-xl border border-green-900/20">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-green-500/20 rounded-xl text-green-400">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        Core Values
                      </h4>
                      <p className="text-gray-300">{policyData.content[2]}</p>
                    </div>
                  </div>
                </div>
                <div className="p-5 bg-gradient-to-br from-blue-900/10 to-slate-800/50 rounded-xl border border-blue-900/20">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400">
                      <Eye className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        Client Priority
                      </h4>
                      <p className="text-gray-300">{policyData.content[3]}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* Conflict Scenarios */}
          <Section
            title="Conflict Scenarios & Disclosures"
            icon={<AlertCircle className="w-6 h-6" />}
            gradient="from-amber-500/20 to-orange-600/10"
          >
            <div className="space-y-8">
              <div className="p-5 bg-gradient-to-r from-amber-900/10 to-transparent rounded-xl border-l-4 border-amber-500">
                <p className="text-gray-300">{policyData.content[4]}</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {conflictScenarios.map((scenario, index) => (
                  <div
                    key={index}
                    className="p-5 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700/50 hover:border-amber-500/30 transition-all duration-300"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="p-3 bg-amber-500/20 rounded-xl mb-4 text-amber-400">
                        {scenario.icon}
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {scenario.title}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {scenario.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-5 bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-xl">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Mandatory Disclosures (Regulation 19(1)(e))
                </h4>
                <p className="text-gray-300 mb-4">{policyData.content[5]}</p>
                <div className="grid gap-3 pl-4">
                  {disclosureRequirements.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Section>

          {/* Independence Measures */}
          <Section
            title="Independence & Segregation"
            icon={<Lock className="w-6 h-6" />}
            gradient="from-purple-500/20 to-purple-600/10"
          >
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-5 bg-gradient-to-br from-purple-900/10 to-slate-800/50 rounded-xl border border-purple-900/20">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-500/20 rounded-xl text-purple-400">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        Complete Segregation
                      </h4>
                      <p className="text-gray-300">{policyData.content[6]}</p>
                    </div>
                  </div>
                </div>
                <div className="p-5 bg-gradient-to-br from-indigo-900/10 to-slate-800/50 rounded-xl border border-indigo-900/20">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-indigo-500/20 rounded-xl text-indigo-400">
                      <XCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        No External Influence
                      </h4>
                      <p className="text-gray-300">{policyData.content[7]}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* Compliance Measures */}
          <Section
            title="Compliance & Monitoring"
            icon={<CheckCircle className="w-6 h-6" />}
            gradient="from-emerald-500/20 to-teal-600/10"
          >
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="p-5 bg-gradient-to-br from-emerald-900/10 to-slate-800/50 rounded-xl">
                    <h4 className="text-lg font-semibold text-white mb-3">
                      Restricted List Management
                    </h4>
                    <p className="text-gray-300">{policyData.content[8]}</p>
                  </div>
                  <div className="p-5 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl">
                    <h4 className="text-lg font-semibold text-white mb-3">
                      Internal Monitoring
                    </h4>
                    <p className="text-gray-300">{policyData.content[9]}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {complianceMeasures.map((measure, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300"
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="p-2 bg-emerald-500/20 rounded-lg mb-3 text-emerald-400">
                          {measure.icon}
                        </div>
                        <h5 className="text-sm font-semibold text-white mb-1">
                          {measure.title}
                        </h5>
                        <p className="text-gray-400 text-xs">
                          {measure.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 bg-gradient-to-r from-emerald-900/10 to-transparent rounded-xl">
                <p className="text-gray-300">{policyData.content[10]}</p>
              </div>
            </div>
          </Section>

          {/* Client Rights & Record Keeping */}
          <Section
            title="Client Rights & Record Keeping"
            icon={<BookOpen className="w-6 h-6" />}
            gradient="from-cyan-500/20 to-cyan-600/10"
          >
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-5 bg-gradient-to-br from-cyan-900/10 to-slate-800/50 rounded-xl">
                  <h4 className="text-lg font-semibold text-white mb-3">
                    Client Information Rights
                  </h4>
                  <p className="text-gray-300">{policyData.content[11]}</p>
                </div>
                <div className="p-5 bg-gradient-to-br from-blue-900/10 to-slate-800/50 rounded-xl">
                  <h4 className="text-lg font-semibold text-white mb-3">
                    Document Preservation
                  </h4>
                  <p className="text-gray-300">{policyData.content[13]}</p>
                </div>
              </div>

              <div className="p-5 bg-gradient-to-r from-red-900/10 to-transparent rounded-xl border border-red-900/20">
                <h4 className="text-lg font-semibold text-white mb-3 text-red-300">
                  Breach Consequences
                </h4>
                <p className="text-gray-300">{policyData.content[12]}</p>
              </div>

              <div className="p-5 bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-xl">
                <h4 className="text-lg font-semibold text-white mb-3">
                  Policy Review Cycle
                </h4>
                <p className="text-gray-300">{policyData.content[14]}</p>
              </div>
            </div>
          </Section>

          {/* Risk Disclaimer */}
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 via-orange-900/10 to-red-900/10"></div>
            <div className="relative p-8 border border-amber-700/30 rounded-2xl">
              <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
                <div className="p-4 bg-gradient-to-br from-amber-600 to-orange-600 rounded-xl">
                  <AlertTriangle className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    Investment Risk Disclaimer
                  </h3>
                  <p className="text-amber-100/80 text-lg">
                    Important disclosures as per SEBI regulations
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-5 bg-gradient-to-r from-amber-900/20 to-transparent rounded-xl">
                  <p className="text-gray-300 leading-relaxed">
                    {policyData.content[15]}
                  </p>
                </div>

                <div className="p-4 bg-slate-900/50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <p className="text-gray-300 text-sm">
                      <span className="font-bold text-white">Important:</span>{" "}
                      Registration granted by SEBI and certification from NISM
                      do not guarantee performance or assurance of returns.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-16 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm">
              <p className="font-medium">
                Last updated:{" "}
                {new Date().toLocaleDateString("en-IN", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <p className="mt-1">
                Compliant with SEBI (Research Analyst) Regulations, 2014
              </p>
            </div>
            <div className="text-gray-600 text-xs text-center md:text-right">
              <p>
                © {new Date().getFullYear()} WealthFino. All rights reserved.
              </p>
              <p className="mt-1">
                Formulated in compliance with Regulation 15(1) of SEBI RA
                Regulations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ================= REUSABLE UI COMPONENTS ================= */

const Section = ({ title, icon, gradient, children }) => (
  <div className="relative group">
    <div
      className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
    ></div>
    <div className="relative p-6 md:p-8 bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-slate-700/50 group-hover:border-slate-600/70 transition-all duration-300">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 shadow-lg">
          {icon}
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
      </div>
      <div className="text-gray-300 space-y-6">{children}</div>
    </div>
  </div>
);

export default ConflictOfInterestPolicy;
