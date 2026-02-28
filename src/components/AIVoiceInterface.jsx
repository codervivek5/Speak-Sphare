import { useState, useEffect } from 'react';
import { Mic, Volume2, Bot, User, X, Sparkles } from 'lucide-react';

const AIVoiceInterface = ({ isOpen, onClose }) => {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [soundBars, setSoundBars] = useState([4, 4, 4, 4, 4]);

  // Simulate sound wave animation when listening
  useEffect(() => {
    if (!isListening) {
      setSoundBars([4, 4, 4, 4, 4]);
      return;
    }

    const interval = setInterval(() => {
      setSoundBars(prev => prev.map(() => Math.random() * 20 + 4));
    }, 100);

    return () => clearInterval(interval);
  }, [isListening]);

  const handleMicClick = () => {
    if (isListening) {
      setIsListening(false);
      // Simulate AI response
      setTimeout(() => {
        setAiResponse("That's great! Your pronunciation is improving. Let's practice another sentence.");
        setIsSpeaking(true);
        setTimeout(() => setIsSpeaking(false), 3000);
      }, 500);
    } else {
      setIsListening(true);
      setTranscript('Listening...');
      setTimeout(() => {
        setTranscript('"Hello, how are you doing today?"');
      }, 1500);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-2xl glass-card rounded-3xl p-8 animate-fade-in-up">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-500/30 mb-4">
            <Sparkles size={16} className="text-primary-400" />
            <span className="text-sm text-primary-300">AI Speech Coach</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Practice with AI</h2>
          <p className="text-gray-400">Speak naturally and get real-time feedback</p>
        </div>

        {/* AI Avatar & Conversation */}
        <div className="space-y-6 mb-8">
          {/* AI Message */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full ai-orb flex items-center justify-center flex-shrink-0">
              <Bot size={24} className="text-white" />
            </div>
            <div className="flex-1">
              <div className="glass-card rounded-2xl rounded-tl-none p-4">
                <p className="text-white">{aiResponse || "Hi! I'm your AI speaking coach. Click the microphone and say something to practice."}</p>
              </div>
              {isSpeaking && (
                <div className="flex items-center gap-1 mt-2 ml-2">
                  {[...Array(3)].map((_, i) => (
                    <span 
                      key={i} 
                      className="w-1.5 h-1.5 bg-primary-400 rounded-full animate-pulse"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* User Message */}
          {transcript && (
            <div className="flex items-start gap-4 flex-row-reverse">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                <User size={24} className="text-white" />
              </div>
              <div className="flex-1">
                <div className="glass-card rounded-2xl rounded-tr-none p-4 bg-white/5">
                  <p className="text-white">{transcript}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Voice Visualization */}
        <div className="flex justify-center items-center gap-1 h-16 mb-8">
          {soundBars.map((height, index) => (
            <div
              key={index}
              className="sound-bar"
              style={{ 
                height: `${height}px`,
                background: isListening 
                  ? 'linear-gradient(to top, #667eea, #764ba2)' 
                  : 'rgba(102, 126, 234, 0.3)',
                transition: 'height 0.1s ease'
              }}
            />
          ))}
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-4">
          <button
            onClick={handleMicClick}
            className={`mic-button w-20 h-20 rounded-full flex items-center justify-center text-white transition-all duration-300 ${
              isListening ? 'recording' : ''
            }`}
          >
            <Mic size={32} />
          </button>
          
          <button
            className="w-20 h-20 rounded-full glass-card flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
          >
            <Volume2 size={28} />
          </button>
        </div>

        {/* Status */}
        <p className="text-center mt-6 text-sm text-gray-400">
          {isListening ? 'Listening... Speak now' : 'Click microphone to start'}
        </p>
      </div>
    </div>
  );
};

export default AIVoiceInterface;
