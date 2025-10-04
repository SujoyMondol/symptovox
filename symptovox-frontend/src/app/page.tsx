/*eslint-disable*/
'use client';
import { useState } from 'react';
import { useRouter } from "next/navigation";
import { Mic, Activity, Stethoscope, Heart, Zap, Shield, Users, ArrowRight, Play, CheckCircle, Star, Volume2, Brain } from 'lucide-react';

export default function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

   const router = useRouter();

   const handleVoiceRequest = () => {
     router.push('/voice-input');
   }


  const handleHowItWorks = () => {
    router.push('/how-it-works');
  }
  const features = [
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Voice-Activated Logging",
      description: "Describe your symptoms hands-free using natural speech"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Symptom Analysis",
      description: "Smart detection of common cold patterns and severity assessment"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Personalized Remedies",
      description: "AI-powered home treatment recommendations based on your symptoms"
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Doctor Connect",
      description: "Instant referrals to nearby healthcare providers when needed"
    }
  ];

  const steps = [
    { number: "01", title: "Speak Your Symptoms", description: "Describe how you feel using voice commands" },
    { number: "02", title: "AI Analysis", description: "Our AI detects potential conditions and severity" },
    { number: "03", title: "Get Recommendations", description: "Receive personalized care suggestions" },
    { number: "04", title: "Connect if Needed", description: "Get referred to doctors for serious symptoms" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Navigation */}
      <nav className="px-6 py-4 border-b border-gray-700">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
              <Volume2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              SymptoVox
            </span>
          </div>
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg"
            onClick={handleVoiceRequest}>
            Try Demo
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-900/50 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-700/50">
            <Zap className="w-4 h-4" />
            <span>AI-Powered Health Assistant</span>
          </div>
          
          <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
            Health Care Made
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Voice-Activated</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            SymptoVox uses advanced AI to analyze your symptoms through voice, providing instant home care advice 
            and connecting you with doctors when needed. Accessible, fast, and privacy-focused.
          </p>
          
          <div className="flex justify-center space-x-4 mb-16">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-600 transition-all flex items-center space-x-2 shadow-xl hover:shadow-2xl"
              onClick={handleVoiceRequest}>
              <Play className="w-5 h-5" />
              <span>Start Voice Demo</span>
            </button>
            <button className="border border-gray-600 text-gray-300 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800/50 transition-all"
              onClick={handleHowItWorks}>
              How It Works
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="text-3xl font-bold text-blue-400">95%</div>
              <div className="text-gray-400">Accuracy Rate</div>
            </div>
            <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="text-3xl font-bold text-purple-400">24/7</div>
              <div className="text-gray-400">Available</div>
            </div>
            <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="text-3xl font-bold text-green-400">10s</div>
              <div className="text-gray-400">Average Analysis</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How SymptoVox Helps You</h2>
            <p className="text-xl text-gray-400">Revolutionary healthcare accessibility through voice technology</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-blue-500/30">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-20 bg-gradient-to-br from-gray-900 to-blue-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Simple 4-Step Process</h2>
            <p className="text-xl text-gray-400">Get from symptoms to solutions in minutes</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all border border-gray-700">
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-6 py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose SymptoVox?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-800/50 rounded-xl border border-gray-700">
              <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Privacy First</h3>
              <p className="text-gray-400">Your health data is encrypted and never stored permanently</p>
            </div>
            <div className="text-center p-8 bg-gray-800/50 rounded-xl border border-gray-700">
              <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Accessibility Focused</h3>
              <p className="text-gray-400">Designed for users with mobility challenges or busy lifestyles</p>
            </div>
            <div className="text-center p-8 bg-gray-800/50 rounded-xl border border-gray-700">
              <Zap className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Instant Results</h3>
              <p className="text-gray-400">Get AI-powered analysis and recommendations in seconds</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-3xl p-12 text-white border border-blue-700/30">
            <h2 className="text-4xl font-bold mb-4">Ready to Try SymptoVox?</h2>
            <p className="text-xl mb-8 text-gray-300">
              Experience the future of accessible healthcare today. No downloads required.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-600 transition-all flex items-center space-x-2 mx-auto shadow-lg hover:shadow-xl">
              <Mic className="w-5 h-5" />
              <span>Start Voice Analysis</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                <Volume2 className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-white">SymptoVox</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>© 2024 SymptoVox. Making healthcare accessible for everyone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}