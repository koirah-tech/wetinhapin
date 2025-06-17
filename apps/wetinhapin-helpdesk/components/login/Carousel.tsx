'use client'

import Image from "next/image";
import { useState, useEffect } from "react";


import { DEFAULT_ITEMS } from "@/lib/dummyData/carouselData";



export default function Carousel(){
  const [currentFeature, setCurrentFeature] = useState(0);

   // Auto-loop every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % DEFAULT_ITEMS.length);
    }, 5000);

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="flex items-center justify-center p-8 relative min-h-[98dvh] rounded-3xl overflow-hidden flex-1 bg-gradient-to-br from-green-600 via-yellow-500 to-yellow-400">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-15">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20px 20px, white 3px, transparent 2px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 text-center space-y-8 max-w-lg">

          {/* Feature Content */}
          <div className="max-w-md mx-auto">
            <Image
              src={DEFAULT_ITEMS[currentFeature]!.image}
              alt={DEFAULT_ITEMS[currentFeature]!.title}
              width={600}
              height={100}
              className="rounded-2xl shadow-lg object-cover"
              />
          </div>

          {/* Feature Description */}
          <div>
            <p className="paragraph-regular leading-relaxed">
              {DEFAULT_ITEMS[currentFeature]!.description}
            </p>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center space-x-2">
            {DEFAULT_ITEMS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentFeature(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentFeature ? "bg-green-800 w-8" : "bg-gray-400 hover:bg-gray-150"
                }`}
              />
            ))}
          </div>
      </div>
    </div>
    
  );
}
