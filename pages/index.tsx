import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MapPin, Calendar, Clock, Mail, MessageCircle, Baby, Banknote } from 'lucide-react';

interface Question {
  q: string;
  a: string;
}

export default function PlayDateInvitation() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  
  const email: string = ['timandjen', '@', 'tdobson.net'].join('');
  
  const questions: Question[] = [
    {
      q: "Where is it?",
      a: "At our house in Chorlton, Manchester. We'll send the exact address when you RSVP."
    },
    {
      q: "When is it?",
      a: "Saturday April 13th, 2024 from 2pm to 4pm"
    },
    {
      q: "What's the cost?",
      a: "Free! Just bring yourselves."
    },
    {
      q: "What age is it suitable for?",
      a: "The activities will be aimed at 1-3 year olds, but siblings are welcome."
    },
    {
      q: "How do I RSVP?",
      a: `Email us at ${email}`
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Spring Playdate
            </h1>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="h-5 w-5" />
                <span>Chorlton, Manchester</span>
              </div>
              
              <div className="flex items-center space-x-2 text-gray-600">
                <Calendar className="h-5 w-5" />
                <span>Saturday, April 13th 2024</span>
              </div>
              
              <div className="flex items-center space-x-2 text-gray-600">
                <Clock className="h-5 w-5" />
                <span>2:00 PM - 4:00 PM</span>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-4">
                {questions.map((question, index) => (
                  <div key={index} className="border rounded-lg">
                    <button
                      className="w-full px-4 py-3 flex justify-between items-center text-left"
                      onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                    >
                      <span className="font-medium text-gray-900">{question.q}</span>
                      {openQuestion === index ? (
                        <ChevronUp className="h-5 w-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      )}
                    </button>
                    
                    {openQuestion === index && (
                      <div className="px-4 pb-3">
                        <p className="text-gray-600">{question.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                RSVP by emailing us at {email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
@tailwind base;
@tailwind components;
@tailwind utilities;
