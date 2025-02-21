import React, { useState } from "react";
import Navbar from "../components/Navbar";
import GradientBackground from "../components/GradientBG";
import OpenSea from "../components/Communities/OpenSea";
import Rarible from "../components/Communities/Rarible";
import SuperRare from "../components/Communities/SuperRare";
import Zora from "../components/Communities/Zora";
import Mintable from "../components/Communities/Mintable";
import NiftyGateway from "../components/Communities/NiftyGateway";

const Communities = () => {
  const [activeTab, setActiveTab] = useState("ForYou");

  const renderComponent = () => {
    switch (activeTab) {
      case "CryptoPunks":
        return <OpenSea />;
      case "Bored Ape Yacht Club (BAYC)":
        return <Rarible />;
      case "Pepe the Frog":
        return <SuperRare />;
      case "Success Kid":
        return <Zora />;
      case "Vitalik the Bear":
        return <Mintable />;
      case "Grumpy Cat":
        return <NiftyGateway />;
      default:
        return <Zora />;
    }
  };

  return (
    <div className="bg-black min-h-screen bricolage-font">
      <GradientBackground>
        <Navbar />
        <div className="flex flex-col items-center mx-6 md:mx-14 pt-24">
          <div className="flex overflow-x-auto w-full bg-gray-800 shadow-lg rounded text-white p-4">
            <div className="flex space-x-4">
              {[
                "CryptoPunks",
                "Bored Ape Yacht Club (BAYC)",
                "Success Kid",
                "Pepe the Frog",
                "Vitalik the Bear",
                "Grumpy Cat",
              ].map((tab) => (
                <div
                  key={tab}
                  className={`cursor-pointer p-2 whitespace-nowrap ${
                    activeTab === tab ? "border-b-2 border-orange-500" : ""
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.split(/(?=[A-Z])/).join(" ")}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full p-4">
            {renderComponent()}
          </div>
        </div>
      </GradientBackground>
    </div>
  );
};

export default Communities;
