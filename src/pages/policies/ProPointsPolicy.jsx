import React from "react";
import {
  Award,
  Clock,
  Shield,
  XCircle,
  RefreshCw,
  TrendingUp,
  FileText,
  Coins,
  Key,
  AlertTriangle,
  Calendar,
  Mail,
  CreditCard,
} from "lucide-react";

const ProPointsPolicy = () => {
  const policyData = {
    title: "Pro Points Policy",
    meta: {
      brand: "WealthFino",
      issuedBy: "Krishna Kumar Pathak",
    },
    content: [
      "This Pro Points Policy defines the scope, nature, redemption rules, expiry, and compliance framework governing the Pro Points issued on the WealthFino platform.",
      "Pro Points are redeemable only for eligible in-app premium offerings, premium service access, and approved learning or educational content available within the WealthFino mobile application. No other redemption or usage is permitted.",
      "Pro Points are strictly non-monetary in nature and have no cash value. They cannot be encashed, withdrawn, transferred, traded, gifted, pledged, or converted into currency, bank balance, UPI credit, wallet balance, vouchers, gift cards, or any other cash equivalent.",
      "All unredeemed Pro Points automatically expire at 23:59 IST on the 30th of each calendar month, after which the Pro Points balance resets to zero. Expired Pro Points cannot be restored under any circumstances.",
      "Pro Points are issued solely for user engagement and learning purposes. They are not linked to trading activity, investment performance, profits, losses, or outcomes, and do not influence or impact any research recommendations provided on the platform.",
      "The Pro Points program operates independently of all research, analysis, and recommendation services and does not constitute an inducement to trade or a promise or assurance of returns.",
      "WealthFino reserves the right to modify, suspend, withdraw, or discontinue the Pro Points program, including altering expiry rules or resetting balances (including to zero), with or without prior notice, without any liability for unredeemed or forfeited Pro Points.",
      "Use or accumulation of Pro Points constitutes full acceptance of this Pro Points Policy and the applicable Terms of Use governing the WealthFino platform.",
      "Pro Points are non-monetary engagement rewards with no cash value and are redeemable only for eligible in-app premium or learning services on the WealthFino platform. They cannot be withdrawn, transferred, or converted in any form.",
      "Krishna Kumar Pathak, operating under the brand WealthFino, shall not be liable for any loss, forfeiture, or expiry of Pro Points, including monthly expiries or program modifications, suspension, or termination.",
      "Unredeemed Pro Points expire at 23:59 IST on the 30th of each calendar month unless otherwise modified under this policy.",
    ],
  };

  const keyFeatures = [
    {
      icon: <Coins className="w-5 h-5" />,
      title: "In-App Redemption",
      description:
        "Redeemable only for eligible premium offerings and learning content within WealthFino app",
      color: "from-green-500/20 to-emerald-600/10",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Monthly Expiry",
      description:
        "All points expire at 23:59 IST on the 30th of each calendar month",
      color: "from-red-500/20 to-orange-600/10",
    },
    {
      icon: <Key className="w-5 h-5" />,
      title: "No Monetary Value",
      description:
        "Cannot be encashed, withdrawn, or converted to cash equivalents",
      color: "from-blue-500/20 to-blue-600/10",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Independent Program",
      description:
        "Not linked to trading performance or research recommendations",
      color: "from-purple-500/20 to-purple-600/10",
    },
  ];

  const restrictions = [
    {
      icon: <XCircle className="w-5 h-5" />,
      title: "No Cash Conversion",
      items: [
        "Cannot be converted to currency or bank balance",
        "No UPI credit or wallet balance",
        "No vouchers or gift cards",
      ],
    },
    {
      icon: <XCircle className="w-5 h-5" />,
      title: "No Transfer or Trade",
      items: [
        "Cannot be transferred to other users",
        "Not tradable or giftable",
        "Cannot be pledged or sold",
      ],
    },
    {
      icon: <XCircle className="w-5 h-5" />,
      title: "No Restoration",
      items: [
        "Expired points cannot be restored",
        "No exceptions for expired points",
        "Balance resets to zero after expiry",
      ],
    },
  ];

  const importantPoints = [
    "Points issued for engagement and learning purposes only",
    "Not linked to trading profits or losses",
    "Does not influence research recommendations",
    "Program may be modified or discontinued without notice",
    "Use constitutes acceptance of policy terms",
  ];

  const expiryDetails = [
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "Expiry Date",
      value: "30th of each month",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Expiry Time",
      value: "23:59 IST",
    },
    {
      icon: <RefreshCw className="w-5 h-5" />,
      title: "Reset Policy",
      value: "Balance resets to zero",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-950 text-gray-200 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header with Gradient */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-amber-600/20 to-yellow-600/20 rounded-2xl border border-amber-500/30">
              <Award className="w-10 h-10 text-amber-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 bg-clip-text text-transparent">
              {policyData.title}
            </h1>
          </div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Rules and guidelines governing Pro Points on WealthFino platform
          </p>
        </div>

        {/* Meta Information Card */}
        <div className="mb-12 p-6 bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-500/10 rounded-lg">
                  <Award className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Issuing Authority
                </h3>
              </div>
              <div className="space-y-3 pl-10">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <p className="text-gray-300">
                    <span className="font-medium text-gray-400">Brand:</span>{" "}
                    <span className="text-white">{policyData.meta.brand}</span>
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <p className="text-gray-300">
                    <span className="font-medium text-gray-400">
                      Issued by:
                    </span>{" "}
                    <span className="text-white">
                      {policyData.meta.issuedBy}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-500/10 rounded-lg">
                  <FileText className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Policy Scope
                </h3>
              </div>
              <div className="space-y-3 pl-10">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <p className="text-gray-300">
                    <span className="font-medium text-gray-400">Type:</span>{" "}
                    <span className="text-white">
                      Non-monetary reward system
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <p className="text-gray-300">
                    <span className="font-medium text-gray-400">Purpose:</span>{" "}
                    <span className="text-white">
                      User engagement & learning
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="group relative p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700/50 hover:border-amber-500/30 transition-all duration-300"
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
            </div>
          </Section>

          {/* Redemption Rules */}
          <Section
            title="Redemption Rules"
            icon={<Award className="w-6 h-6" />}
            gradient="from-green-500/20 to-emerald-600/10"
          >
            <div className="space-y-8">
              <div className="p-5 bg-gradient-to-r from-green-900/10 to-transparent rounded-xl border-l-4 border-green-500">
                <p className="text-gray-300">{policyData.content[1]}</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {expiryDetails.map((detail, index) => (
                  <div
                    key={index}
                    className="p-5 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700/50 hover:border-green-500/30 transition-all duration-300"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="p-3 bg-green-500/20 rounded-xl mb-4 text-green-400">
                        {detail.icon}
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {detail.title}
                      </h4>
                      <p className="text-gray-300 font-medium">
                        {detail.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-5 bg-gradient-to-r from-red-900/10 to-transparent rounded-xl">
                <p className="text-gray-300">{policyData.content[3]}</p>
              </div>
            </div>
          </Section>

          {/* Restrictions */}
          <Section
            title="Usage Restrictions"
            icon={<XCircle className="w-6 h-6" />}
            gradient="from-red-500/20 to-orange-600/10"
          >
            <div className="space-y-8">
              <div className="p-5 bg-gradient-to-r from-red-900/10 to-transparent rounded-xl">
                <p className="text-gray-300">{policyData.content[2]}</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {restrictions.map((restriction, index) => (
                  <div
                    key={index}
                    className="p-5 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700/50 hover:border-red-500/30 transition-all duration-300"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="p-3 bg-red-500/20 rounded-xl mb-4 text-red-400">
                        {restriction.icon}
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-4">
                        {restriction.title}
                      </h4>
                      <div className="space-y-2 w-full">
                        {restriction.items.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-sm"
                          >
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                            <span className="text-gray-400 text-left">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-5 bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-xl">
                <p className="text-gray-300">{policyData.content[9]}</p>
              </div>
            </div>
          </Section>

          {/* Purpose & Independence */}
          <Section
            title="Purpose & Independence"
            icon={<Shield className="w-6 h-6" />}
            gradient="from-purple-500/20 to-purple-600/10"
          >
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-5 bg-gradient-to-br from-purple-900/10 to-slate-800/50 rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-500/20 rounded-xl text-purple-400">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        Engagement Focus
                      </h4>
                      <p className="text-gray-300">{policyData.content[4]}</p>
                    </div>
                  </div>
                </div>
                <div className="p-5 bg-gradient-to-br from-indigo-900/10 to-slate-800/50 rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-indigo-500/20 rounded-xl text-indigo-400">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        Program Independence
                      </h4>
                      <p className="text-gray-300">{policyData.content[5]}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* Important Points */}
          <Section
            title="Important Points"
            icon={<AlertTriangle className="w-6 h-6" />}
            gradient="from-amber-500/20 to-yellow-600/10"
          >
            <div className="space-y-6">
              <div className="p-5 bg-gradient-to-r from-amber-900/10 to-transparent rounded-xl">
                <p className="text-gray-300">{policyData.content[7]}</p>
              </div>

              <div className="grid gap-4">
                {importantPoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-slate-800/30 to-slate-900/30 rounded-xl hover:bg-slate-800/50 transition-colors"
                  >
                    <div className="p-2 bg-amber-500/20 rounded-lg">
                      <div className="w-5 h-5 flex items-center justify-center text-amber-400 font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <p className="text-gray-300">{point}</p>
                  </div>
                ))}
              </div>

              <div className="p-5 bg-gradient-to-r from-orange-900/10 to-transparent rounded-xl border-l-4 border-orange-500">
                <p className="text-gray-300 font-medium">
                  {policyData.content[6]}
                </p>
              </div>
            </div>
          </Section>

          {/* Expiry Warning */}
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-orange-900/10 to-red-900/10"></div>
            <div className="relative p-8 border border-red-700/30 rounded-2xl">
              <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
                <div className="p-4 bg-gradient-to-br from-red-600 to-orange-600 rounded-xl">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    Expiry Warning
                  </h3>
                  <p className="text-red-100/80 text-lg">
                    Important points about Pro Points expiry
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-5 bg-gradient-to-r from-red-900/20 to-transparent rounded-xl">
                  <p className="text-gray-300 leading-relaxed">
                    {policyData.content[10]}
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-gradient-to-br from-red-900/20 to-slate-900/50 rounded-xl border border-red-900/30">
                    <h4 className="text-lg font-semibold text-white mb-2 text-center">
                      Automatic Expiry
                    </h4>
                    <p className="text-gray-300 text-center text-sm">
                      Points expire automatically at month-end
                    </p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-orange-900/20 to-slate-900/50 rounded-xl border border-orange-900/30">
                    <h4 className="text-lg font-semibold text-white mb-2 text-center">
                      No Restoration
                    </h4>
                    <p className="text-gray-300 text-center text-sm">
                      Expired points cannot be restored
                    </p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-red-900/20 to-slate-900/50 rounded-xl border border-red-900/30">
                    <h4 className="text-lg font-semibold text-white mb-2 text-center">
                      Zero Balance
                    </h4>
                    <p className="text-gray-300 text-center text-sm">
                      Balance resets to zero after expiry
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-slate-900/50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <p className="text-gray-300 text-sm">
                      <span className="font-bold text-white">Reminder:</span>{" "}
                      Redeem your Pro Points before 23:59 IST on the 30th of
                      each month.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Final Disclaimer */}
          <div className="p-6 bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-700/50">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl">
                <Shield className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">
                  Final Clarification
                </h4>
                <p className="text-gray-300">{policyData.content[8]}</p>
                <div className="mt-4 p-4 bg-gradient-to-r from-blue-900/20 to-transparent rounded-xl">
                  <p className="text-gray-400 text-sm">
                    By accumulating or using Pro Points, you acknowledge and
                    agree to all terms outlined in this policy.
                  </p>
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
              <p className="mt-1">WealthFino • Engagement Rewards Program</p>
            </div>
            <div className="text-gray-600 text-xs text-center md:text-right">
              <p>
                © {new Date().getFullYear()} {policyData.meta.brand}. All rights
                reserved.
              </p>
              <p className="mt-1">
                Pro Points are non-monetary engagement rewards only
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

export default ProPointsPolicy;
