import React from "react";
import Card from "./Card";
import IcpCoin from "../assets/icon/icp-token.png"

function Jobs() {
  return (
    <div className="w-full h-full bg-slate-600 flex flex-col">
        <div>
            <h1 className="text-white text-7xl font-bold font-sans">Seek and Find Your <br /> Freelancing Opportunities Here!</h1>
        </div>
        <div className="flex flex-row gap-4">
            <button className="border-2 border-white text-white font-sans p-1 rounded">All Project</button>
            <button className="border-2 border-white text-white font-sans p-1 rounded">Website Development</button>
            <button className="border-2 border-white text-white font-sans p-1 rounded">Graphic Design</button>
            <button className="border-2 border-white text-white font-sans p-1 rounded">Video Editing</button>
            <button className="border-2 border-white text-white font-sans p-1 rounded">Other</button>
        </div>
        <div>
            <div className="w-56 h-72 bg-red-500">
                <div className="flex items-center gap-2 border-b border-b-white">
                    <img src={Card[0].profile} alt="" className="w-11 m-2"/>
                    <p>{Card[0].name}</p>
                </div>
                <h3>{Card[0].project}</h3>
                <p>{Card[0].category}</p>
                <div>
                    <img src={IcpCoin} alt="" className="w-12"/>
                    <p>{Card[0].price}</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Jobs;
