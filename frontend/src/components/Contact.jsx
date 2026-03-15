import React from 'react';
import { MapPin, Mail, Phone, Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Us</span>
          </h2>
          <p className="text-xl text-slate-400">
            Get in touch with TownTrend Marketing
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  {/* Agency Info */}
                  <div className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">TownTrend Marketing</div>
                      <div className="text-slate-400">Owner: Mangesh Dhurve</div>
                      <div className="text-slate-400">Pandhurna, Madhya Pradesh, India (480-334)</div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-rose-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">Email</div>
                      <a href="mailto:towntrendmarketing@gmail.com" className="text-slate-400 hover:text-emerald-400 transition-colors">
                        towntrendmarketing@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">Phone</div>
                      <a href="tel:+919424057785" className="text-slate-400 hover:text-emerald-400 transition-colors">
                        +91 9424057785
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://www.instagram.com/creatorpsycho_ai/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                  <a 
                    href="https://www.facebook.com/share/18JynA7GE4/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Facebook className="w-6 h-6 text-white" />
                  </a>
                  <a 
                    href="http://www.youtube.com/@crecketlivestudios" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-red-500 to-rose-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Youtube className="w-6 h-6 text-white" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/mangesh-dhurve-937750258" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Linkedin className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59465.77237936944!2d78.46914!3d21.59488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd33c9e8a53914d%3A0xc0b6e5c5e88d5e6f!2sPandhurna%2C%20Madhya%20Pradesh%20480334!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TownTrend Marketing Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
