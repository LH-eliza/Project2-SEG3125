import React from "react";
import "./Resources.css";

const colorPalettes = [
  ["#D4A373", "#ECE4DB", "#DDD5C7", "#CBC5B0", "#A68A6D"],
  ["#0081A7", "#00AFB9", "#FDFCDC", "#FED9B7", "#F07167"],
  ["#EF476F", "#FFD166", "#06D6A0", "#118AB2", "#073B4C"],
  ["#E6F0C4", "#D5E8A8", "#C4E08C", "#B4D870", "#A4D054"],
  ["#0073E6", "#0058B3", "#003F80", "#00264D", "#000C1A"],
  ["#EA3C53", "#B91F42", "#871131", "#540A20", "#21040F"],
  ["#FCF3CF", "#F9E79F", "#F7DC6F", "#F4D03F", "#F1C40F"],
  ["#A3E4D7", "#76D7C4", "#48C9B0", "#1ABC9C", "#16A085"],
  ["#2C3E50", "#34495E", "#5D6D7E", "#85929E", "#AAB7B8"],
  ["#1F618D", "#2980B9", "#5499C7", "#85C1E9", "#AED6F1"],
  ["#F5B041", "#F39C12", "#D68910", "#B9770E", "#9C640C"],
  ["#EB984E", "#DC7633", "#CA6F1E", "#AF601A", "#935116"],
  ["#9B59B6", "#8E44AD", "#7D3C98", "#6C3483", "#5B2C6F"],
  ["#F9C80E", "#F86624", "#EA3546", "#662E9B", "#43BCCD"],
];

const icons = [
  {
    name: "check",
    svg: '<svg viewBox="0 0 24 24"><path d="M9 16.2l-4.2-4.2L2.8 14.2l6.2 6.2 12-12-2.2-2.2-9.8 9.8z"/></svg>',
  },
  {
    name: "heart",
    svg: '<svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>',
  },
  {
    name: "star",
    svg: '<svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>',
  },
  {
    name: "home",
    svg: '<svg viewBox="0 0 24 24"><path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/></svg>',
  },
  {
    name: "bell",
    svg: '<svg viewBox="0 0 24 24"><path d="M12 2C10.34 2 9 3.34 9 5v1.09C7.39 6.65 6 8.22 6 10v5l-1 1v1h14v-1l-1-1v-5c0-1.78-1.39-3.35-3-3.91V5c0-1.66-1.34-3-3-3zM12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2z"/></svg>',
  },
  {
    name: "camera",
    svg: '<svg viewBox="0 0 24 24"><path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm10-9h-3.17l-1.84-2.76A1.998 1.998 0 0015.17 2H8.83a1.998 1.998 0 00-1.82 1.24L5.17 6H2C.9 6 0 6.9 0 8v10c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-2 12H4V8h16v10z"/></svg>',
  },
  {
    name: "search",
    svg: '<svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27a6.471 6.471 0 001.48-5.34C15.43 5.11 13.32 3 10.75 3S6.07 5.11 6.07 7.69 8.18 12.38 10.75 12.38c1.61 0 3.07-.65 4.13-1.71l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-4.75 0C8.45 14 6.5 12.05 6.5 9.75S8.45 5.5 10.75 5.5 15 7.45 15 9.75 13.05 14 10.75 14z"/></svg>',
  },
  {
    name: "map",
    svg: '<svg viewBox="0 0 24 24"><path d="M20 3h-5.24l-2.76 4-2.76-4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5.24l2.76-4 2.76 4H20c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16h-4.88l-3.12-4-3.12 4H4V5h4.88l3.12 4 3.12-4H20v14z"/></svg>',
  },
  {
    name: "phone",
    svg: '<svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.1-.27c1.2.48 2.5.75 3.85.75a1 1 0 011 1v3.85a1 1 0 01-1 1c-10.48 0-19-8.52-19-19a1 1 0 011-1h3.85a1 1 0 011 1c0 1.35.26 2.65.75 3.85.1.27.02.57-.27 1.1l-2.2 2.2z"/></svg>',
  },
  {
    name: "user",
    svg: '<svg viewBox="0 0 24 24"><path d="M12 12c2.66 0 8 1.34 8 4v2H4v-2c0-2.66 5.34-4 8-4zm0-2a4 4 0 100-8 4 4 0 000 8z"/></svg>',
  },
  {
    name: "email",
    svg: '<svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>',
  },
  {
    name: "settings",
    svg: '<svg viewBox="0 0 24 24"><path d="M19.14 12.94a7.96 7.96 0 00-.04-1.88l2.03-1.62a1 1 0 00.22-1.33l-1.91-3.32a1 1 0 00-1.24-.45l-2.4 1a8.12 8.12 0 00-1.72-.99l-.36-2.54A1 1 0 0012 2h-3a1 1 0 00-1 .91l-.36 2.54a8.12 8.12 0 00-1.72.99l-2.4-1a1 1 0 00-1.24.45l-1.91 3.32a1 1 0 00.22 1.33l2.03 1.62a7.96 7.96 0 00-.04 1.88L2.1 14.56a1 1 0 00-.22 1.33l1.91 3.32a1 1 0 001.24.45l2.4-1a8.12 8.12 0 001.72.99l.36 2.54A1 1 0 009 22h3a1 1 0 001-.91l.36-2.54a8.12 8.12 0 001.72-.99l2.4 1a1 1 0 001.24-.45l1.91-3.32a1 1 0 00-.22-1.33l-2.03-1.62zm-7.14 2.02a4 4 0 110-8 4 4 0 010 8z"/></svg>',
  },
  {
    name: "calendar",
    svg: '<svg viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/></svg>',
  },
  {
    name: "shopping-cart",
    svg: '<svg viewBox="0 0 24 24"><path d="M7 4h-2l-1 2H2v2h2l3.6 7.59L5.25 19a1 1 0 00-.25.69V21h2v-1h9v1h2v-1.31a1 1 0 00-.25-.69l-1.35-1.36L18 8H7V4zm0 2v2h9.79L15 12H7.5l-.75-1.41L6.25 8H7zm-1.1 4l1 2H17l-2-2H5.9zM17 21a2 2 0 100-4 2 2 0 000 4zM5 21a2 2 0 100-4 2 2 0 000 4z"/></svg>',
  },
  {
    name: "music",
    svg: '<svg viewBox="0 0 24 24"><path d="M12 3v10.55a3.5 3.5 0 00-2.5-1.05A3.5 3.5 0 006 16v5h2v-5a1.5 1.5 0 113 0v5h2v-9h4V8h-6z"/></svg>',
  },
  {
    name: "bookmark",
    svg: '<svg viewBox="0 0 24 24"><path d="M6 2c-1.1 0-2 .9-2 2v18l8-4 8 4V4c0-1.1-.9-2-2-2H6z"/></svg>',
  },
  {
    name: "clock",
    svg: '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 11H8v-2h3V7h2v6z"/></svg>',
  },
  {
    name: "cloud",
    svg: '<svg viewBox="0 0 24 24"><path d="M19.36 10.04A7.49 7.49 0 0012 4c-3.27 0-6.03 2.13-7.03 5.18a5.504 5.504 0 00-.51 10.22c.34.08.69.12 1.04.12H19c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.34 0-.67.04-1 .1V10.04z"/></svg>',
  },
  {
    name: "sun",
    svg: '<svg viewBox="0 0 24 24"><path d="M6.76 4.84l-1.8-1.79L4.71 2.1l1.79 1.79-1.79 1.79 1.06 1.06 1.79-1.79 1.79 1.79 1.06-1.06-1.79-1.79L9.1 2.1l-1.79 1.79zm10.48 0l1.79-1.79-1.06-1.06-1.79 1.79-1.79-1.79-1.06 1.06 1.79 1.79-1.79 1.79 1.06 1.06 1.79-1.79 1.79 1.79 1.06-1.06-1.79-1.79zM12 6a5.978 5.978 0 00-4.24 1.76C6.76 8.92 6 10.39 6 12s.76 3.08 1.76 4.24A5.978 5.978 0 0012 18a5.978 5.978 0 004.24-1.76C17.24 15.08 18 13.61 18 12s-.76-3.08-1.76-4.24A5.978 5.978 0 0012 6zm0 10a4 4 0 110-8 4 4 0 010 8z"/></svg>',
  },
  {
    name: "trash",
    svg: '<svg viewBox="0 0 24 24"><path d="M3 6h18v2H3V6zm2 0v14a2 2 0 002 2h10a2 2 0 002-2V6h-2v14H7V6H5zm5-4h4v2h-4V2z"/></svg>',
  },
  {
    name: "upload",
    svg: '<svg viewBox="0 0 24 24"><path d="M4 18v2h16v-2H4zm8-14l-5.5 5.5L8 11l4-4 4 4 1.5-1.5L12 4zm-1 8v6h2v-6h-2z"/></svg>',
  },
  {
    name: "download",
    svg: '<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zm-7 4.17L12.83 11H11.17L12 13.17zm0 2.83l-7-7V20h14V9.83l-7 7z"/></svg>',
  },
  {
    name: "folder",
    svg: '<svg viewBox="0 0 24 24"><path d="M10 4H2v16h20V6H12L10 4zm2 14H4V8h16v10H12z"/></svg>',
  },
  {
    name: "edit",
    svg: '<svg viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1.5 1.5 0 000-2.12l-2.34-2.34a1.5 1.5 0 00-2.12 0l-1.83 1.83 3.75 3.75 1.83-1.82z"/></svg>',
  },
  {
    name: "link",
    svg: '<svg viewBox="0 0 24 24"><path d="M3.9 12a4.1 4.1 0 004.1 4.1h2v-2h-2a2.1 2.1 0 010-4.2h2v-2h-2A4.1 4.1 0 003.9 12zm10-4.1h-2v2h2a2.1 2.1 0 010 4.2h-2v2h2a4.1 4.1 0 004.1-4.1A4.1 4.1 0 0013.9 7.9zm-8 4.1h10v-2H5.9v2z"/></svg>',
  },
  {
    name: "settings",
    svg: '<svg viewBox="0 0 24 24"><path d="M19.14 12.94a7.96 7.96 0 00-.04-1.88l2.03-1.62a1 1 0 00.22-1.33l-1.91-3.32a1 1 0 00-1.24-.45l-2.4 1a8.12 8.12 0 00-1.72-.99l-.36-2.54A1 1 0 0012 2h-3a1 1 0 00-1 .91l-.36 2.54a8.12 8.12 0 00-1.72.99l-2.4-1a1 1 0 00-1.24.45l-1.91 3.32a1 1 0 00.22 1.33l2.03 1.62a7.96 7.96 0 00-.04 1.88L2.1 14.56a1 1 0 00-.22 1.33l1.91 3.32a1 1 0 001.24.45l2.4-1a8.12 8.12 0 001.72.99l.36 2.54A1 1 0 009 22h3a1 1 0 001-.91l.36-2.54a8.12 8.12 0 001.72-.99l2.4 1a1 1 0 001.24-.45l1.91-3.32a1 1 0 00-.22-1.33l-2.03-1.62zm-7.14 2.02a4 4 0 110-8 4 4 0 010 8z"/></svg>',
  },
];

const getTextColor = (hexColor) => {
  hexColor = hexColor.replace(/^#/, "");
  const r = parseInt(hexColor.slice(0, 2), 16);
  const g = parseInt(hexColor.slice(2, 4), 16);
  const b = parseInt(hexColor.slice(4, 6), 16);
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
  return luminance > 186 ? "#000000" : "#FFFFFF";
};

function Resources() {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert(`Copied ${text} to clipboard!`);
    });
  };

  return (
    <div className="resources">
      <div className="guide-header">
        <p>Resources</p>
      </div>
      <div className="resources-content">
        <h1>Color Palettes</h1>
        <h2>Grab some inspiration from these color schemes</h2>
        <p>Click on a color to copy it to the clipboard.</p>
        <div className="palette-grid">
          {colorPalettes.map((palette, index) => (
            <div key={index} className="palette">
              {palette.map((color, colorIndex) => (
                <div
                  key={colorIndex}
                  className="color-box"
                  style={{
                    backgroundColor: color,
                    color: getTextColor(color),
                  }}
                  data-color={color}
                  onClick={() => copyToClipboard(color)}
                >
                  <span className="hex-code">{color}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        <h1>Icons</h1>
        <h2>Have access to SVGs of the most used icons</h2>
        <p>Click on an icon to copy its SVG code to the clipboard.</p>
        <div className="icon-grid">
          {icons.map((icon, index) => (
            <div key={index} className="icon-container">
              <div
                className="icon-box"
                onClick={() => copyToClipboard(icon.svg)}
                dangerouslySetInnerHTML={{ __html: icon.svg }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Resources;
