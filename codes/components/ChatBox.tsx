'use client';

import React, { useState } from 'react';
import { X, MessageCircle, Send, Bot } from 'lucide-react';

interface ChatBoxProps {
  isOpen: boolean;
  onClose: () => void;
  contentTitle: string;
  contentSummary: string;
}

const predefinedQuestions = [
  "Want to explain this easily",
  "Want to get more details of this",
  "Translate in your native language",
  "What are the key takeaways?",
  "How does this impact the industry?",
  "Can you simplify this for beginners?"
];

export function ChatBox({ isOpen, onClose, contentTitle, contentSummary }: ChatBoxProps) {
  const [messages, setMessages] = useState<Array<{ type: 'user' | 'bot', content: string }>>([
    { type: 'bot', content: `Hi! I can help you understand "${contentTitle}". What would you like to know?` }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = (message: string) => {
    if (!message.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { type: 'user', content: message }]);

    // Simulate bot response
    setTimeout(() => {
      let botResponse = '';
      
      if (message.toLowerCase().includes('explain') || message.toLowerCase().includes('easy')) {
        botResponse = "I'll explain this in simple terms: " + contentSummary.substring(0, 200) + "...";
      } else if (message.toLowerCase().includes('details') || message.toLowerCase().includes('more')) {
        botResponse = "Here are more details: This topic covers advanced concepts that build upon the summary. Would you like me to dive deeper into any specific aspect?";
      } else if (message.toLowerCase().includes('translate') || message.toLowerCase().includes('language')) {
        botResponse = "I can help translate this content. Please select your preferred language from the translation dropdown above, and I'll provide the translated version.";
      } else if (message.toLowerCase().includes('takeaway') || message.toLowerCase().includes('key')) {
        botResponse = "Key takeaways: 1) This represents a significant advancement in the field, 2) It has practical applications, 3) It's worth following for future developments.";
      } else if (message.toLowerCase().includes('impact') || message.toLowerCase().includes('industry')) {
        botResponse = "This development could significantly impact the industry by changing how we approach these problems and opening new possibilities for innovation.";
      } else if (message.toLowerCase().includes('beginner') || message.toLowerCase().includes('simple')) {
        botResponse = "In simple terms: This is like upgrading from a basic tool to a smart tool that can think and adapt. It makes complex tasks easier and more efficient.";
      } else {
        botResponse = "That's an interesting question! Based on the content, I'd say this represents an important development in the field. Would you like me to elaborate on any specific aspect?";
      }

      setMessages(prev => [...prev, { type: 'bot', content: botResponse }]);
    }, 1000);

    setInputMessage('');
  };

  const handleQuestionClick = (question: string) => {
    handleSendMessage(question);
  };

  if (!isOpen) return null;

  return (
    <div className="absolute top-4 right-4 z-[999999] w-72 h-80 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-3 border-b border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <Bot className="w-3 h-3 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white text-sm">AI Assistant</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Ask about this content</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors duration-200"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-3 space-y-3">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] p-2.5 rounded-xl ${
                  message.type === 'user'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white'
                }`}
              >
                <p className="text-xs leading-relaxed">{message.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Predefined Questions */}
        <div className="p-3 border-t border-slate-200 dark:border-slate-700">
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">Quick questions:</p>
          <div className="flex flex-wrap gap-1.5 mb-2">
            {predefinedQuestions.slice(0, 2).map((question, index) => (
              <button
                key={index}
                onClick={() => handleQuestionClick(question)}
                className="px-2 py-1 text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-full transition-colors duration-200"
              >
                {question}
              </button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="p-3 border-t border-slate-200 dark:border-slate-700">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputMessage)}
              placeholder="Ask..."
              className="flex-1 px-2 py-1.5 bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-xs text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              onClick={() => handleSendMessage(inputMessage)}
              className="px-3 py-1.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 flex items-center gap-1"
            >
              <Send className="w-3 h-3" />
            </button>
          </div>
        </div>
    </div>
  );
}
