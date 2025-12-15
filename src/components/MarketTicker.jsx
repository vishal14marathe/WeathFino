import React, { useState, useEffect } from "react";

const MarketTicker = () => {
  const [stocks, setStocks] = useState([
    { symbol: "AAPL", price: 185.25, change: 1.25, trend: "up" },
    { symbol: "TSLA", price: 245.8, change: -2.3, trend: "down" },
    { symbol: "MSFT", price: 405.6, change: 3.45, trend: "up" },
    { symbol: "NVDA", price: 950.2, change: 12.5, trend: "up" },
    { symbol: "GOOGL", price: 152.75, change: -0.85, trend: "down" },
    { symbol: "AMZN", price: 178.9, change: 2.15, trend: "up" },
    { symbol: "META", price: 485.35, change: -1.25, trend: "down" },
    { symbol: "BTC", price: 62542.5, change: 1245.3, trend: "up" },
    { symbol: "ETH", price: 3420.8, change: 56.25, trend: "up" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStocks((prev) =>
        prev.map((stock) => {
          const randomChange =
            (Math.random() - 0.5) * (stock.symbol.includes("BTC") ? 200 : 3);
          const newPrice = stock.price + randomChange;
          const isPositive = randomChange >= 0;

          return {
            ...stock,
            price: parseFloat(newPrice.toFixed(2)),
            change: parseFloat(randomChange.toFixed(2)),
            trend: isPositive ? "up" : "down",
          };
        })
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-trading-navy border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-trading-green rounded-full animate-pulse"></div>
            <span className="text-white font-bold">LIVE MARKETS</span>
          </div>
          <div className="text-trading-cyan text-sm">
            {new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}{" "}
            EST
          </div>
        </div>

        {/* Ticker */}
        <div className="overflow-hidden py-4">
          <div
            className="flex whitespace-nowrap"
            style={{ animation: "marquee 30s linear infinite" }}
          >
            {[...stocks, ...stocks].map((stock, index) => (
              <div key={index} className="flex items-center space-x-4 mx-8">
                <span className="text-lg font-bold text-white">
                  {stock.symbol}
                </span>
                <span className="text-xl font-mono font-bold text-white">
                  $
                  {typeof stock.price === "number"
                    ? stock.price.toFixed(2)
                    : "0.00"}
                </span>
                <div
                  className={`flex items-center space-x-1 ${
                    stock.trend === "up"
                      ? "text-trading-green"
                      : "text-trading-coral"
                  }`}
                >
                  <span
                    className={`transform ${
                      stock.trend === "up" ? "rotate-0" : "rotate-180"
                    }`}
                  >
                    {stock.trend === "up" ? "↗" : "↘"}
                  </span>
                  <span className="font-bold">
                    {typeof stock.change === "number"
                      ? Math.abs(stock.change).toFixed(2)
                      : "0.00"}
                  </span>
                </div>
                <div className="w-px h-6 bg-gray-600"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add CSS for marquee animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default MarketTicker;
