import React, { useEffect, useRef, memo } from "react";

function Graph() {
  const container = useRef(null);
  const scriptAdded = useRef(false); // Track if script is already added

  useEffect(() => {
    if (scriptAdded.current) return; // Prevent adding script multiple times
    scriptAdded.current = true; // Mark script as added

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "autosize": true,
        "symbol": "NASDAQ:AAPL",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "allow_symbol_change": true,
        "support_host": "https://www.tradingview.com"
      }`;

    container.current.appendChild(script);
  }, []);

  return (
    <>
      <div style={{ height: "100%", width: "55%" }}>
        <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
          <div
            className="tradingview-widget-container__widget"
            style={{ height: "calc(100% - 32px)", width: "100%" }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default memo(Graph);
