import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { portfolioItems } from '../mockData';
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Badge } from './ui/badge';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-orange-400 to-rose-400 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Real results for real businesses. See how we've helped our clients succeed.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-rose-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {portfolioItems.map((item) => (
            <Card 
              key={item.id}
              className={`group relative overflow-hidden bg-gradient-to-br ${item.bgColor} border-0 hover:scale-105 transition-all duration-300 cursor-pointer shadow-xl`}
            >
              <CardHeader className="relative z-10 p-8 h-full flex flex-col justify-between min-h-[300px]">
                <div>
                  <Badge className="mb-4 bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30">
                    {item.category}
                  </Badge>
                  
                  <CardTitle className="text-white text-2xl mb-3 group-hover:underline">
                    {item.title}
                  </CardTitle>
                  
                  <CardDescription className="text-white/90 text-base leading-relaxed">
                    {item.description}
                  </CardDescription>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <div className="text-white font-bold text-xl">
                    {item.results}
                  </div>
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardHeader>

              {/* Overlay effect */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            </Card>
          ))}
        </div>

        {/* Bottom Image */}
        <div className="mt-16 max-w-6xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
              alt="Analytics Dashboard"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent flex items-end">
              <div className="p-8">
                <h3 className="text-white text-3xl font-bold mb-2">Data-Driven Results</h3>
                <p className="text-slate-300 text-lg">We track every metric to ensure your marketing investment delivers maximum ROI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
