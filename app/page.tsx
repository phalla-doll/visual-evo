'use client';

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Page() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      const { scrollWidth, clientWidth } = scrollRef.current;
      scrollRef.current.scrollLeft = (scrollWidth - clientWidth) / 2;
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center w-full bg-[#101010]">
      {/* Navigation */}
      <nav className="w-full max-w-[1400px] mx-auto px-8 py-8 flex justify-between items-center text-[13px] tracking-[0.15em] text-gray-400 font-light">
        <div className="hover:text-white transition-colors cursor-pointer">VISUALEVO &reg;</div>
        <div className="flex gap-10">
          <a href="#" className="hover:text-white transition-colors">FEATURES</a>
          <a href="#" className="hover:text-white transition-colors">CONTACT</a>
        </div>
      </nav>

      {/* Hero Content */}
      <main className="flex-1 flex flex-col items-center w-full mt-16 md:mt-24">
        <div className="w-full max-w-[1400px] mx-auto px-8 flex flex-col items-center">
          {/* Headlines */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h1 className="text-5xl md:text-6xl lg:text-[72px] leading-[1.15] tracking-tight mb-8 text-[#f5f5f5] font-normal">
              Transforming prompts into<br />
              exquisite <span className="underline decoration-2 underline-offset-[12px]">high-quality portraits</span>
            </h1>
            <p className="text-[17px] md:text-[19px] text-[#a0a0a0] max-w-2xl mx-auto leading-[1.6] font-light">
              Pioneering AI-powered solution designed to expedite and<br className="hidden md:block" />
              economize your profile production process
            </p>
          </div>

          {/* Prompt Input */}
          <div className="w-full max-w-[640px] mb-6">
            <div className="relative flex items-center w-full bg-[#222224] rounded-full p-1.5 border border-white/5 shadow-lg">
              <input
                type="text"
                placeholder="Enter prompt"
                className="flex-1 bg-transparent text-[#f5f5f5] px-6 py-3 outline-none placeholder:text-[#808080] font-light text-[15px]"
              />
              <button className="bg-[#f5f5f5] text-[#101010] px-7 py-2.5 rounded-full hover:bg-white transition-colors text-[15px] font-medium">
                Generate
              </button>
            </div>
          </div>

          {/* Parameters */}
          <div className="flex flex-wrap justify-center gap-3 mb-24 text-[13px] text-[#a0a0a0] font-light">
            <button className="flex items-center gap-2 bg-[#222224] px-4 py-2 rounded-full hover:bg-[#2a2a2c] transition-colors border border-white/5">
              <span>--ar 16:9</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-60" />
            </button>
            <button className="flex items-center gap-2 bg-[#222224] px-4 py-2 rounded-full hover:bg-[#2a2a2c] transition-colors border border-white/5">
              <span>--v 6.0 [ALPHA]</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-60" />
            </button>
            <button className="flex items-center gap-2 bg-[#222224] px-4 py-2 rounded-full hover:bg-[#2a2a2c] transition-colors border border-white/5">
              <span>--stylize 250</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-60" />
            </button>
          </div>
        </div>

        {/* Image Grid */}
        <div className="w-full relative pb-24 overflow-hidden">
          {/* Fade masks for edges */}
          <div className="absolute left-0 top-0 bottom-0 w-[12vw] md:w-[8vw] bg-gradient-to-r from-[#101010] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-[12vw] md:w-[8vw] bg-gradient-to-l from-[#101010] to-transparent z-10 pointer-events-none"></div>
          
          <div 
            ref={scrollRef}
            className="flex flex-col gap-[4vw] sm:gap-[3vw] md:gap-[2vw] overflow-x-auto hide-scrollbar px-[4vw] md:px-[8vw]"
          >
            {/* Row 1 */}
            <div className="flex gap-[4vw] sm:gap-[3vw] md:gap-[2vw] w-max">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={`r1-${i}`} className="aspect-video w-[75vw] sm:w-[45vw] md:w-[35vw] lg:w-[28vw] xl:w-[22vw] shrink-0 relative rounded-[20px] md:rounded-[28px] overflow-hidden bg-[#1a1a1c]">
                  <Image
                    src={`https://picsum.photos/seed/portrait1${i}/800/450`}
                    alt="AI generated portrait"
                    fill
                    className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
            
            {/* Row 2 - Offset */}
            <div className="flex gap-[4vw] sm:gap-[3vw] md:gap-[2vw] w-max ml-[15vw] sm:ml-[10vw] md:ml-[8vw] lg:ml-[6vw]">
              {[9, 10, 11, 12, 13, 14, 15, 16].map((i) => (
                <div key={`r2-${i}`} className="aspect-video w-[75vw] sm:w-[45vw] md:w-[35vw] lg:w-[28vw] xl:w-[22vw] shrink-0 relative rounded-[20px] md:rounded-[28px] overflow-hidden bg-[#1a1a1c]">
                  <Image
                    src={`https://picsum.photos/seed/portrait1${i}/800/450`}
                    alt="AI generated portrait"
                    fill
                    className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>

            {/* Row 3 - Offset */}
            <div className="flex gap-[4vw] sm:gap-[3vw] md:gap-[2vw] w-max ml-[7.5vw] sm:ml-[5vw] md:ml-[4vw] lg:ml-[3vw]">
              {[17, 18, 19, 20, 21, 22, 23, 24].map((i) => (
                <div key={`r3-${i}`} className="aspect-video w-[75vw] sm:w-[45vw] md:w-[35vw] lg:w-[28vw] xl:w-[22vw] shrink-0 relative rounded-[20px] md:rounded-[28px] overflow-hidden bg-[#1a1a1c]">
                  <Image
                    src={`https://picsum.photos/seed/portrait1${i}/800/450`}
                    alt="AI generated portrait"
                    fill
                    className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
