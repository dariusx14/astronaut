"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Rocket, Mic, Send, Loader2, Settings, Menu } from 'lucide-react';
import { useChat } from '../lib/hooks/useChat';

export default function AstronautAssistant() {
  const { messages, isLoading, sendMessage } = useChat();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSend = () => {
    if (inputRef.current?.value) {
      sendMessage(inputRef.current.value);
      inputRef.current.value = '';
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b border-slate-700">
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8">
            <Image
              src="/nasa-logo.svg"
              alt="NASA Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-xl font-bold">Astronaut&apos;s Virtual Assistant</h1>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon">
            <Settings className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4 max-w-4xl">
        <div className="grid gap-6">
          {/* 3D Scene Card */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-6">
              <div className="w-full h-64 bg-slate-900/50 rounded-lg flex items-center justify-center relative">
                <div className="text-center">
                  <div className="animate-pulse">
                    <Rocket className="w-16 h-16 mx-auto text-blue-400 mb-4" />
                  </div>
                  <p className="text-slate-400">3D Space Station Visualization</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Chat Interface */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-4">
              <div className="space-y-4 h-64 overflow-y-auto mb-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-800">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.type === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.type === 'user'
                          ? 'bg-blue-600'
                          : 'bg-slate-700'
                      }`}
                    >
                      {/* Change 'content' to 'text' */}
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="shrink-0">
                  <Mic className="w-4 h-4" />
                </Button>
                <Input
                  ref={inputRef}
                  placeholder="Type your message..."
                  className="bg-slate-700 border-slate-600"
                  onKeyPress={handleKeyPress}
                />
                <Button 
                  onClick={handleSend} 
                  className="shrink-0"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
