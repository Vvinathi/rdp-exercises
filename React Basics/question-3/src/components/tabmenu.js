import React, { useState } from "react";

function Tabmenu() {
  const [activeTab, setActiveTab] = useState("recent");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="container flex flex-col border border-black w-[700px] h-[300px] bg-blue-400 cursor-pointer p-4 gap-4">
        <div className="menu flex flex-row border border-black rounded-lg h-[70px] w-[600px] p-1 items-center gap-10 bg-blue-300 font-medium text-2xl">
          <div
            className={`Recent w-[150px] h-[50px] hover:rounded-lg hover:bg-blue-200 text-white cursor-pointer ${
              activeTab === "recent" ? "bg-white text-blue-800 border border-4 border-blue-400 rounded-lg border-double" : ""
            }`}
            onClick={() => handleTabClick("recent")}
          >
            <h1 className="font-sans p-2 text-center">Recent</h1>
          </div>
          <div
            className={`Popular w-[150px] h-[50px] hover:rounded-lg hover:bg-blue-200 text-white cursor-pointer ${
              activeTab === "popular" ? "bg-white text-blue-800 border border-4 border-blue-400 rounded-lg border-double" : ""
            }`}
            onClick={() => handleTabClick("popular")}
          >
            <h1 className="font-sans p-2 text-center">Popular</h1>
          </div>
          <div
            className={`Trending w-[150px] h-[50px] hover:rounded-lg hover:bg-blue-200 text-white cursor-pointer ${
              activeTab === "trending" ? "bg-white text-blue-800 border border-4 border-blue-400 rounded-lg border-double" : ""
            }`}
            onClick={() => handleTabClick("trending")}
          >
            <h1 className="font-sans p-2 text-center">Trending</h1>
          </div>
        </div>
        <div className="content border border-black w-[600px] h-[200px] rounded-lg p-5 text-black bg-white">
          <div className={`content__recent flex flex-col items-left gap-5 font-sans ${activeTab !== "recent" && "hidden"}`}>
            <div className="one">
              <h1 className="text-[20px]">Does drinking coffee make you smarter?</h1>
              <p className="text-slate-500">5h ago . 5 comments . 2 shares</p>
            </div>
            <div className="two">
              <h1 className="text-[20px]">So you've bought coffee..now what?</h1>
              <p className="text-slate-500">2h ago . 3 comments . 2 shares</p>
            </div>
          </div>
          <div className={`content__popular flex flex-col items-left gap-5 font-sans ${activeTab !== "popular" && "hidden"}`}>
            <div className="one">
              <h1 className="text-[20px]">Is tech making coffee better or worse?</h1>
              <p className="text-slate-500">Jan 7 . 29 comments . 16 shares</p>
            </div>
            <div className="two">
              <h1 className="text-[20px]">The most innovative things happening in coffee</h1>
              <p className="text-slate-500">Mar 19 . 24 comments . 12 shares</p>
            </div>
          </div>
          <div className={`content__trending flex flex-col items-left gap-5 font-sans ${activeTab !== "trending" && "hidden"}`}>
            <div className="one">
              <h1 className="text-[20px]">Ask Me Anything: 10 answers to your questions about coffee</h1>
              <p className="text-slate-500">2d ago . 9 comments . 5 shares</p>
            </div>
            <div className="two">
              <h1 className="text-[20px]">The worst advice we've ever heard about coffee</h1>
              <p className="text-slate-500">4d ago . 1 comment . 2 shares</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tabmenu;
