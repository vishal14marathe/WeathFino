import React from "react";
import {
  CheckCircle,
  XCircle,
  Clock,
  Mail,
  FileText,
  AlertTriangle,
  Shield,
  CreditCard,
  RefreshCw,
  FileCheck,
  AlertCircle,
  Calendar,
} from "lucide-react";

const RefundPolicy = () => {
  const policyData = {
    title: "Refund Policy",
    meta: {
      issuedBy: "Krishna Kumar Pathak",
      sebiRegNo: "INH300009914",
      brand: "WealthFino",
      supportEmail: "help@krishnapathak.com",
    },
    content: [
      "This Refund Policy governs the conditions under which refunds may be granted for purchases made through our website and mobile application. By completing a purchase on our platform, you acknowledge, understand, and agree to be bound by the terms set forth in this policy.",
      "This Refund Policy applies to all purchases made via our platform, including but not limited to digital research reports, subscriptions, educational content, and market insights. By purchasing any offering, you agree to this Refund Policy in addition to the Terms & Conditions.",
      "Refunds shall be permitted only under limited circumstances such as duplicate payments where the user is charged more than once for the same transaction, or verified technical errors where payment is deducted but the service is not delivered.",
      "To be eligible for a refund, a request must be submitted within seven (7) calendar days from the transaction date and must be supported by valid proof such as a bank statement, UTR number, transaction ID, or payment gateway confirmation.",
      "Once a digital research report, subscription, or any market insight content has been delivered or accessed, no refund shall be permitted under any circumstances.",
      "To initiate a refund request, the customer must send a written request to help@krishnapathak.com within the specified seven-day period along with all relevant payment details.",
      "Upon receipt of a valid refund request, the case shall be reviewed for compliance validation within 5–7 working days. If approved, the refund shall be credited back to the original payment method within 7–10 business days, subject to standard banking timelines.",
      "Refunds shall not be provided in cases where digital content or subscriptions have already been accessed, for subscription renewals after service delivery, dissatisfaction with content quality or interpretation, market outcomes, or requests submitted beyond the seven-day window.",
      "Investment in securities markets is subject to market risks. Research services do not guarantee returns. Users must exercise discretion and consult a qualified financial advisor before acting on any research or recommendation.",
      "Krishna Kumar Pathak (SEBI Registered Research Analyst – INH300009914) shall not be responsible for any loss, overtrading, excessive trading, missed profits, or damages of any nature. All investment and trading decisions remain solely the responsibility of the user.",
    ],
  };

  const eligibilityItems = [
    {
      icon: <CreditCard className="w-5 h-5" />,
      title: "Duplicate Payments",
      description: "User charged more than once for the same transaction",
    },
    {
      icon: <RefreshCw className="w-5 h-5" />,
      title: "Technical Errors",
      description:
        "Payment deducted but service not delivered due to verified technical issues",
    },
  ];

  const conditionsItems = [
    {
      icon: <Calendar className="w-5 h-5" />,
      text: "Request must be submitted within 7 calendar days from transaction date",
      highlight: "7-day window",
    },
    {
      icon: <FileCheck className="w-5 h-5" />,
      text: "Valid proof required: Bank statement, UTR number, Transaction ID, or payment confirmation",
      highlight: "Proof required",
    },
    {
      icon: <AlertCircle className="w-5 h-5" />,
      text: "No refunds after content has been delivered or accessed",
      highlight: "No post-access refunds",
    },
  ];

  const refundProcessSteps = [
    {
      number: "01",
      icon: <Mail className="w-6 h-6" />,
      title: "Submit Request",
      desc: "Email to help@krishnapathak.com within 7 days with payment details",
    },
    {
      number: "02",
      icon: <FileCheck className="w-6 h-6" />,
      title: "Provide Proof",
      desc: "Include transaction ID, UTR number, or bank statement",
    },
    {
      number: "03",
      icon: <Clock className="w-6 h-6" />,
      title: "Validation Period",
      desc: "5–7 working days for compliance review",
    },
    {
      number: "04",
      icon: <CreditCard className="w-6 h-6" />,
      title: "Refund Process",
      desc: "7–10 business days to original payment method",
    },
  ];

  const exclusionItems = [
    {
      icon: <XCircle className="w-5 h-5" />,
      text: "Digital content already delivered or accessed",
      severity: "high",
    },
    {
      icon: <XCircle className="w-5 h-5" />,
      text: "Subscription renewals after service delivery",
      severity: "high",
    },
    {
      icon: <XCircle className="w-5 h-5" />,
      text: "Dissatisfaction with content quality or interpretation",
      severity: "medium",
    },
    {
      icon: <XCircle className="w-5 h-5" />,
      text: "Market outcomes or requests beyond 7-day window",
      severity: "medium",
    },
  ];

  return (
    <section className="min-h-screen   from-gray-900 via-slate-900 to-gray-950 text-gray-200 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header with Gradient */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl border border-blue-500/30">
              <Shield className="w-10 h-10 text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              {policyData.title}
            </h1>
          </div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Transparent and fair refund guidelines for all purchases on
            WealthFino platform
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
                <div className="p-2 bg-green-500/10 rounded-lg">
                  <Mail className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Contact Information
                </h3>
              </div>
              <div className="space-y-3 pl-10">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <p className="text-gray-300">
                    <span className="font-medium text-gray-400">Brand:</span>{" "}
                    <span className="text-white">{policyData.meta.brand}</span>
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <p className="text-gray-300">
                    <span className="font-medium text-gray-400">
                      Support Email:
                    </span>{" "}
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

        {/* Main Content */}
        <div className="space-y-16">
          {/* Overview Section */}
          <Section
            title="1. Policy Overview"
            icon={<FileText className="w-6 h-6" />}
            gradient="from-blue-500/20 to-blue-600/10"
          >
            <div className="space-y-6">
              <div className="p-4 bg-slate-800/30 rounded-xl">
                <p className="text-gray-300 text-lg leading-relaxed">
                  {policyData.content[0]}
                </p>
              </div>
              <div className="p-4 bg-slate-800/30 rounded-xl">
                <p className="text-gray-300 leading-relaxed">
                  {policyData.content[1]}
                </p>
              </div>
            </div>
          </Section>

          {/* Refund Eligibility */}
          <Section
            title="2. Refund Eligibility"
            icon={<CheckCircle className="w-6 h-6" />}
            gradient="from-green-500/20 to-emerald-600/10"
          >
            <div className="space-y-8">
              {/* Qualifying Circumstances */}
              <div>
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Qualifying Circumstances
                  </h4>
                  <p className="text-gray-400">{policyData.content[2]}</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {eligibilityItems.map((item, index) => (
                    <div
                      key={index}
                      className="group p-5 bg-gradient-to-br from-green-900/10 to-slate-800/50 rounded-xl border border-green-900/20 hover:border-green-500/40 transition-all duration-300 hover:scale-[1.02]"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-green-500/10 rounded-xl group-hover:bg-green-500/20 transition-colors">
                          {item.icon}
                        </div>
                        <div>
                          <h5 className="text-lg font-semibold text-white mb-2">
                            {item.title}
                          </h5>
                          <p className="text-gray-300">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conditions & Requirements */}
              <div>
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Conditions & Requirements
                  </h4>
                  <p className="text-gray-400">{policyData.content[3]}</p>
                </div>
                <div className="space-y-4">
                  {conditionsItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 bg-slate-800/40 rounded-xl hover:bg-slate-800/60 transition-colors"
                    >
                      <div className="p-2 bg-blue-500/20 rounded-lg">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-300">{item.text}</p>
                      </div>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm font-medium rounded-full">
                        {item.highlight}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                  <p className="text-gray-300 font-medium">
                    <span className="text-red-400 font-bold">Important:</span>{" "}
                    {policyData.content[4]}
                  </p>
                </div>
              </div>
            </div>
          </Section>

          {/* Refund Process */}
          <Section
            title="3. Refund Process"
            icon={<RefreshCw className="w-6 h-6" />}
            gradient="from-purple-500/20 to-purple-600/10"
          >
            <div className="space-y-8">
              <div>
                <p className="text-gray-300 text-lg mb-8">
                  {policyData.content[5]}
                </p>

                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-purple-500/20 to-blue-500/20 transform -translate-y-1/2 hidden md:block"></div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                    {refundProcessSteps.map((step, index) => (
                      <div key={index} className="relative group">
                        <div className="relative p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                          {/* Step number badge */}
                          <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center font-bold text-white text-xl shadow-lg">
                            {step.number}
                          </div>

                          {/* Icon */}
                          <div className="p-3 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl mb-4 inline-flex">
                            {step.icon}
                          </div>

                          {/* Content */}
                          <h4 className="text-xl font-bold text-white mb-3">
                            {step.title}
                          </h4>
                          <p className="text-gray-400 text-sm">{step.desc}</p>

                          {/* Arrow connector for desktop */}
                          {index < refundProcessSteps.length - 1 && (
                            <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 text-purple-400 hidden md:block">
                              <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 p-5 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-xl border border-purple-500/20">
                  <p className="text-gray-300">{policyData.content[6]}</p>
                </div>
              </div>
            </div>
          </Section>

          {/* Exclusions */}
          <Section
            title="4. Non-Refundable Cases"
            icon={<XCircle className="w-6 h-6" />}
            gradient="from-red-500/20 to-red-600/10"
          >
            <div className="space-y-8">
              <div>
                <p className="text-gray-300 text-lg mb-6">
                  {policyData.content[7]}
                </p>

                <div className="grid gap-4">
                  {exclusionItems.map((item, index) => (
                    <div
                      key={index}
                      className={`p-5 rounded-xl border transition-all duration-300 ${
                        item.severity === "high"
                          ? "bg-gradient-to-r from-red-900/20 to-red-900/10 border-red-900/30 hover:border-red-500/50"
                          : "bg-gradient-to-r from-orange-900/20 to-orange-900/10 border-orange-900/30 hover:border-orange-500/50"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`p-3 rounded-xl ${
                            item.severity === "high"
                              ? "bg-red-500/20 text-red-400"
                              : "bg-orange-500/20 text-orange-400"
                          }`}
                        >
                          {item.icon}
                        </div>
                        <p className="text-gray-300 flex-1">{item.text}</p>
                        <span
                          className={`px-3 py-1 text-xs font-semibold rounded-full ${
                            item.severity === "high"
                              ? "bg-red-500/20 text-red-300"
                              : "bg-orange-500/20 text-orange-300"
                          }`}
                        >
                          {item.severity === "high" ? "Critical" : "Important"}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Section>

          {/* Disclaimer Section */}
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
                    Important information about securities market investments
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-5 bg-gradient-to-r from-amber-900/20 to-transparent rounded-xl">
                  <p className="text-gray-300 leading-relaxed">
                    {policyData.content[8]}
                  </p>
                </div>

                <div className="p-5 bg-gradient-to-r from-red-900/20 to-transparent rounded-xl border-l-4 border-red-500">
                  <p className="text-gray-300 font-semibold leading-relaxed">
                    {policyData.content[9]}
                  </p>
                </div>

                <div className="p-4 bg-slate-900/50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <p className="text-gray-300 text-sm">
                      <span className="font-bold text-white">Note:</span> All
                      investment and trading decisions remain solely the
                      responsibility of the user.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-blue-900/10"></div>
            <div className="relative p-8 md:p-12 bg-gradient-to-r from-slate-800/80 to-slate-900/80 border border-slate-700/50 rounded-2xl text-center">
              <div className="max-w-3xl mx-auto">
                <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl mb-6">
                  <Mail className="w-12 h-12 text-blue-400" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Need Assistance with Refunds?
                </h3>
                <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                  Our dedicated support team is here to help you with any
                  refund-related queries or concerns
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={`mailto:${policyData.meta.supportEmail}`}
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl hover:shadow-blue-500/20"
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

export default RefundPolicy;
