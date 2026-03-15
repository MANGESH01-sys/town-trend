import React from 'react';
import { Check } from 'lucide-react';
import { pricingPlans } from '../mockData';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const Pricing = () => {
  const handleWhatsAppContact = (planName) => {
    const message = encodeURIComponent(`Hi! I'm interested in the ${planName}. Can you provide more details?`);
    window.open(`https://wa.me/919424057785?text=${message}`, '_blank');
  };

  return (
    <section id="pricing" className="py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Pricing <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Plans</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Choose the perfect plan for your business growth
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan) => (
            <Card 
              key={plan.id}
              className={`group relative bg-slate-800/50 border-slate-700 backdrop-blur-sm transition-all duration-300 hover:transform hover:scale-105 ${
                plan.highlighted 
                  ? 'ring-2 ring-emerald-500 shadow-2xl shadow-emerald-500/20' 
                  : 'hover:border-emerald-500/50'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-6 py-2 text-sm shadow-lg">
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center space-y-4 pt-8">
                <CardTitle className="text-white text-2xl">
                  {plan.name}
                </CardTitle>
                
                <div>
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-400 text-lg">{plan.period}</span>
                </div>
                
                <CardDescription className="text-slate-400">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-emerald-400" />
                      </div>
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={() => handleWhatsAppContact(plan.name)}
                  className={`w-full py-6 text-lg rounded-full transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white shadow-lg shadow-emerald-500/50'
                      : 'bg-slate-700 hover:bg-slate-600 text-white'
                  }`}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-slate-400">
            Need a custom plan? <a href="https://wa.me/919424057785" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">Contact us</a> for tailored solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
