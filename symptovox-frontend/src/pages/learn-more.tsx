'use client';
import { useState } from 'react';
import { Volume2, Brain, Shield, Users, Zap, Heart, Stethoscope, Target, Globe, Clock, ArrowLeft, Play, BarChart3, Mic, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import '../app/globals.css';

export default function LearnMore() {
  const [activeTab, setActiveTab] = useState('technology');

  const tabs = [
    { id: 'technology', label: 'Technology', icon: <Brain className="w-5 h-5" /> },
    { id: 'mission', label: 'Our Mission', icon: <Target className="w-5 h-5" /> },
    { id: 'benefits', label: 'Benefits', icon: <Heart className="w-5 h-5" /> },
    { id: 'privacy', label: 'Privacy', icon: <Shield className="w-5 h-5" /> },
  ];

  const technologyFeatures = [
    {
      icon: <Mic className="w-6 h-6" />,
      title: "Voice Recognition",
      description: "Advanced speech-to-text technology that understands natural language",
      details: ["Real-time transcription", "Multi-language support", "Noise cancellation", "Context understanding"]
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Symptom Analysis",
      description: "Machine learning models trained on medical data for accurate symptom assessment",
      details: ["Natural language processing", "Symptom pattern recognition", "Severity scoring", "Differential diagnosis"]
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Voice Tone Analysis",
      description: "Proprietary audio analysis to detect vocal biomarkers of illness",
      details: ["Hoarseness detection", "Vocal strain analysis", "Respiratory patterns", "Fatigue indicators"]
    },
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: "Smart Referral System",
      description: "Intelligent doctor matching based on symptoms and location",
      details: ["Location-based search", "Specialty matching", "Availability checking", "Insurance compatibility"]
    }
  ];

  const missionStats = [
    { number: "2.5B", label: "People without easy healthcare access" },
    { number: "70%", label: "Of doctor visits are for common conditions" },
    { number: "24/7", label: "Healthcare access needed" },
    { number: "95%", label: "Accuracy in common cold detection" }
  ];

  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Time Saving",
      description: "Get instant analysis without waiting for appointments",
      impact: "Saves 2-3 hours per minor health concern"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Accessibility",
      description: "Voice-first design helps users with mobility challenges",
      impact: "Makes healthcare accessible to millions"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Early Detection",
      description: "AI identifies patterns humans might miss",
      impact: "Prevents 30% of condition worsening cases"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Reach",
      description: "Works anywhere with internet connection",
      impact: "Serves remote and underserved communities"
    }
  ];

  const privacyFeatures = [
    {
      title: "Data Encryption",
      description: "All voice data is encrypted in transit and at rest",
      icon: <Shield className="w-5 h-5" />
    },
    {
      title: "Automatic Deletion",
      description: "Voice recordings are automatically deleted after processing",
      icon: <Clock className="w-5 h-5" />
    },
    {
      title: "No Personal Storage",
      description: "We don't store personally identifiable health information",
      icon: <Users className="w-5 h-5" />
    },
    {
      title: "Transparent Processing",
      description: "Clear documentation of how data is used and processed",
      icon: <Brain className="w-5 h-5" />
    }
  ];

  const useCases = [
    {
      scenario: "Busy Professional",
      description: "Quick symptom check during work hours without appointments",
      benefit: "Saves time and maintains productivity"
    },
    {
      scenario: "Elderly User",
      description: "Voice interface for users uncomfortable with typing",
      benefit: "Maintains independence in health management"
    },
    {
      scenario: "Rural Community",
      description: "Healthcare access where medical facilities are distant",
      benefit: "Bridges healthcare accessibility gaps"
    },
    {
      scenario: "Parent with Sick Child",
      description: "Immediate guidance for common childhood illnesses",
      benefit: "Reduces anxiety and provides quick reassurance"
    }
  ];

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
          <Link 
            href="/voice-input"
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg flex items-center space-x-2"
          >
            <Play className="w-4 h-4" />
            <span>Try Demo</span>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Revolutionizing Healthcare with Voice AI
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            SymptoVox combines cutting-edge voice technology with medical AI to make healthcare 
            accessible, immediate, and personalized for everyone, everywhere.
          </p>
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full border transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 border-transparent text-white shadow-lg'
                    : 'border-gray-600 text-gray-400 hover:border-gray-500 hover:text-white'
                }`}
              >
                {tab.icon}
                <span className="font-semibold">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Tab */}
      {activeTab === 'technology' && (
        <section className="px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Advanced Technology Stack</h2>
              <p className="text-gray-400 text-lg">Built with state-of-the-art AI and voice processing technologies</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {technologyFeatures.map((feature, index) => (
                <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500/30 transition-all group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-400 mb-4">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-gray-300 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Technical Architecture */}
            <div className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Technical Architecture</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gray-700/50 rounded-xl">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mic className="w-8 h-8 text-blue-400" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Voice Input</h4>
                  <p className="text-gray-400 text-sm">Secure voice capture and preprocessing</p>
                </div>
                <div className="text-center p-6 bg-gray-700/50 rounded-xl">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-purple-400" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">AI Processing</h4>
                  <p className="text-gray-400 text-sm">Dual analysis of content and vocal characteristics</p>
                </div>
                <div className="text-center p-6 bg-gray-700/50 rounded-xl">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Stethoscope className="w-8 h-8 text-green-400" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Output & Actions</h4>
                  <p className="text-gray-400 text-sm">Personalized recommendations and referrals</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Mission Tab */}
      {activeTab === 'mission' && (
        <section className="px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                To democratize healthcare access through voice technology, making quality medical guidance 
                available to everyone regardless of location, mobility, or technical proficiency.
              </p>
            </div>

            {/* Mission Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {missionStats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700">
                  <div className="text-2xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Vision & Values */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                <Target className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Our Vision</h3>
                <p className="text-gray-400 leading-relaxed">
                  A world where anyone, anywhere can access reliable healthcare guidance instantly 
                  through the most natural interface - their voice. We envision reducing healthcare 
                  disparities and empowering individuals to take control of their health.
                </p>
              </div>
              <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                <Heart className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Core Values</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Accessibility First</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Privacy by Design</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Evidence-Based Solutions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>User-Centric Innovation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Benefits Tab */}
      {activeTab === 'benefits' && (
        <section className="px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Transformative Benefits</h2>
              <p className="text-gray-400 text-lg">How SymptoVox improves healthcare experiences</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-green-500/30 transition-all group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      {benefit.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                      <p className="text-gray-400 mb-3">{benefit.description}</p>
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg px-3 py-2">
                        <p className="text-green-400 text-sm font-medium">{benefit.impact}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Use Cases */}
            <div className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Real-World Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {useCases.map((useCase, index) => (
                  <div key={index} className="bg-gray-700/50 rounded-xl p-6">
                    <h4 className="text-white font-semibold mb-2">{useCase.scenario}</h4>
                    <p className="text-gray-400 text-sm mb-3">{useCase.description}</p>
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg px-3 py-2">
                      <p className="text-blue-400 text-sm font-medium">{useCase.benefit}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Privacy Tab */}
      {activeTab === 'privacy' && (
        <section className="px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Privacy & Security</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Your health data is sensitive. We've built SymptoVox with privacy and security as foundational principles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {privacyFeatures.map((feature, index) => (
                <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-purple-500/30 transition-all">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Data Flow */}
            <div className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Our Privacy Promise</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">No Permanent Voice Storage</h4>
                    <p className="text-gray-400">Voice recordings are processed in real-time and immediately deleted after analysis completion.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Anonymous Analytics</h4>
                    <p className="text-gray-400">We only collect anonymized, aggregated data to improve our AI models.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Transparent Processing</h4>
                    <p className="text-gray-400">Clear documentation of data handling practices and processing workflows.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">User Control</h4>
                    <p className="text-gray-400">You can delete your data at any time through simple user controls.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-3xl p-12 text-white border border-blue-700/30">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience the Future of Healthcare?</h2>
            <p className="text-gray-300 text-lg mb-8">
              Join thousands of users who trust SymptoVox for instant, accessible health guidance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/voice-input"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all flex items-center justify-center space-x-2 shadow-lg"
              >
                <Play className="w-5 h-5" />
                <span>Start Free Demo</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/how-it-works"
                className="border border-gray-600 text-gray-300 px-8 py-4 rounded-full font-semibold hover:bg-gray-800/50 transition-all"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
              <Volume2 className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-white">SymptoVox</span>
          </div>
          <p className="text-gray-500">
            Making healthcare accessible through voice technology • Privacy First • AI-Powered
          </p>
        </div>
      </footer>
    </div>
  );
}