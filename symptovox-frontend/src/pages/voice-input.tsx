'use client';
import { useState, useRef, useEffect } from 'react';
import { Mic, MicOff, Send, RotateCcw, Volume2, Brain, ArrowLeft, Radio } from 'lucide-react';
import Link from 'next/link';
import '../app/globals.css';

export default function VoiceInputPage() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [audioLevel, setAudioLevel] = useState(0);
  const [recordingTime, setRecordingTime] = useState(0);
  const recognitionRef = useRef<any>(null);
  const timerRef = useRef<NodeJS.Timeout>(0 as unknown as NodeJS.Timeout);

  // Mock speech recognition for demo
  const startListening = () => {
    if (isListening) return;
    
    setIsListening(true);
    setTranscript('');
    setRecordingTime(0);
    
    // Simulate audio level changes
    const audioInterval = setInterval(() => {
      setAudioLevel(Math.random() * 100);
    }, 100);

    // Simulate speech recognition
    const phrases = [
      "I have a runny nose and sore throat",
      "I've been coughing and feeling tired",
      "My head hurts and I have a fever",
      "I'm experiencing congestion and body aches"
    ];

    let currentPhrase = '';
    let phraseIndex = 0;
    let charIndex = 0;

    const typePhrase = () => {
      if (phraseIndex < phrases.length) {
        const phrase = phrases[phraseIndex];
        if (charIndex < phrase.length) {
          currentPhrase += phrase[charIndex];
          setTranscript(currentPhrase);
          charIndex++;
          setTimeout(typePhrase, 50);
        } else {
          phraseIndex++;
          charIndex = 0;
          currentPhrase += ' ';
          if (phraseIndex < phrases.length) {
            setTimeout(typePhrase, 500);
          }
        }
      }
    };

    setTimeout(typePhrase, 1000);

    // Start timer
    const startTime = Date.now();
    timerRef.current = setInterval(() => {
      setRecordingTime(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);

    // Store interval for cleanup
    recognitionRef.current = {
      stop: () => {
        clearInterval(audioInterval);
        clearInterval(timerRef.current);
        setIsListening(false);
        setAudioLevel(0);
      }
    };
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  };

  const handleSubmit = async () => {
    if (!transcript.trim()) return;
    
    setIsProcessing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsProcessing(false);
    
    // In a real app, you'd redirect to results or show them here
    console.log('Submitted:', transcript);
  };

  const resetTranscript = () => {
    setTranscript('');
    setAudioLevel(0);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Navigation */}
      <nav className="px-6 py-4 border-b border-gray-700">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3 group">
            <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                <Volume2 className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                SymptoVox
              </span>
            </div>
          </Link>
          <div className="text-sm text-gray-400">
            Voice Symptom Analysis
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Describe Your Symptoms
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Speak naturally about how you're feeling. Our AI will analyze your symptoms and provide personalized recommendations.
          </p>
        </div>

        {/* Voice Input Card */}
        <div className="bg-gray-800/50 rounded-2xl border border-gray-700 p-8 mb-8">
          {/* Voice Visualization */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Radio className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">Voice Input</span>
              </div>
              {isListening && (
                <div className="flex items-center space-x-2">
                  
                  <span className="text-red-400 text-sm">Recording</span>
                  <span className="text-gray-400 text-sm">{formatTime(recordingTime)}</span>
                </div>
              )}
            </div>
            
            {/* Audio Level Visualization */}
            <div className="h-4 bg-gray-700 rounded-full overflow-hidden mb-6">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-100"
                style={{ width: `${audioLevel}%` }}
              />
            </div>

            {/* Main Recording Button */}
            <div className="flex justify-center mb-8">
              <button
                onClick={isListening ? stopListening : startListening}
                className={`relative w-32 h-32 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isListening 
                    ? 'bg-red-500 hover:bg-red-600 shadow-lg shadow-red-500/25' 
                    : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 shadow-lg shadow-blue-500/25'
                }`}
              >
                {isListening ? (
                  <div className="flex flex-col items-center">
                    <MicOff className="w-8 h-8 text-white" />
                    <span className="text-white text-sm mt-2">Stop</span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <Mic className="w-8 h-8 text-white" />
                    <span className="text-white text-sm mt-2">Start Speaking</span>
                  </div>
                )}
                
                {/* Animated rings when listening */}
                {isListening && (
                  <>
                    <div className="absolute inset-0 border-4 border-red-400 rounded-full animate-ping opacity-75" />
                    <div className="absolute inset-0 border-4 border-red-300 rounded-full animate-pulse" />
                  </>
                )}
              </button>
            </div>

            {/* Instructions */}
            <div className="text-center mb-6">
              <p className="text-gray-400 text-sm">
                {isListening 
                  ? "Speak clearly about your symptoms..."
                  : "Click the microphone and describe how you're feeling"
                }
              </p>
            </div>
          </div>

          {/* Transcript Display */}
          <div className="mb-6">
            <label className="block text-gray-400 text-sm font-medium mb-3">
              Your Symptoms
            </label>
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 min-h-[120px]">
              {transcript ? (
                <p className="text-white text-lg leading-relaxed">{transcript}</p>
              ) : (
                <p className="text-gray-500 italic">
                  {isListening ? "Listening..." : "Your spoken symptoms will appear here..."}
                </p>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center">
            <button
              onClick={resetTranscript}
              disabled={!transcript || isListening}
              className="flex items-center space-x-2 px-6 py-3 text-gray-400 hover:text-white transition-colors disabled:opacity-50"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Clear</span>
            </button>

            <button
              onClick={handleSubmit}
              disabled={!transcript.trim() || isProcessing || isListening}
              className="flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 disabled:from-gray-600 disabled:to-gray-600 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg disabled:shadow-none"
            >
              {isProcessing ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Analyzing...</span>
                </>
              ) : (
                <>
                  <Brain className="w-5 h-5" />
                  <span>Analyze Symptoms</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Tips Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
            <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
              <Mic className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-white font-semibold mb-2">Speak Naturally</h3>
            <p className="text-gray-400 text-sm">
              Describe your symptoms as you would to a doctor. Include details like duration and severity.
            </p>
          </div>

          <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
            <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
              <Volume2 className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="text-white font-semibold mb-2">Clear Audio</h3>
            <p className="text-gray-400 text-sm">
              Find a quiet environment and speak clearly into your microphone for best results.
            </p>
          </div>

          <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
            <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
              <Brain className="w-5 h-5 text-green-400" />
            </div>
            <h3 className="text-white font-semibold mb-2">AI Analysis</h3>
            <p className="text-gray-400 text-sm">
              Our AI analyzes both what you say and how you sound to provide accurate recommendations.
            </p>
          </div>
        </div>

        {/* Privacy Notice */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Your voice data is processed securely and never stored permanently. 
            <span className="text-blue-400 ml-1">Learn more about our privacy policy</span>
          </p>
        </div>
      </div>
    </div>
  );
}