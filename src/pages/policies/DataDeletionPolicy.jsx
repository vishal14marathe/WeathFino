import React from "react";
import {
  Trash2,
  Shield,
  FileText,
  UserX,
  Mail,
  Clock,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Lock,
  Archive,
  Scale,
  Smartphone,
  Globe,
  Key,
  Database,
} from "lucide-react";

const DataDeletionPolicy = () => {
  const policyData = {
    title: "Data Deletion & Account Removal Policy",
    meta: {
      brand: "WealthFino",
      issuedBy: "Krishna Kumar Pathak",
      sebiRegNo: "INH300009914",
      contactEmail: "info@krishnapathak.com",
      website: "https://www.krishnapathak.com",
    },
    content: [
      "WealthFino is a research and education platform operated by Mr. Krishna Kumar Pathak, a SEBI Registered Research Analyst (Registration No. INH300009914). We are committed to protecting user privacy and personal data in accordance with the Digital Personal Data Protection Act, 2023, the Information Technology Act, 2000, and the SEBI (Research Analysts) Regulations, 2014.",
      "This policy applies to all users of the WealthFino mobile application, website, and associated services who have created an account, submitted personal data, or interacted with the platform. It also fulfills Google Play's Account Deletion and User Data policy requirements.",
      "Users may request deletion of their WealthFino account and associated personal data through either of the following methods: by emailing info@krishnapathak.com from their registered email address, or directly within the mobile application under Profile Settings → Account → Delete My Account.",
      "To prevent unauthorized deletion, all requests must originate from registered contact details. Verification will be completed through OTP or email confirmation. Requests shall not be processed for accounts under dispute, regulatory inquiry, or pending settlements.",
      "Verified account deletion requests are processed within seven (7) working days from confirmation. Users will receive an acknowledgment email upon receipt and a final confirmation once the deletion process is completed.",
      "Upon successful verification, the following data will be permanently deleted: personal identification details, application usage data, non-essential analytics data, and customer support communications.",
      "Certain information may be retained where required by applicable laws or regulations, including transaction records, audit logs, research documentation, and compliance records mandated under SEBI regulations. Such retained data shall be securely stored and shall not be used for any new or unrelated purpose.",
      "Once an account is deleted, user credentials and access rights are permanently disabled. Deleted data cannot be recovered. Users may re-register at a later date using the same or new credentials, subject to applicable onboarding requirements.",
      "For grievances, data protection queries, or escalation, users may contact the Data Protection Officer (DPO) at WealthFino via info@krishnapathak.com. Grievances will be acknowledged within seventy-two (72) hours and resolved within seven to ten (7–10) working days.",
      "This policy complies with Google Play Developer Policy (Account Deletion & User Data), the Digital Personal Data Protection Act, 2023, the Information Technology Act, 2000, and the SEBI (Research Analysts) Regulations, 2014.",
      "Krishna Kumar Pathak, operating under the brand WealthFino, reserves the right to modify this policy in line with legal, regulatory, or platform updates. Revised versions shall be published on the website and mobile application with updated effective dates.",
      "Investment in securities markets is subject to market risks. Past performance is not indicative of future results. Registration granted by SEBI and certification from NISM do not guarantee performance or assurance of returns.",
    ],
  };

  const keyFeatures = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "DPDPA 2023 Compliant",
      description: "Fully compliant with Digital Personal Data Protection Act",
      color: "from-blue-500/20 to-indigo-600/10",
    },
    {
      icon: <Smartphone className="w-5 h-5" />,
      title: "Multiple Deletion Methods",
      description: "Via email or directly in mobile app settings",
      color: "from-green-500/20 to-emerald-600/10",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "7-Day Processing",
      description: "Requests processed within 7 working days",
      color: "from-amber-500/20 to-orange-600/10",
    },
    {
      icon: <Scale className="w-5 h-5" />,
      title: "SEBI Compliant",
      description: "Follows SEBI Research Analyst Regulations",
      color: "from-purple-500/20 to-purple-600/10",
    },
  ];

  const deletionMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Request",
      steps: [
        "Send email to info@krishnapathak.com",
        "Use registered email address",
        "Subject: Account Deletion Request",
      ],
      color: "from-blue-500/20 to-blue-600/10",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "In-App Request",
      steps: [
        "Go to Profile Settings",
        "Select Account",
        "Click Delete My Account",
      ],
      color: "from-green-500/20 to-green-600/10",
    },
  ];

  const dataToBeDeleted = [
    "Personal identification details",
    "Application usage data",
    "Non-essential analytics data",
    "Customer support communications",
  ];

  const dataRetained = [
    "Transaction records (SEBI requirement)",
    "Audit logs (regulatory compliance)",
    "Research documentation",
    "Compliance records",
  ];

  const complianceStandards = [
    "Digital Personal Data Protection Act, 2023",
    "Information Technology Act, 2000",
    "SEBI (Research Analysts) Regulations, 2014",
    "Google Play Developer Policy",
  ];

  return (
    <section className="min-h-screen   from-gray-900 via-slate-900 to-gray-950 text-gray-200 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header with Gradient */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-red-600/20 to-pink-600/20 rounded-2xl border border-red-500/30">
              <Trash2 className="w-10 h-10 text-red-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              {policyData.title}
            </h1>
          </div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Guidelines for account deletion and data protection in compliance
            with Indian regulations
          </p>
        </div>

        {/* Meta Information Card */}
        <div className="mb-12 p-6 bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Shield className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">Issued By</h3>
              </div>
              <p className="text-gray-300 pl-10 text-sm">
                {policyData.meta.issuedBy}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-500/10 rounded-lg">
                  <Key className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  SEBI Registration
                </h3>
              </div>
              <p className="text-gray-300 pl-10 font-mono text-sm">
                {policyData.meta.sebiRegNo}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-500/10 rounded-lg">
                  <Mail className="w-5 h-5 text-red-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Contact Email
                </h3>
              </div>
              <a
                href={`mailto:${policyData.meta.contactEmail}`}
                className="text-blue-400 hover:text-blue-300 transition-colors pl-10 text-sm block"
              >
                {policyData.meta.contactEmail}
              </a>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <Globe className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">Website</h3>
              </div>
              <a
                href={policyData.meta.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors pl-10 text-sm block"
              >
                {policyData.meta.website}
              </a>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Compliance Standards
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="group relative p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700/50 hover:border-red-500/30 transition-all duration-300"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
                ></div>
                <div className="relative z-10">
                  <div className="p-3 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 mb-4 inline-flex">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
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

          {/* Deletion Methods */}
          <Section
            title="How to Request Account Deletion"
            icon={<UserX className="w-6 h-6" />}
            gradient="from-green-500/20 to-emerald-600/10"
          >
            <div className="space-y-8">
              <div className="p-5 bg-gradient-to-r from-green-900/10 to-transparent rounded-xl border-l-4 border-green-500">
                <p className="text-gray-300">{policyData.content[2]}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {deletionMethods.map((method, index) => (
                  <div
                    key={index}
                    className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700/50 hover:border-green-500/30 transition-all duration-300"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div
                        className={`p-4 rounded-2xl mb-6 ${
                          index === 0
                            ? "bg-gradient-to-br from-blue-500/20 to-blue-600/20 text-blue-400"
                            : "bg-gradient-to-br from-green-500/20 to-green-600/20 text-green-400"
                        }`}
                      >
                        {method.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-6">
                        {method.title}
                      </h3>
                      <div className="space-y-4 w-full">
                        {method.steps.map((step, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div
                              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                                index === 0
                                  ? "bg-blue-500/20 text-blue-300"
                                  : "bg-green-500/20 text-green-300"
                              }`}
                            >
                              {idx + 1}
                            </div>
                            <span className="text-gray-300 text-left text-sm">
                              {step}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-5 bg-gradient-to-r from-amber-900/10 to-transparent rounded-xl">
                <p className="text-gray-300">{policyData.content[3]}</p>
              </div>
            </div>
          </Section>

          {/* Processing Timeline */}
          <Section
            title="Processing Timeline"
            icon={<Clock className="w-6 h-6" />}
            gradient="from-amber-500/20 to-orange-600/10"
          >
            <div className="space-y-6">
              <div className="p-5 bg-gradient-to-r from-amber-900/10 to-transparent rounded-xl">
                <p className="text-gray-300">{policyData.content[4]}</p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-5 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700/50">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 bg-amber-500/20 rounded-xl mb-4 text-amber-400">
                      <Clock className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Request Submission
                    </h4>
                    <p className="text-gray-400 text-sm">
                      User submits verified deletion request
                    </p>
                  </div>
                </div>

                <div className="p-5 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700/50">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 bg-blue-500/20 rounded-xl mb-4 text-blue-400">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Verification
                    </h4>
                    <p className="text-gray-400 text-sm">
                      OTP/Email confirmation and validation
                    </p>
                  </div>
                </div>

                <div className="p-5 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700/50">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 bg-green-500/20 rounded-xl mb-4 text-green-400">
                      <Database className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Processing
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Completed within 7 working days
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* Data Handling */}
          <Section
            title="Data Handling"
            icon={<Archive className="w-6 h-6" />}
            gradient="from-purple-500/20 to-purple-600/10"
          >
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-5 bg-gradient-to-br from-green-900/10 to-slate-800/50 rounded-xl border border-green-900/20">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-green-500/20 rounded-xl text-green-400">
                      <Trash2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">
                        Data to be Deleted
                      </h4>
                      <p className="text-gray-300 mb-4">
                        {policyData.content[5]}
                      </p>
                      <div className="space-y-2">
                        {dataToBeDeleted.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            <span className="text-gray-300 text-sm">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-gradient-to-br from-blue-900/10 to-slate-800/50 rounded-xl border border-blue-900/20">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400">
                      <Lock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">
                        Data Retained (As per Law)
                      </h4>
                      <p className="text-gray-300 mb-4">
                        {policyData.content[6]}
                      </p>
                      <div className="space-y-2">
                        {dataRetained.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            <span className="text-gray-300 text-sm">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-xl">
                <p className="text-gray-300">{policyData.content[7]}</p>
              </div>
            </div>
          </Section>

          {/* Compliance & Grievance */}
          <Section
            title="Compliance & Grievance Redressal"
            icon={<Scale className="w-6 h-6" />}
            gradient="from-indigo-500/20 to-indigo-600/10"
          >
            <div className="space-y-8">
              <div className="p-5 bg-gradient-to-r from-indigo-900/10 to-transparent rounded-xl">
                <p className="text-gray-300">{policyData.content[9]}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-5 bg-gradient-to-br from-indigo-900/10 to-slate-800/50 rounded-xl">
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Compliance Standards
                  </h4>
                  <div className="space-y-3">
                    {complianceStandards.map((standard, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="p-2 bg-indigo-500/20 rounded-lg">
                          <CheckCircle className="w-4 h-4 text-indigo-400" />
                        </div>
                        <span className="text-gray-300">{standard}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-5 bg-gradient-to-br from-red-900/10 to-slate-800/50 rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-red-500/20 rounded-xl text-red-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">
                        Grievance Redressal
                      </h4>
                      <p className="text-gray-300 mb-4">
                        {policyData.content[8]}
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-amber-400" />
                          <span className="text-gray-300 text-sm">
                            72-hour acknowledgment
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300 text-sm">
                            7-10 working days resolution
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* Important Notice */}
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-orange-900/10 to-red-900/10"></div>
            <div className="relative p-8 border border-red-700/30 rounded-2xl">
              <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
                <div className="p-4 bg-gradient-to-br from-red-600 to-orange-600 rounded-xl">
                  <AlertTriangle className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    Important Notice
                  </h3>
                  <p className="text-red-100/80 text-lg">
                    Policy modifications and investment disclaimers
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-5 bg-gradient-to-r from-red-900/20 to-transparent rounded-xl">
                  <p className="text-gray-300 leading-relaxed">
                    {policyData.content[10]}
                  </p>
                </div>

                <div className="p-5 bg-gradient-to-r from-amber-900/20 to-transparent rounded-xl border-l-4 border-amber-500">
                  <p className="text-gray-300 leading-relaxed">
                    {policyData.content[11]}
                  </p>
                </div>

                <div className="p-4 bg-slate-900/50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <p className="text-gray-300 text-sm">
                      <span className="font-bold text-white">Note:</span> SEBI
                      registration and NISM certification do not guarantee
                      investment performance or returns.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Action */}
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-indigo-900/10 to-blue-900/10"></div>
            <div className="relative p-8 md:p-12 bg-gradient-to-r from-slate-800/80 to-slate-900/80 border border-slate-700/50 rounded-2xl text-center">
              <div className="max-w-3xl mx-auto">
                <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-2xl mb-6">
                  <UserX className="w-12 h-12 text-blue-400" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Need to Delete Your Account?
                </h3>
                <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                  Choose your preferred method to initiate the account deletion
                  process
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={`mailto:${policyData.meta.contactEmail}`}
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl hover:shadow-red-500/20"
                  >
                    <Mail className="w-5 h-5" />
                    Email Deletion Request
                  </a>
                  <div className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-800/50 border border-slate-700 text-gray-300 font-medium rounded-xl hover:bg-slate-800/70 transition-colors">
                    <Smartphone className="w-5 h-5" />
                    Use In-App Settings
                  </div>
                </div>
                <p className="text-gray-500 text-sm mt-8">
                  Processed within 7 working days with proper verification
                </p>
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
                WealthFino • DPDPA 2023 Compliant • SEBI Registered
              </p>
            </div>
            <div className="text-gray-600 text-xs text-center md:text-right">
              <p>
                © {new Date().getFullYear()} {policyData.meta.brand}. All rights
                reserved.
              </p>
              <p className="mt-1">
                Data protection policy compliant with Indian regulations
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

export default DataDeletionPolicy;
