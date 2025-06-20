import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

const STATIC_QUOTES = [
  "Believe you can and you're halfway there.",
  "The only way to do great work is to love what you do.",
  "Don't watch the clock; do what it does. Keep going.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Your limitation—it's only your imagination.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it."
];

const MotivationalBanner: React.FC = () => {
  const [quote, setQuote] = useState<string>('');

  useEffect(() => {
    // Select a random quote on component mount
    const randomIndex = Math.floor(Math.random() * STATIC_QUOTES.length);
    setQuote(STATIC_QUOTES[randomIndex]);
  }, []);

  return (
    <div className="my-8 p-6 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg shadow-xl">
      <div className="flex items-start space-x-3">
        <Sparkles className="w-8 h-8 text-yellow-300 flex-shrink-0 mt-1" />
        <div>
          <h2 className="text-xl font-semibold mb-2">A Spark of Motivation</h2>
          {quote ? (
            <p className="italic text-lg">"{quote}"</p>
          ) : (
            <p className="italic text-lg">Loading an inspiring thought...</p> 
          )}
        </div>
      </div>
    </div>
  );
};

export default MotivationalBanner;