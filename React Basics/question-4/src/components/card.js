

import React from 'react';

function Card({ title, imgSrc, category, timeToRead }) {
    return (
        
        <div className="max-w-xs rounded shadow-lg">
          <img className="w-full h-[300px] p-2" src={imgSrc} alt={title} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-900 ">{category}</p>
            <p className="text-gray-500 ">{timeToRead} min read</p>
          </div>
        </div>
      );
      
}

export default Card;
