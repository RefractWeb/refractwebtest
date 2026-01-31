"use client";

import { ArrowRight, ArrowUpRight, Hexagon } from "lucide-react";

export const WorkSection = () => {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Selected <span className="font-light text-gray-400">work</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Redefining the standard. We sharpen clarity, elevate design, and
            build Digital identities that perform.
          </p>
          <div className="pt-6 flex items-center justify-center gap-6">
            <button className="px-8 py-3 rounded-full bg-[#B05D41] bg-opacity-80 text-white text-sm font-medium border border-white/10 hover:bg-[#B05D41] transition-colors shadow-[0_0_30px_rgba(176,93,65,0.2)]">
              Work with us
            </button>
            <a
              href="#"
              className="flex items-center gap-1 text-sm text-gray-300 hover:text-white transition-colors"
            >
              Explore our services <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Horizontal Scroll / Grid */}
        <div className="flex flex-col lg:flex-row gap-6 overflow-x-auto pb-8 snap-x">
          {/* Case Study 1 */}
          <div className="min-w-87.5 lg:min-w-125 snap-center group">
            <div className="h-100 bg-white rounded-t-3xl p-8 relative flex flex-col justify-between overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-5xl font-bold text-black leading-[0.9] tracking-tight">
                  Design That <br /> Inspire & <br /> Delight
                </h3>
                <div className="mt-8 flex items-center gap-2 text-black font-medium cursor-pointer hover:underline">
                  Contact Us <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
              {/* Pink Texture Block */}
              <div
                className="w-full h-32 bg-linear-to-r from-pink-200 via-pink-300 to-pink-200 rounded-xl mt-auto opacity-80 blur-sm"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E\")",
                }}
              />
            </div>
            <div className="bg-[#1a1a1a] p-6 rounded-b-3xl border-t border-white/5">
              <h4 className="text-white font-bold text-xl mb-2">
                H1 Goes here
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                We replace the need for multiple vendors. From brand identity to
                custom software, we build the entire ecosystem your business
                runs on.
              </p>
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="min-w-87.5 lg:min-w-125 snap-center group">
            <div className="h-100 bg-[#0A0A0A] rounded-t-3xl p-8 relative flex flex-col justify-between overflow-hidden border border-white/5">
              <div className="relative z-10 flex justify-between w-full">
                <span className="text-gray-500 font-bold text-xl flex items-center gap-1">
                  <Hexagon className="fill-gray-500 w-5 h-5" /> Nublink
                </span>
                <span className="w-8 h-8 rounded-full bg-white/10" />
              </div>
              <div className="relative z-10 mt-auto">
                <h3 className="text-4xl font-medium text-white mb-2">
                  Biometric Identity.
                </h3>
                <div className="text-3xl font-medium text-gray-700 leading-tight">
                  Privacy. Security.
                  <br />
                  Authentication.
                  <br />
                  Identity Verification.
                  <br />
                  Personalized Experience.
                </div>
              </div>
              {/* Grid Decoration */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-24 h-full border-l border-white/5 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.05)_75%,rgba(255,255,255,0.05)_100%)] bg-size-[20px_20px]" />
            </div>
            <div className="bg-[#1a1a1a] p-6 rounded-b-3xl border-t border-white/5">
              <h4 className="text-white font-bold text-xl mb-2">
                H1 Goes here
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                We replace the need for multiple vendors. From brand identity to
                custom software, we build the entire ecosystem your business
                runs on.
              </p>
            </div>
          </div>

          {/* Case Study 3 */}
          <div className="min-w-87.5 lg:min-w-125 snap-center group">
            <div className="h-100 bg-linear-to-br from-[#2a1b4e] to-[#0A0A0A] rounded-t-3xl p-8 relative flex flex-col justify-between overflow-hidden border border-white/5">
              {/* Abstract Orb */}
              <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-linear-to-tr from-blue-500 via-purple-500 to-white opacity-80 blur-2xl" />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full bg-blue-600 mix-blend-overlay" />

              <div className="relative z-10 text-right mt-8">
                <h3 className="text-5xl font-bold text-white leading-tight">
                  Imagin
                  <br />
                  Reimagined
                </h3>
                <p className="text-gray-300 mt-2 text-sm max-w-50 ml-auto">
                  We build platforms that scale and unite...
                </p>
              </div>
            </div>
            <div className="bg-[#1a1a1a] p-6 rounded-b-3xl border-t border-white/5">
              <h4 className="text-white font-bold text-xl mb-2">
                H1 Goes here
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                We replace the need for multiple vendors. From brand identity to
                custom software, we build the entire ecosystem your business
                runs on.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
