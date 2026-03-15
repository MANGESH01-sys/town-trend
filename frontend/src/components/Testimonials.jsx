import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../mockData';
import { Card, CardHeader, CardDescription } from './ui/card';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Client <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Don't just take our word for it - hear what our clients say
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id}
              className="group bg-slate-800/50 border-slate-700 hover:border-purple-500/50 backdrop-blur-sm transition-all duration-300 hover:transform hover:scale-105"
            >
              <CardHeader className="space-y-4">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <CardDescription className="text-slate-300 text-base leading-relaxed italic">
                  "{testimonial.text}"
                </CardDescription>

                {/* Client Info */}
                <div className="pt-4 border-t border-slate-700">
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-slate-400 text-sm">{testimonial.business}</div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
