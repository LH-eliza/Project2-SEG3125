import React from "react";

const SvgComponent = () => {
  const handleButtonClick = (buttonId) => {
    console.log(`Button ${buttonId} clicked`);
    // Add your button click handling logic here
  };

  return (
    <svg
      width="1438"
      height="988"
      viewBox="0 0 1438 988"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
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
      <rect
        x="700"
        y="574.581"
        width="489"
        height="84"
        rx="29"
        fill="#E9E9E9"
        fillOpacity="0.51"
        onClick={() => handleButtonClick(1)}
        style={{ cursor: "pointer" }}
      />
      <rect
        x="700"
        y="600"
        width="80"
        height="40"
        fill="transparent"
        onClick={() => handleButtonClick(2)}
        style={{ cursor: "pointer" }}
      />
      <rect
        x="800"
        y="600"
        width="80"
        height="40"
        fill="transparent"
        onClick={() => handleButtonClick(3)}
        style={{ cursor: "pointer" }}
      />
      {/* Add more rectangles or other elements as needed */}
    </svg>
  );
};

export default SvgComponent;
