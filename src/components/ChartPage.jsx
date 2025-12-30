import TradingViewChart from "./TradingViewChart";

const ChartPage = () => {
  return (
    <div className="min-h-screen bg-[#05070d] flex items-center justify-center p-8">
      {/* OUTER GLOW FRAME */}
      <div
        className="w-full max-w-[1600px] rounded-[22px] p-[3px]
        bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500
        shadow-[0_0_60px_rgba(56,189,248,0.35)]"
      >
        {/* INNER DARK CONTAINER */}
        <div className="bg-[#05070d] rounded-[20px] p-6">
          {/* HEADER */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-white">
              Wealth<span className="text-green-400">Fino</span>
            </h1>

            <div className="flex gap-3">
              <img
                src="/google-play.png"
                alt="Google Play"
                className="h-10 cursor-pointer"
              />
              <img
                src="/app-store.png"
                alt="App Store"
                className="h-10 cursor-pointer"
              />
            </div>
          </div>

          {/* CHART HOLDER */}
          <div
            className="rounded-xl overflow-hidden border border-slate-700
            h-[72vh] bg-black"
          >
            <TradingViewChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartPage;
