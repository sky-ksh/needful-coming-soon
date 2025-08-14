import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Send, Bot, TrendingUp, Users, ArrowLeft, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const NRIBeta = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Array<{ type: 'user' | 'assistant', content: string }>>([]);
  const [isLoading, setIsLoading] = useState(false);

  const promptSuggestions = [
    "What are the best investment opportunities in GIFT City?",
    "Send flowers to my grandmother in Mumbai for her birthday",
    "Compare mutual funds vs. real estate investment in India",
    "Book a doctor appointment for my parents in Delhi",
    "What's the latest on NRI tax obligations?",
    "Help me diversify my Indian portfolio"
  ];

  const handleSendMessage = async () => {
    if (!message.trim()) return;
    
    const userMessage = message;
    setMessage("");
    setMessages(prev => [...prev, { type: 'user', content: userMessage }]);
    setIsLoading(true);
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        type: 'assistant', 
        content: "I'm working on your request. This is a beta version, so responses are simulated for now. In the full version, I'll provide real insights and can connect you with our Concierge team for hands-on help in India."
      }]);
      setIsLoading(false);
    }, 1500);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setMessage(suggestion);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" className="flex items-center gap-2 text-white/80 hover:text-white hover:bg-white/10" asChild>
              <Link to="/">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </Button>
            <Navigation variant="inline" />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Beta Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-sm">
                N
              </div>
              <span className="text-2xl font-bold" style={{ fontFamily: 'Lobster, cursive' }}>Needful</span>
            </div>
            <Badge variant="secondary" className="bg-blue-600/20 text-blue-400 border-blue-600/30">
              Beta
            </Badge>
          </div>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Get answers to anything India-related, or loop in real human help to get stuff done in India within minutes, not months.
          </p>
        </div>

        {/* Chat Interface */}
        <div className="mb-8">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardContent className="p-6">
              {/* Messages */}
              <div className="min-h-[300px] mb-6">
                {messages.length === 0 ? (
                  <div className="flex items-center justify-center h-[300px] text-white/40">
                    <div className="text-center">
                      <Bot className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                      <p>Ask Needful Agent anything about India</p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {messages.map((msg, index) => (
                      <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] p-3 rounded-lg ${
                          msg.type === 'user' 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-white/10 text-white border border-white/20'
                        }`}>
                          {msg.content}
                        </div>
                      </div>
                    ))}
                    {isLoading && (
                      <div className="flex justify-start">
                        <div className="bg-white/10 text-white border border-white/20 p-3 rounded-lg">
                          <div className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 animate-pulse" />
                            <span>Thinking...</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="flex gap-2">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask about investments, send flowers to family, book appointments..."
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-blue-400"
                />
                <Button 
                  onClick={handleSendMessage}
                  disabled={!message.trim() || isLoading}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>

              {/* Suggestions */}
              {messages.length === 0 && (
                <div className="mt-4">
                  <p className="text-white/60 text-sm mb-2">Try asking:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {promptSuggestions.map((suggestion, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="text-left justify-start h-auto p-2 text-white/70 hover:text-white hover:bg-white/10 text-sm"
                      >
                        {suggestion}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Needful Agent */}
          <Card className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 border-blue-600/30 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Needful Agent</h3>
              <p className="text-white/60 text-sm">
                AI-powered insights and instant connection to human help
              </p>
            </CardContent>
          </Card>

          {/* Needful Wealth */}
          <Card className="bg-gradient-to-br from-green-600/20 to-green-800/20 border-green-600/30 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Needful Wealth</h3>
              <p className="text-white/60 text-sm">
                Portfolio management and estate planning for Indian assets
              </p>
            </CardContent>
          </Card>

          {/* Needful Concierge */}
          <Card className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 border-purple-600/30 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Needful Concierge</h3>
              <p className="text-white/60 text-sm">
                Human services for everything from flowers to medical appointments
              </p>
            </CardContent>
          </Card>
        </div>

        <footer className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm">
            Beta version - Features are limited. Full launch coming soon.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default NRIBeta;