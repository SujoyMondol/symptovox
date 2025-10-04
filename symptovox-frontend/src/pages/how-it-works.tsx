'use client';
import { useState } from 'react';
import { Volume2, Mic, Brain, Heart, Stethoscope, ArrowRight, CheckCircle, Shield, Zap, Users, Clock, ArrowLeft, Play } from 'lucide-react';
import Link from 'next/link';
import '../app/globals.css';    
import { useRouter } from 'next/navigation';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const router = useRouter();

  const handleLearnMore = () => {
    router.push('/learn-more');
  }

  const steps = [
    {
      number: "01",
      icon: <Mic className="w-8 h-8" />,
      title: "Voice Symptom Logging",
      description: "Describe your symptoms naturally using voice commands",
      details: [
        "Speak freely about how you're feeling",
        "No typing required - perfect when you're not feeling well",
        "Works in multiple languages",
        "Real-time transcription as you speak"
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      number: "02",
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Analysis",
      description: "Our advanced AI analyzes both what you say and how you sound",
      details: [
        "Natural language processing for symptom detection",
        "Voice tone analysis for severity assessment",
        "Common cold pattern recognition",
        "Real-time confidence scoring"
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20"
    },
    {
      number: "03",
      icon: <Heart className="w-8 h-8" />,
      title: "Personalized Recommendations",
      description: "Get evidence-based home remedies and care instructions",
      details: [
        "AI-generated home treatment plans",
        "Evidence-based remedy suggestions",
        "Symptom-specific care instructions",
        "Progress tracking guidance"
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20"
    },
    {
      number: "04",
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Smart Escalation",
      description: "Seamless doctor connection when professional care is needed",
      details: [
        "Automatic severity assessment",
        "Nearby doctor recommendations",
        "Appointment availability checking",
        "Medical history sharing options"
      ],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20"
    }
  ];

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Privacy First",
      description: "Your health data is encrypted and never stored permanently"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Availability",
      description: "Get help anytime, anywhere - no waiting rooms needed"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Results",
      description: "AI analysis in seconds, not days"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Accessibility Focused",
      description: "Designed for users with mobility challenges"
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
            How SymptoVox Works
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            From symptoms to solutions in four simple steps. Our AI-powered platform makes healthcare accessible through voice technology.
          </p>
          
          {/* Process Timeline */}
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-1 bg-gray-700 top-20 w-3/4 hidden lg:block">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
                style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
              />
            </div>

            {/* Steps */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`text-center cursor-pointer group transition-all duration-300 ${
                    index === activeStep ? 'scale-105' : 'scale-100'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  {/* Step Number & Icon */}
                  <div className={`relative mx-auto mb-6 transition-all duration-300 ${
                    index === activeStep ? 'scale-110' : 'scale-100'
                  }`}>
                    <div className={`w-20 h-20 rounded-full border-2 flex items-center justify-center mx-auto transition-all duration-300 ${
                      index <= activeStep 
                        ? `bg-gradient-to-r ${step.color} border-transparent text-white shadow-lg`
                        : 'bg-gray-800 border-gray-600 text-gray-400'
                    }`}>
                      {index <= activeStep ? step.icon : step.number}
                    </div>
                    
                    {/* Active Indicator */}
                    {index === activeStep && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>

                  {/* Step Content */}
                  <h3 className={`text-lg font-semibold mb-2 transition-colors ${
                    index <= activeStep ? 'text-white' : 'text-gray-500'
                  }`}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Active Step Details */}
      <section className="px-6 py-12 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <div className={`rounded-2xl border p-8 transition-all duration-500 ${steps[activeStep].borderColor} ${steps[activeStep].bgColor}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Text Content */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${steps[activeStep].color} flex items-center justify-center text-white`}>
                    {steps[activeStep].icon}
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Step {steps[activeStep].number}</span>
                    <h2 className="text-2xl font-bold text-white">{steps[activeStep].title}</h2>
                  </div>
                </div>
                
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {steps[activeStep].description}
                </p>

                <ul className="space-y-3">
                  {steps[activeStep].details.map((detail, index) => (
                    <li key={index} className="flex items-center space-x-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Navigation Buttons */}
                <div className="flex space-x-4 mt-8">
                  <button
                    onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                    disabled={activeStep === 0}
                    className="flex items-center space-x-2 px-6 py-3 border border-gray-600 text-gray-400 rounded-lg hover:border-gray-500 hover:text-white transition-colors disabled:opacity-50"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </button>
                  
                  {activeStep < steps.length - 1 ? (
                    <button
                      onClick={() => setActiveStep(activeStep + 1)}
                      className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all"
                    >
                      <span>Next Step</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <Link 
                      href="/voice-input"
                      className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all"
                    >
                      <Play className="w-4 h-4" />
                      <span>Try It Now</span>
                    </Link>
                  )}
                </div>
              </div>

              {/* Visual Demo */}
              <div className="relative">
                <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                  <div className="space-y-4">
                    {/* Mock Voice Input */}
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        activeStep === 0 ? 'bg-red-500 animate-pulse' : 'bg-gray-600'
                      }`} />
                      <div className="text-gray-400 text-sm">
                        {activeStep === 0 ? 'Listening...' : 'Voice input ready'}
                      </div>
                    </div>

                    {/* Mock Transcript */}
                    <div className="bg-gray-800 rounded-lg p-4 min-h-[100px] border border-gray-700">
                      {activeStep === 0 ? (
                        <div className="space-y-2">
                          <div className="w-3/4 h-4 bg-blue-500/30 rounded animate-pulse" />
                          <div className="w-1/2 h-4 bg-blue-500/20 rounded animate-pulse" />
                        </div>
                      ) : (
                        <p className="text-gray-400 italic">
                          {activeStep === 1 && "Analyzing symptom patterns and voice characteristics..."}
                          {activeStep === 2 && "Generating personalized care recommendations..."}
                          {activeStep === 3 && "Checking nearby doctor availability..."}
                        </p>
                      )}
                    </div>

                    {/* Progress Indicators */}
                    <div className="flex space-x-2">
                      {steps.map((_, index) => (
                        <div
                          key={index}
                          className={`h-1 flex-1 rounded transition-all duration-500 ${
                            index <= activeStep 
                              ? `bg-gradient-to-r ${steps[index].color}`
                              : 'bg-gray-700'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose SymptoVox?</h2>
            <p className="text-gray-400 text-lg">Designed with accessibility and efficiency in mind</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500/30 transition-all group">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-3xl p-12 text-white border border-blue-700/30">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience SymptoVox?</h2>
            <p className="text-gray-300 text-lg mb-8">
              Join thousands of users who have transformed their healthcare experience with voice technology.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/voice-input"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all flex items-center justify-center space-x-2 shadow-lg"
              >
                <Play className="w-5 h-5" />
                <span>Start Free Demo</span>
              </Link>
               <button className="border border-gray-600 text-gray-300 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800/50 transition-all"
              onClick={handleLearnMore}>
                Learn More
            </button>
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
            Making healthcare accessible through voice technology
          </p>
        </div>
      </footer>
    </div>
  );
}