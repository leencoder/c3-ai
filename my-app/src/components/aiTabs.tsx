import React, { useState } from "react";
import "./../App.css";

interface AiTabsProps {}

const AiTabs: React.FC<AiTabsProps> = () => {
  const [activeTab, setActiveTab] = useState<string>("AI Applications");

  const tabs = [
    { name: "AI Applications", content: "Ready-to-use enterprise AI applications for high-value use cases." , img: "/images/ai-platform.png"},
    { name: "Development Tools", content: "An integrated family of deep code, low code, and no code development tools available in a collaborative multi-functional environment." , img: "/images/3d-code-icon-and-gear-cogwheel-png.webp"},
    { name: "AI Platform", content: "The C3 AI Platform provides all necessary software services in one integrated suite to rapidly develop, provision, and operate Enterprise AI applications." , img: "/images/ai-plat.webp"},
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
          <div className="tab-row">
            <div className="img-wrapper">
              <img src={tab.img} alt="" />
            </div>
            <div>
            <h3>{tab.name}</h3>
            <p>{tab.content}</p>
            </div>
          </div>
          
        </div>
      ))}

      <div className="clearfix"></div>
    </div>
  );
};

export default AiTabs;
