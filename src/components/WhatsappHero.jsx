import React from 'react';
import { FaFacebook, FaArrowRight, FaStar, FaCheckCircle, FaVideo, FaPhoneAlt, FaEllipsisV, FaSmile, FaPaperclip, FaCamera, FaMicrophone, FaBolt, FaCheckDouble } from 'react-icons/fa';

const WhatsappHero = () => {
  return (
    <section className="relative bg-[#f8fbfa] py-20 overflow-hidden font-sans">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.4]"
        style={{
          backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Left Content */}
          <div className="flex-1 max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-8 shadow-sm">
              <div className="bg-[#128c7e] rounded-full p-1">
                <FaCheckCircle className="text-white text-xs" />
              </div>
              <span className="text-sm font-semibold text-gray-700">Meta Official Tech Provider</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl lg:text-6xl font-extrabold text-[#111827] leading-tight mb-6">
              Turn WhatsApp <br />
              Into Your <br />
              <span className="text-[#15b06d] relative inline-block">
                #1 Growth Engine
                {/* Underline SVG */}
                <svg className="absolute w-full h-4 -bottom-1 left-0 text-[#15b06d]" viewBox="0 0 200 20" preserveAspectRatio="none">
                  <path d="M0,15 Q50,5 100,15 T200,10" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-gray-500 text-lg mb-8 leading-relaxed max-w-lg font-medium">
              Automate sales, support, and marketing with intelligent AI bots built directly on the official Meta Cloud API. Unstoppable delivery, zero bans.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button className="bg-[#1a1c29] text-white px-8 py-3.5 rounded-full font-semibold flex items-center gap-3 hover:bg-gray-800 transition-colors shadow-lg">
                Get Started for Free <FaArrowRight />
              </button>
              <a 
                href="https://saas-whtsapp-crm-sigma.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1877f2] text-white px-8 py-3.5 rounded-full font-semibold flex items-center gap-3 hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/30"
              >
                <FaFacebook className="text-xl" /> Connect with Facebook
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-4 bg-white/80 backdrop-blur-sm border border-gray-100 rounded-full py-2 px-4 inline-flex shadow-sm">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex text-[#ffb400] text-sm">
                  {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                </div>
                <div className="text-xs font-semibold text-gray-600">
                  Trusted by <span className="text-black font-bold">2,400+</span> teams
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="flex-1 relative flex justify-center lg:justify-end w-full">
            <div className="relative w-[320px] h-[650px] bg-[#111] rounded-[40px] border-[8px] border-[#1a1c29] shadow-2xl overflow-hidden shadow-[#15b06d]/20">
              
              {/* Phone Header */}
              <div className="bg-[#008069] text-white px-4 py-3 flex items-center justify-between shadow-md z-10 relative pt-10">
                {/* Notch area space */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1a1c29] rounded-b-2xl"></div>
                
                <div className="flex items-center gap-3">
                  <FaArrowRight className="rotate-180" />
                  <div className="w-9 h-9 rounded-full bg-teal-600 flex items-center justify-center font-bold text-lg border border-teal-500">
                    T
                  </div>
                  <div className="leading-tight">
                    <div className="font-bold">Tejomart Trade</div>
                    <div className="text-xs text-white/80">online</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-lg">
                  <FaVideo />
                  <FaPhoneAlt />
                  <FaEllipsisV />
                </div>
              </div>

              {/* Phone Body / Chat Area */}
              <div className="bg-[#efeae2] h-full p-4 flex flex-col gap-3 relative" style={{ backgroundImage: "url('https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg')", backgroundSize: 'cover', backgroundBlendMode: 'soft-light' }}>
                
                {/* Product Catalog Message */}
                <div className="bg-white rounded-xl rounded-tl-none p-2 shadow-sm w-[90%] self-start relative mt-4">
                   {/* Tail */}
                  <div className="absolute top-0 -left-2 w-0 h-0 border-t-[10px] border-t-white border-l-[10px] border-l-transparent"></div>
                  
                  <div className="relative w-full h-36 bg-yellow-400 rounded-lg overflow-hidden mb-2">
                     <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Headphones" className="w-full h-full object-cover mix-blend-multiply opacity-80" />
                     <div className="absolute bottom-2 left-2 text-white font-bold drop-shadow-md">Summer Collection</div>
                  </div>
                  <div className="px-1">
                    <div className="font-bold text-gray-800 text-sm">Welcome to Tejomart! 🚀</div>
                    <div className="text-gray-600 text-xs mt-1 leading-relaxed">
                      Thanks for reaching out. Check out our latest catalog above!
                    </div>
                  </div>
                  <div className="flex justify-end mt-1 text-[10px] text-gray-400 items-center gap-1">
                    10:42 AM <FaCheckDouble className="text-blue-500" />
                  </div>
                  <div className="mt-2 border-t pt-2 text-center text-teal-600 font-bold text-sm">
                    View Catalog
                  </div>
                </div>

                {/* Customer Reply */}
                <div className="bg-[#d9fdd3] rounded-xl rounded-tr-none p-3 shadow-sm w-[85%] self-end relative mt-2">
                   {/* Tail */}
                  <div className="absolute top-0 -right-2 w-0 h-0 border-t-[10px] border-t-[#d9fdd3] border-r-[10px] border-r-transparent"></div>
                  <div className="text-sm text-gray-800">
                    Wow that's great! What are your bestsellers?
                  </div>
                  <div className="flex justify-end mt-1 text-[10px] text-gray-500 items-center gap-1">
                    10:43 AM <FaCheckDouble className="text-blue-500" />
                  </div>
                </div>

                {/* Typing Indicator */}
                <div className="bg-white rounded-full py-2 px-4 shadow-sm self-start flex items-center gap-1 mt-2">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>

                {/* Floating Badges */}
                <div className="absolute top-10 -right-12 bg-white rounded-xl shadow-xl p-3 flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="bg-green-100 p-2 rounded-full text-green-500">
                     <FaCheckCircle />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500 font-bold tracking-wider">DELIVERY</div>
                    <div className="font-bold text-gray-800">98.5% Rate</div>
                  </div>
                </div>

                <div className="absolute bottom-32 -left-16 bg-white rounded-xl shadow-xl p-3 flex items-center gap-3 z-20 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                  <div className="bg-yellow-100 p-2 rounded-full text-yellow-500">
                     <FaBolt />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500 font-bold tracking-wider">RESPONSE</div>
                    <div className="font-bold text-gray-800">1.2s Avg Time</div>
                  </div>
                </div>

              </div>

              {/* Phone Input Area */}
              <div className="absolute bottom-0 w-full bg-[#f0f2f5] p-2 flex items-center gap-2">
                <div className="flex-1 bg-white rounded-full flex items-center px-3 py-2 gap-3 shadow-sm">
                  <FaSmile className="text-gray-500 text-xl" />
                  <input type="text" placeholder="Type a message" className="flex-1 outline-none text-sm bg-transparent" readOnly />
                  <FaPaperclip className="text-gray-500 text-lg rotate-45" />
                  <FaCamera className="text-gray-500 text-lg" />
                </div>
                <div className="bg-[#00a884] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-sm">
                  <FaMicrophone />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatsappHero;
