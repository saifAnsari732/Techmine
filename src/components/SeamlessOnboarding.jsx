import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const SeamlessOnboarding = () => {
  const steps = [
    {
      id: 1,
      text: 'Sign in with your Facebook Business account'
    },
    {
      id: 2,
      text: 'Select your WhatsApp Business number'
    },
    {
      id: 3,
      text: 'Done! Start sending campaigns immediately'
    }
  ];

  return (
    <section className="bg-gradient-to-br from-[#105a49] via-[#1a8566] to-[#25d366] py-24 font-sans text-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
          
          {/* Left Content */}
          <div className="flex-1 max-w-xl">
            <div className="text-xs font-bold tracking-[0.2em] text-white/80 uppercase mb-4">
              Seamless Onboarding
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6 text-white drop-shadow-sm">
              Connect in 1-Click.<br />
              No Tech Skills Needed.
            </h2>
            <p className="text-white/90 text-lg mb-8 leading-relaxed font-medium">
              As a Meta Official Tech Provider, we use Meta's Embedded Signup flow. This means no more dealing with complex APIs, App IDs, or manual configurations.
            </p>
            
            <div className="space-y-4">
              {[
                'Instant approval for standard messaging',
                'Direct link to your Meta Business Manager',
                'Secure OAuth connection',
                'Start messaging within minutes',
                'Zero developer involvement required'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <FaCheckCircle className="text-white text-lg shrink-0 opacity-80" />
                  <span className="text-white/90 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Onboarding Card */}
          <div className="flex-1 flex justify-center lg:justify-end w-full">
            <div className="bg-white rounded-[32px] p-8 lg:p-12 shadow-2xl shadow-black/20 text-gray-800 max-w-md w-full relative overflow-hidden">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Connect Your WhatsApp</h3>
                <p className="text-gray-500 text-sm">Securely link your business account.</p>
              </div>

              <a 
                href="https://saas-whtsapp-crm-sigma.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#1877f2] hover:bg-blue-600 text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center transition-colors mb-8 shadow-md"
              >
                Continue with Facebook
              </a>

              <div className="flex items-center mb-8">
                <div className="flex-1 border-t border-gray-100"></div>
                <div className="px-4 text-xs text-gray-400 font-medium">or follow these steps</div>
                <div className="flex-1 border-t border-gray-100"></div>
              </div>

              <div className="space-y-6">
                {steps.map((step) => (
                  <div key={step.id} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600 font-bold text-sm shrink-0 border border-green-100">
                      {step.id}
                    </div>
                    <div className="text-sm font-medium text-gray-600 mt-1.5 leading-relaxed">
                      {step.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SeamlessOnboarding;
