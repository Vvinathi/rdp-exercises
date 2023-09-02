import React from 'react';

const Shapes = () => {
  return (
    <div className="flex justify-center space-x-[150px] p-2">
      <div className="w-[350px] h-[250px] bg-blue-500 p-2 rounded-lg

">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="40" fill="pink" />
        </svg>
      </div>
      <div className="w-[350px] h-[250px] bg-red-500 p-2 rounded-lg

">
        <svg viewBox="0 0 100 100" className="w-full h-full transform rotate-45">
          <rect x="15" y="15" width="70" height="70" fill="yellow" />
        </svg>
      </div>
      <div className="w-[350px] h-[250px] bg-green-500 p-2 rounded-lg

">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon points="50,2 90,30 90,70 50,98 10,70 10,30" fill="violet" />
        </svg>
      </div>
      <div className="w-[350px] h-[250px] bg-yellow-500 p-2 rounded-lg

">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon points="2,98 50,2 98,98" fill="skyblue" />
        </svg>
      </div>
    </div>
  );
};

export default Shapes;
