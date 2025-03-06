import React, { useState } from "react";
import "./../App.css";

interface AiTabsProps {}

const AiTabs: React.FC<AiTabsProps> = () => {
  const [activeTab, setActiveTab] = useState<string>("London");

  const tabs = [
    { name: "London", content: "London is the capital city of England." },
    { name: "Paris", content: "Paris is the capital of France." },
    { name: "Tokyo", content: "Tokyo is the capital of Japan." },
  ];

  return (
    <div className="ai-tabs">
      <div className="tab">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`tablinks ${activeTab === tab.name ? "active" : ""}`}
            onMouseOver={() => setActiveTab(tab.name)}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {tabs.map((tab) => (
        <div
          key={tab.name}
          className="tabcontent"
          style={{ display: activeTab === tab.name ? "block" : "none" }}
        >
          <h3>{tab.name}</h3>
          <p>{tab.content}</p>
        </div>
      ))}

      <div className="clearfix"></div>
    </div>
  );
};

export default AiTabs;
