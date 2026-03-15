import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { toast } from 'sonner';

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    businessType: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock form submission - will be replaced with backend later
    console.log('Form submitted:', formData);
    
    // Show success message
    setIsSubmitted(true);
    toast.success('Thank you for contacting TownTrend Marketing. Our team will contact you soon.');
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        businessType: '',
        message: ''
      });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="inquiry" className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get in <span className="bg-gradient-to-r from-orange-400 to-rose-400 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-slate-400">
              Let's discuss how we can grow your business
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-rose-500 mx-auto mt-4 rounded-full"></div>
          </div>

          {isSubmitted ? (
            <Card className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border-emerald-500/50 backdrop-blur-sm">
              <CardContent className="py-16 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                <p className="text-slate-300 text-lg">
                  Thank you for contacting TownTrend Marketing. Our team will contact you soon.
                </p>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Send us a message</CardTitle>
                <CardDescription className="text-slate-400">
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-white text-sm font-medium">Full Name *</label>
                      <Input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-emerald-500"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-white text-sm font-medium">Phone Number *</label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-emerald-500"
                        placeholder="+91 9876543210"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-white text-sm font-medium">Email Address *</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-emerald-500"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-white text-sm font-medium">Business Type *</label>
                      <Input
                        type="text"
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleChange}
                        required
                        className="bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-emerald-500"
                        placeholder="e.g., Restaurant, Retail, Services"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-white text-sm font-medium">Message *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-emerald-500 resize-none"
                      placeholder="Tell us about your business and marketing goals..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white py-6 text-lg rounded-full shadow-lg shadow-orange-500/50 transition-all duration-300"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

// Add missing import for Check icon
import { Check } from 'lucide-react';

export default InquiryForm;
