import React from 'react';
import { Award, Target, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">TownTrend Marketing</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                  alt="Team Collaboration"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                TownTrend Marketing is a digital marketing agency that helps small businesses grow online using social media marketing, professional websites, and targeted advertising strategies.
              </p>
              
              <p className="text-lg text-slate-300 leading-relaxed">
                We specialize in creating customized marketing solutions that drive real results for local and online businesses. Our team combines creativity with data-driven strategies to help you reach your business goals.
              </p>

              {/* Features */}
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-emerald-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Targeted Approach</h3>
                    <p className="text-slate-400 text-sm">Strategic campaigns designed specifically for your business goals and target audience.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-orange-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-rose-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Fast Results</h3>
                    <p className="text-slate-400 text-sm">See measurable growth in your business within weeks, not months.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Proven Expertise</h3>
                    <p className="text-slate-400 text-sm">Years of experience delivering successful campaigns for businesses like yours.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
