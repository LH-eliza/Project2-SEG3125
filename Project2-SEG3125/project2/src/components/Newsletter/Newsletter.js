import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const SvgComponent = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [warning, setWarning] = useState("");

  const handleButtonClick = () => {
    console.log(`Button clicked with email: ${email}`);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setWarning(t("svg_component.warning"));
    } else {
      setWarning("");
      handleButtonClick();
    }
  };

  const handleSubscription = () => {
    if (warning === "" && email !== "") {
      alert(t("svg_component.success_message"));
    } else {
      alert(t("svg_component.error_message"));
    }
  };

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <svg
        viewBox="0 0 1438 988"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "100%" }}
      >
        <ellipse
          cx="525.683"
          cy="461.482"
          rx="270.086"
          ry="262.59"
          transform="rotate(27.4271 525.683 461.482)"
          fill="#FDF471"
        />
        <ellipse
          cx="320.583"
          cy="679.475"
          rx="177.907"
          ry="172.969"
          transform="rotate(27.4271 320.583 679.475)"
          fill="#66BFE8"
        />
        <ellipse
          cx="939.373"
          cy="494"
          rx="373.153"
          ry="362.911"
          transform="rotate(27.4271 939.373 494)"
          fill="#DB6E6E"
        />
        <foreignObject x="690" y="370" width="500" height="200">
          <div style={{ textAlign: "center", color: "white" }}>
            <h1 style={{ fontSize: "56px", margin: "0" }}>
              {t("svg_component.heading")}
            </h1>
            <p style={{ fontSize: "24px", margin: "10px 0" }}>
              {t("svg_component.subheading")}
            </p>
          </div>
        </foreignObject>
        <rect
          x="700"
          y="574.581"
          width="489"
          height="84"
          rx="29"
          fill="#E9E9E9"
          fillOpacity="0.51"
          style={{ cursor: "pointer" }}
        />
        <foreignObject x="700" y="574.581" width="489" height="84">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <input
              type="text"
              value={email}
              onChange={handleEmailChange}
              onBlur={validateEmail}
              placeholder={t("svg_component.placeholder")}
              style={{
                width: "100%",
                height: "80%",
                border: "none",
                outline: "none",
                backgroundColor: "transparent",
                padding: "30px",
                fontSize: "16px",
                boxSizing: "border-box",
                borderRadius: "29px",
                color: "black",
              }}
            />
          </div>
        </foreignObject>
        {warning && (
          <text x="700" y="680" fill="white" fontSize="16">
            {warning}
          </text>
        )}
        <g onClick={handleSubscription} style={{ cursor: "pointer" }}>
          <rect
            x="830"
            y="700"
            width="213"
            height="40"
            rx="20"
            fill="white"
            style={{ transition: "all 0.3s ease" }}
            onMouseEnter={(e) =>
              e.currentTarget.setAttribute("fill", "#f0f0f0")
            }
            onMouseLeave={(e) => e.currentTarget.setAttribute("fill", "white")}
          />
          <text
            x="935"
            y="722"
            fill="gray"
            fontSize="18"
            textAnchor="middle"
            alignmentBaseline="middle"
            style={{ pointerEvents: "none" }}
          >
            {t("svg_component.subscribe_button")}
          </text>
        </g>
        <path
          d="M236.129 799.65C210.612 848.819 148.799 867.577 97.9477 841.188C47.0966 814.799 26.8511 753.456 52.3676 704.287C77.8842 655.117 139.698 636.359 190.549 662.749C241.4 689.138 261.646 750.48 236.129 799.65Z"
          stroke="white"
          strokeWidth="9"
        />
        <path
          d="M242.557 396.789C234.289 412.721 214.239 418.826 197.72 410.253C181.2 401.68 174.65 381.771 182.918 365.839C191.186 349.907 211.235 343.802 227.755 352.375C244.275 360.948 250.825 380.857 242.557 396.789Z"
          fill="white"
          stroke="white"
          strokeWidth="4.30222"
        />
        <path
          d="M1300.11 141.334C1295.2 150.807 1283.28 154.437 1273.45 149.339C1263.63 144.242 1259.74 132.404 1264.65 122.931C1269.57 113.458 1281.49 109.828 1291.31 114.926C1301.14 120.023 1305.03 131.86 1300.11 141.334Z"
          fill="white"
          stroke="white"
          strokeWidth="2.55806"
        />
        <path
          d="M556.852 802.334C553.44 808.61 545.415 810.886 538.908 807.347C532.4 803.809 529.947 795.837 533.359 789.561C536.772 783.285 544.797 781.01 551.304 784.548C557.812 788.086 560.265 796.058 556.852 802.334Z"
          fill="white"
          stroke="white"
          strokeWidth="1.71222"
        />
      </svg>
    </div>
  );
};

export default SvgComponent;
