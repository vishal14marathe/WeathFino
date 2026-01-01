import React from "react";
import {
  Shield,
  FileText,
  AlertTriangle,
  XCircle,
  Calendar,
  Mail,
  Clock,
  CreditCard,
  AlertCircle,
  UserX,
  Ban,
  Bell,
  Info,
} from "lucide-react";

const CancellationPolicy = () => {
  const policyData = {
    title: "Cancellation Policy",
    meta: {
      issuedBy: "Krishna Kumar Pathak",
      sebiRegNo: "INH300009914",
      brand: "WealthFino",
      supportEmail: "help@krishnapathak.com",
    },
    content: [
      "This Cancellation Policy sets out the conditions under which cancellations are permitted for purchases made through our website and mobile application. By placing an order, the user acknowledges and agrees to be bound by this policy.",
      "All purchases of digital research reports, subscriptions, and market-related content are final and non-cancellable once such services are delivered, accessed, or made available to the user.",
      "Orders may be cancelled only at the pre-payment stage. Once payment is successfully completed, cancellation requests shall be governed strictly by this Cancellation Policy and the applicable Refund Policy.",
      "Users may request cancellation of future subscription renewals by providing written notice at least twenty-four (24) to forty-eight (48) hours prior to the next scheduled billing cycle.",
      "Cancellation requests submitted after a subscription renewal has already been processed shall not be accepted under any circumstances.",
      "We reserve the right to cancel any order or subscription in cases including but not limited to non-receipt of payment, technical errors preventing service delivery, or breach of the Terms and Conditions by the user.",
      "If payment has been received but no service has been delivered due to reasons attributable to the platform, such cases shall be handled in accordance with the Refund Policy.",
      "Investment in securities markets is subject to market risks. Research services do not guarantee returns. Users must exercise discretion and consult a qualified financial advisor before acting on any research or recommendation.",
      "Krishna Kumar Pathak (SEBI Registered Research Analyst – INH300009914) shall not be responsible for any loss, overtrading, excessive trading, missed profits, or damages of any nature.",
      "All investment and trading decisions are taken solely at the user's own risk.",
    ],
  };

  const generalTerms = [
    {
      icon: <Ban className="w-5 h-5" />,
      text: "All purchases are final and non-cancellable once services are delivered or accessed",
      severity: "critical",
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      text: "Cancellation only possible at pre-payment stage",
      severity: "warning",
    },
  ];

  const subscriptionTerms = [
    {
      icon: <Bell className="w-5 h-5" />,
      text: "24-48 hours notice required before next billing cycle",
      highlight: "Advance notice required",
    },
    {
      icon: <XCircle className="w-5 h-5" />,
      text: "No cancellations after renewal has been processed",
      highlight: "No post-renewal cancellation",
    },
  ];

  const platformRights = [
    {
      icon: <AlertCircle className="w-5 h-5" />,
      text: "Non-receipt of payment",
      type: "violation",
    },
    {
      icon: <XCircle className="w-5 h-5" />,
      text: "Technical errors preventing service delivery",
      type: "technical",
    },
    {
      icon: <UserX className="w-5 h-5" />,
      text: "Breach of Terms and Conditions by user",
      type: "violation",
    },
  ];

  return (
    <section className="min-h-screen   from-gray-900 via-slate-900 to-gray-950 text-gray-200 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header with Gradient */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-red-600/20 to-orange-600/20 rounded-2xl border border-red-500/30">
              <Ban className="w-10 h-10 text-red-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              {policyData.title}
            </h1>
          </div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Guidelines and conditions for order and subscription cancellations
            on WealthFino platform
          </p>
        </div>

        {/* Meta Information Card */}
        <div className="mb-12 p-6 bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <FileText className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Issuing Authority
                </h3>
              </div>
              <div className="space-y-3 pl-10">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <p className="text-gray-300">
                    <span className="font-medium text-gray-400">
                      Issued by:
                    </span>{" "}
                    <span className="text-white">
                      {policyData.meta.issuedBy}
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <p className="text-gray-300">
                    <span className="font-medium text-gray-400">
                      SEBI Registration:
                    </span>{" "}
                    <span className="text-white font-mono">
                      {policyData.meta.sebiRegNo}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-500/10 rounded-lg">
                  <Mail className="w-5 h-5 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Contact Information
                </h3>
              </div>
              <div className="space-y-3 pl-10">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <p className="text-gray-300">
                    <span className="font-medium text-gray-400">Brand:</span>{" "}
                    <span className="text-white">{policyData.meta.brand}</span>
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <p className="text-gray-300">
                    <span className="font-medium text-gray-400">Support:</span>{" "}
                    <a
                      href={`mailto:${policyData.meta.supportEmail}`}
                      className="text-blue-400 hover:text-blue-300 transition-colors font-medium underline decoration-blue-500/30"
                    >
                      {policyData.meta.supportEmail}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="mb-12 p-8 bg-gradient-to-r from-slate-800/30 to-slate-900/30 backdrop-blur-xl rounded-2xl border border-slate-700/50">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl">
              <Info className="w-6 h-6 text-orange-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Policy Overview
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                {policyData.content[0]}
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-16">
          {/* General Terms */}
          <Section
            title="1. General Terms"
            icon={<Ban className="w-6 h-6" />}
            gradient="from-red-500/20 to-orange-600/10"
          >
            <div className="space-y-8">
              <div className="grid gap-4">
                {generalTerms.map((term, index) => (
                  <div
                    key={index}
                    className={`p-5 rounded-xl border transition-all duration-300 ${
                      term.severity === "critical"
                        ? "bg-gradient-to-r from-red-900/20 to-red-900/10 border-red-900/30 hover:border-red-500/50"
                        : "bg-gradient-to-r from-orange-900/20 to-orange-900/10 border-orange-900/30 hover:border-orange-500/50"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-3 rounded-xl ${
                          term.severity === "critical"
                            ? "bg-red-500/20 text-red-400"
                            : "bg-orange-500/20 text-orange-400"
                        }`}
                      >
                        {term.icon}
                      </div>
                      <p className="text-gray-300 flex-1">{term.text}</p>
                      <span
                        className={`px-3 py-1 text-xs font-semibold rounded-full ${
                          term.severity === "critical"
                            ? "bg-red-500/20 text-red-300"
                            : "bg-orange-500/20 text-orange-300"
                        }`}
                      >
                        {term.severity === "critical"
                          ? "Critical"
                          : "Important"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-5 bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-xl border border-slate-700/50">
                <p className="text-gray-300">{policyData.content[2]}</p>
              </div>
            </div>
          </Section>

          {/* Subscription Cancellation */}
          <Section
            title="2. Subscription Cancellation"
            icon={<Bell className="w-6 h-6" />}
            gradient="from-amber-500/20 to-yellow-600/10"
          >
            <div className="space-y-8">
              <div className="grid gap-4">
                {subscriptionTerms.map((term, index) => (
                  <div
                    key={index}
                    className="p-5 bg-gradient-to-r from-amber-900/20 to-orange-900/10 rounded-xl border border-amber-900/30 hover:border-amber-500/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-amber-500/20 rounded-xl text-amber-400">
                        {term.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-300">{term.text}</p>
                      </div>
                      <span className="px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-medium rounded-full">
                        {term.highlight}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-5 bg-gradient-to-r from-amber-900/10 to-transparent rounded-xl border-l-4 border-amber-500">
                <p className="text-gray-300">{policyData.content[4]}</p>
              </div>
            </div>
          </Section>

          {/* Platform Rights */}
          <Section
            title="3. Platform-Initiated Cancellation"
            icon={<Shield className="w-6 h-6" />}
            gradient="from-blue-500/20 to-cyan-600/10"
          >
            <div className="space-y-8">
              <div className="mb-6">
                <p className="text-gray-300 text-lg mb-6">
                  {policyData.content[5]}
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  {platformRights.map((right, index) => (
                    <div
                      key={index}
                      className="p-5 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 group"
                    >
                      <div className="flex flex-col items-center text-center">
                        <div
                          className={`p-3 rounded-xl mb-4 ${
                            right.type === "violation"
                              ? "bg-red-500/20 text-red-400"
                              : "bg-blue-500/20 text-blue-400"
                          } group-hover:scale-110 transition-transform duration-300`}
                        >
                          {right.icon}
                        </div>
                        <p className="text-gray-300">{right.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 bg-gradient-to-r from-blue-900/20 to-transparent rounded-xl">
                <p className="text-gray-300">{policyData.content[6]}</p>
              </div>
            </div>
          </Section>

          {/* Market Risk Disclaimer */}
          <Section
            title="4. Market Risk Disclosure"
            icon={<AlertTriangle className="w-6 h-6" />}
            gradient="from-purple-500/20 to-pink-600/10"
          >
            <div className="space-y-6">
              <div className="p-5 bg-gradient-to-r from-purple-900/20 to-transparent rounded-xl border-l-4 border-purple-500">
                <p className="text-gray-300 text-lg leading-relaxed">
                  {policyData.content[7]}
                </p>
              </div>
            </div>
          </Section>

          {/* Final Disclaimer */}
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-orange-900/10 to-red-900/10"></div>
            <div className="relative p-8 border border-red-700/30 rounded-2xl">
              <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
                <div className="p-4 bg-gradient-to-br from-red-600 to-orange-600 rounded-xl">
                  <AlertTriangle className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    Final Disclaimer
                  </h3>
                  <p className="text-red-100/80 text-lg">
                    Important liability and risk disclosures
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-5 bg-gradient-to-r from-red-900/20 to-transparent rounded-xl">
                  <p className="text-gray-300 leading-relaxed">
                    {policyData.content[8]}
                  </p>
                </div>

                <div className="p-5 bg-gradient-to-r from-orange-900/20 to-transparent rounded-xl border-l-4 border-orange-500">
                  <p className="text-gray-300 font-semibold leading-relaxed">
                    {policyData.content[9]}
                  </p>
                </div>

                <div className="p-4 bg-slate-900/50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <p className="text-gray-300 text-sm">
                      <span className="font-bold text-white">Warning:</span> All
                      investment decisions carry inherent market risks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          {/* <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 via-orange-900/10 to-red-900/10"></div>
            <div className="relative p-8 md:p-12 bg-gradient-to-r from-slate-800/80 to-slate-900/80 border border-slate-700/50 rounded-2xl text-center">
              <div className="max-w-3xl mx-auto">
                <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-red-600/20 to-orange-600/20 rounded-2xl mb-6">
                  <Mail className="w-12 h-12 text-red-400" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Need Help with Cancellations?
                </h3>
                <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                  Contact our support team for any cancellation-related queries
                  or assistance
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={`mailto:${policyData.meta.supportEmail}`}
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl hover:shadow-red-500/20"
                  >
                    <Mail className="w-5 h-5" />
                    Contact Support Team
                  </a>
                  <div className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-800/50 border border-slate-700 text-gray-300 font-medium rounded-xl hover:bg-slate-800/70 transition-colors">
                    <Clock className="w-5 h-5" />
                    Response within 24-48 hours
                  </div>
                </div>
                <p className="text-gray-500 text-sm mt-8">
                  Office hours: Monday to Friday, 10:00 AM to 6:00 PM IST
                </p>
              </div>
            </div>
          </div> */}
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
                WealthFino • SEBI Registered Research Analyst
              </p>
            </div>
            <div className="text-gray-600 text-xs text-center md:text-right">
              <p>
                © {new Date().getFullYear()} {policyData.meta.brand}. All rights
                reserved.
              </p>
              <p className="mt-1">
                This policy is governed by Indian laws and SEBI regulations
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

export default CancellationPolicy;
