import React from 'react';
import { Share2, Monitor, Search, Target, Youtube, Users, MessageCircle } from 'lucide-react';
import { services } from '../mockData';
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';

const iconMap = {
  share2: Share2,
  monitor: Monitor,
  search: Search,
  target: Target,
  youtube: Youtube,
  users: Users,
  messageCircle: MessageCircle
};

const Services = () => {
  const gradients = [
    'from-emerald-500 to-cyan-500',
    'from-orange-500 to-rose-500',
    'from-purple-500 to-pink-500',
    'from-amber-500 to-orange-500',
    'from-blue-500 to-cyan-500',
    'from-rose-500 to-pink-500',
    'from-cyan-500 to-blue-500'
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Complete digital marketing solutions to grow your business online
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            const gradient = gradients[index % gradients.length];
            
            return (
              <Card 
                key={service.id}
                className="group bg-slate-800/50 border-slate-700 hover:border-emerald-500/50 backdrop-blur-sm transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
              >
                <CardHeader className="space-y-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <CardTitle className="text-white text-xl group-hover:text-emerald-400 transition-colors">
                    {service.title}
                  </CardTitle>
                  
                  <CardDescription className="text-slate-400 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a 
            href="https://wa.me/919424057785"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold rounded-full shadow-lg shadow-emerald-500/50 transition-all duration-300 hover:scale-105"
          >
            Let's Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
