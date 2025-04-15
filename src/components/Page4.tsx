"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { MapPin, Phone, Mail, Send, MessageSquare } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  submitted: boolean;
  error: boolean;
}

const Page4: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<FormStatus>({
    submitted: false,
    error: false
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted:", formData);
    
    // Reset form and show success message
    setFormStatus({ submitted: true, error: false });
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Reset form status after 5 seconds
    setTimeout(() => {
      setFormStatus({ submitted: false, error: false });
    }, 5000);
  };

  return (
    <section className="py-20 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h2>
          <p className="text-xl max-w-2xl mx-auto text-gray-600">
            Have questions about YOLO Bike Rentals? We're here to help! Reach out to our team using the form below.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact Info Column */}
          <div className="md:col-span-2 bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold mb-6 text-red-600">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <MapPin className="text-red-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Our Location</h4>
                  <p className="text-gray-600">123 Bike Avenue, Greenville, CA 94107</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <Phone className="text-red-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Phone Number</h4>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <Mail className="text-red-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email Address</h4>
                  <p className="text-gray-600">support@yolobikerentals.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <MessageSquare className="text-red-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Live Chat</h4>
                  <p className="text-gray-600">Available 9am - 6pm PST</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form Column */}
          <div className="md:col-span-3 bg-white rounded-lg shadow-md p-8">
            {formStatus.submitted ? (
              <div className="bg-red-100 text-red-700 p-6 rounded-lg text-center h-full flex flex-col items-center justify-center">
                <div className="bg-red-200 p-4 rounded-full mb-4">
                  <Send size={32} className="text-red-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-lg">Thank you for reaching out. We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                      placeholder="johndoe@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                    placeholder="How can we help you?"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                    placeholder="Tell us about your inquiry..."
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition flex items-center justify-center w-full md:w-auto"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page4;