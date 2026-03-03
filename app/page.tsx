'use client';

import Image from "next/image";
import { ChevronDown, Star } from "lucide-react";
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
            className="flex flex-col gap-[3vw] sm:gap-[2vw] md:gap-[1.5vw] overflow-x-auto hide-scrollbar px-[4vw] md:px-[8vw]"
          >
            {/* Row 1 */}
            <div className="flex gap-[3vw] sm:gap-[2vw] md:gap-[1.5vw] w-max">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={`r1-${i}`} className="aspect-video w-[90vw] sm:w-[54vw] md:w-[42vw] lg:w-[34vw] xl:w-[26vw] shrink-0 relative rounded-[20px] md:rounded-[28px] overflow-hidden bg-[#1a1a1c]">
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
            
            {/* Row 2 - Offset (Half image + half gap) */}
            <div className="flex gap-[3vw] sm:gap-[2vw] md:gap-[1.5vw] w-max ml-[46.5vw] sm:ml-[28vw] md:ml-[21.75vw] lg:ml-[17.75vw] xl:ml-[13.75vw]">
              {[9, 10, 11, 12, 13, 14, 15, 16].map((i) => (
                <div key={`r2-${i}`} className="aspect-video w-[90vw] sm:w-[54vw] md:w-[42vw] lg:w-[34vw] xl:w-[26vw] shrink-0 relative rounded-[20px] md:rounded-[28px] overflow-hidden bg-[#1a1a1c]">
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

            {/* Row 3 - Aligned with Row 1 for a brick pattern */}
            <div className="flex gap-[3vw] sm:gap-[2vw] md:gap-[1.5vw] w-max">
              {[17, 18, 19, 20, 21, 22, 23, 24].map((i) => (
                <div key={`r3-${i}`} className="aspect-video w-[90vw] sm:w-[54vw] md:w-[42vw] lg:w-[34vw] xl:w-[26vw] shrink-0 relative rounded-[20px] md:rounded-[28px] overflow-hidden bg-[#1a1a1c]">
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

            {/* Row 4 - Offset (Half image + half gap) */}
            <div className="flex gap-[3vw] sm:gap-[2vw] md:gap-[1.5vw] w-max ml-[46.5vw] sm:ml-[28vw] md:ml-[21.75vw] lg:ml-[17.75vw] xl:ml-[13.75vw]">
              {[25, 26, 27, 28, 29, 30, 31, 32].map((i) => (
                <div key={`r4-${i}`} className="aspect-video w-[90vw] sm:w-[54vw] md:w-[42vw] lg:w-[34vw] xl:w-[26vw] shrink-0 relative rounded-[20px] md:rounded-[28px] overflow-hidden bg-[#1a1a1c]">
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

            {/* Row 5 - Aligned with Row 1 for a brick pattern */}
            <div className="flex gap-[3vw] sm:gap-[2vw] md:gap-[1.5vw] w-max">
              {[33, 34, 35, 36, 37, 38, 39, 40].map((i) => (
                <div key={`r5-${i}`} className="aspect-video w-[90vw] sm:w-[54vw] md:w-[42vw] lg:w-[34vw] xl:w-[26vw] shrink-0 relative rounded-[20px] md:rounded-[28px] overflow-hidden bg-[#1a1a1c]">
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

        {/* Testimonials Section */}
        <section className="w-full max-w-[1400px] mx-auto px-8 py-24 md:py-32 flex flex-col items-center">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl tracking-tight text-[#f5f5f5] font-normal mb-6">
              Trusted by <span className="text-[#a0a0a0]">visionaries</span>
            </h2>
            <p className="text-[17px] text-[#a0a0a0] font-light max-w-xl mx-auto leading-[1.6]">
              Join thousands of creators who are already accelerating their workflow with our industry-leading models.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {/* Testimonial 1 */}
            <div className="bg-[#151516] border border-white/5 rounded-[28px] p-8 md:p-10 flex flex-col justify-between hover:bg-[#1a1a1c] transition-colors duration-300">
              <div>
                <div className="flex gap-1 mb-8">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-[#f5f5f5] text-[#f5f5f5]" />
                  ))}
                </div>
                <p className="text-[16px] md:text-[17px] leading-[1.7] text-[#d0d0d0] font-light mb-10">
                  "The quality of the portraits is simply unmatched. It has completely transformed how I generate assets for my campaigns, saving me hours every week."
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden relative bg-[#222224]">
                  <Image src="https://picsum.photos/seed/user1/100/100" alt="Sarah Jenkins" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <div className="text-[15px] text-[#f5f5f5] font-medium">Sarah Jenkins</div>
                  <div className="text-[13px] text-[#a0a0a0] font-light mt-0.5">Art Director</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-[#151516] border border-white/5 rounded-[28px] p-8 md:p-10 flex flex-col justify-between hover:bg-[#1a1a1c] transition-colors duration-300">
              <div>
                <div className="flex gap-1 mb-8">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-[#f5f5f5] text-[#f5f5f5]" />
                  ))}
                </div>
                <p className="text-[16px] md:text-[17px] leading-[1.7] text-[#d0d0d0] font-light mb-10">
                  "VisualEvo's attention to detail and lighting is incredible. The 16:9 aspect ratio support makes it perfect for cinematic storyboarding."
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden relative bg-[#222224]">
                  <Image src="https://picsum.photos/seed/user2/100/100" alt="Marcus Chen" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <div className="text-[15px] text-[#f5f5f5] font-medium">Marcus Chen</div>
                  <div className="text-[13px] text-[#a0a0a0] font-light mt-0.5">Concept Artist</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-[#151516] border border-white/5 rounded-[28px] p-8 md:p-10 flex flex-col justify-between hover:bg-[#1a1a1c] transition-colors duration-300">
              <div>
                <div className="flex gap-1 mb-8">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-[#f5f5f5] text-[#f5f5f5]" />
                  ))}
                </div>
                <p className="text-[16px] md:text-[17px] leading-[1.7] text-[#d0d0d0] font-light mb-10">
                  "I've tried every AI image generator out there, and nothing comes close to the photorealism and consistency I get here. Absolute game-changer."
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden relative bg-[#222224]">
                  <Image src="https://picsum.photos/seed/user3/100/100" alt="Elena Rodriguez" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <div className="text-[15px] text-[#f5f5f5] font-medium">Elena Rodriguez</div>
                  <div className="text-[13px] text-[#a0a0a0] font-light mt-0.5">Creative Lead</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="w-full max-w-[800px] mx-auto px-8 pb-32 pt-16 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl tracking-tight text-[#f5f5f5] font-normal mb-10">
            Ready to bring your ideas to life?
          </h2>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-[#f5f5f5] text-[#101010] px-10 py-4 rounded-full hover:bg-white transition-all duration-300 text-[16px] font-medium hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
          >
            Start Generating Now
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-white/5 py-8 mt-auto">
        <div className="max-w-[1400px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-[#808080] font-light">
          <div>&copy; {new Date().getFullYear()} VISUALEVO. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[#d0d0d0] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#d0d0d0] transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
