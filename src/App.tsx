import React, { useState } from 'react';
import { ChevronDown, BookOpen, Award, Target, Lightbulb, Users, Rocket, ShoppingCart, Moon, Sun, Play, Star, Zap, TrendingUp, Sparkles } from 'lucide-react';

function App() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('full-stack');
  const [selectedLiveCategory, setSelectedLiveCategory] = useState('dotnet-platform');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [cartCount] = useState(0);

  const liveTrainingCategories = {
    'dotnet-platform': {
      name: '.NET Platform',
      icon: <Target className="w-5 h-5" />,
      programs: {
        beginners: [
          { name: 'Full-Stack .NET Core Developer', duration: '6 Months', badge: 'Most Popular', icon: '🔷' },
          { name: 'Advanced Full-Stack .NET Core', duration: '5 Months', badge: 'Trending', icon: '⚡' }
        ],
        experienced: [
          { name: 'Full-Stack .NET Core Developer', duration: '6 Months', badge: 'Hot', icon: '🔷' }
        ],
        professionals: [
          { name: '.NET Solution Architect', duration: '4 Months', badge: 'Premium', icon: '🏛️' }
        ]
      }
    },
    'java-platform': {
      name: 'Java Platform',
      icon: <Lightbulb className="w-5 h-5" />,
      programs: {
        beginners: [
          { name: 'Advanced Full-Stack Java Developer', duration: '5 Months', badge: 'Popular', icon: '☕' }
        ],
        experienced: [
          { name: 'Advanced Full-Stack Java Developer', duration: '5 Months', badge: 'Trending', icon: '☕' }
        ],
        professionals: [
          { name: 'Java Solution Architect', duration: '4 Months', badge: 'Elite', icon: '🏛️' }
        ]
      }
    },
    'cloud-devops': {
      name: 'Cloud & DevOps',
      icon: <Sparkles className="w-5 h-5" />,
      programs: {
        beginners: [
          { name: 'Azure AI & Gen AI Engineer', duration: '6 Months', badge: 'Hot', icon: '☁️' }
        ],
        experienced: [
          { name: 'Azure AI & Gen AI Engineer', duration: '6 Months', badge: 'Most Popular', icon: '☁️' }
        ],
        professionals: [
          { name: 'Cloud & DevOps Mastery Program', duration: '5 Months', badge: 'Premium', icon: '⚙️' }
        ]
      }
    },
    'data-science-ai': {
      name: 'Data Science & AI',
      icon: <TrendingUp className="w-5 h-5" />,
      programs: {
        beginners: [
          { name: 'Data Science with Python', duration: '4 Months', badge: 'New', icon: '🐍' }
        ],
        experienced: [],
        professionals: [
          { name: 'Applied Machine Learning & AI', duration: '6 Months', badge: 'Premium', icon: '🤖' }
        ]
      }
    },
    'js-frontend': {
      name: 'JS & Front-End',
      icon: <Zap className="w-5 h-5" />,
      programs: {
        beginners: [
          { name: 'Modern Front-End Developer with React & Angular', duration: '4 Months', badge: 'Trending', icon: '⚛️' }
        ],
        experienced: [
          { name: 'Modern Front-End Developer with React & Angular', duration: '4 Months', badge: 'Popular', icon: '⚛️' }
        ],
        professionals: [
          { name: 'Advanced Full-Stack JavaScript Developer', duration: '5 Months', badge: 'Hot', icon: '🟨' }
        ]
      }
    },
    'career-leadership': {
      name: 'Career & Leadership',
      icon: <Users className="w-5 h-5" />,
      programs: {
        beginners: [],
        experienced: [
          { name: 'Tech Leadership Essentials', duration: '3 Months', badge: 'New', icon: '👑' }
        ],
        professionals: [
          { name: 'Architecting Enterprise Solutions', duration: '4 Months', badge: 'Elite', icon: '🏗️' }
        ]
      }
    }
  };

  const trainingCategories = {
    'full-stack': {
      name: 'Full-Stack Development',
      icon: <BookOpen className="w-5 h-5" />,
      programs: {
        beginners: [
          { name: 'Full-Stack .NET Core Developer', duration: '6 Months', badge: 'Most Popular', icon: '🔷' },
          { name: 'Advanced Full-Stack Java Developer', duration: '5 Months', badge: 'Trending', icon: '☕' },
          { name: 'MEAN Stack Developer', duration: '4 Months', badge: null, icon: '🟢' }
        ],
        experienced: [
          { name: 'Senior Full-Stack Developer', duration: '4 Months', badge: 'Hot', icon: '🚀' },
          { name: 'Full-Stack Architect', duration: '6 Months', badge: 'Premium', icon: '🏗️' }
        ],
        professionals: [
          { name: 'Full-Stack Tech Lead', duration: '3 Months', badge: 'New', icon: '👑' }
        ]
      }
    },
    'dotnet': {
      name: '.NET Platform',
      icon: <Target className="w-5 h-5" />,
      programs: {
        beginners: [
          { name: '.NET Core Bootcamp', duration: '4 Months', badge: 'Popular', icon: '🔷' },
          { name: 'C# Developer Program', duration: '3 Months', badge: null, icon: '💎' }
        ],
        experienced: [
          { name: 'Advanced .NET Developer', duration: '5 Months', badge: 'Trending', icon: '⚡' }
        ],
        professionals: [
          { name: '.NET Solution Architect', duration: '6 Months', badge: 'Premium', icon: '🏛️' }
        ]
      }
    },
    'cloud': {
      name: 'Cloud & DevOps',
      icon: <Lightbulb className="w-5 h-5" />,
      programs: {
        beginners: [
          { name: 'AWS Cloud Fundamentals', duration: '3 Months', badge: 'New', icon: '☁️' },
          { name: 'Azure DevOps Engineer', duration: '4 Months', badge: 'Hot', icon: '🔵' }
        ],
        experienced: [
          { name: 'Cloud Solutions Architect', duration: '6 Months', badge: 'Premium', icon: '🏗️' },
          { name: 'Kubernetes Expert', duration: '4 Months', badge: 'Trending', icon: '⚙️' }
        ],
        professionals: [
          { name: 'Cloud Engineering Manager', duration: '5 Months', badge: 'Elite', icon: '👨‍💼' }
        ]
      }
    },
    'ai': {
      name: 'AI & Gen AI',
      icon: <Sparkles className="w-5 h-5" />,
      programs: {
        beginners: [
          { name: 'Machine Learning Fundamentals', duration: '4 Months', badge: 'Hot', icon: '🤖' },
          { name: 'Python for AI', duration: '3 Months', badge: null, icon: '🐍' }
        ],
        experienced: [
          { name: 'Azure AI & Gen AI Engineer', duration: '6 Months', badge: 'Most Popular', icon: '🧠' },
          { name: 'Deep Learning Specialist', duration: '5 Months', badge: 'Premium', icon: '🔬' }
        ],
        professionals: [
          { name: 'AI Solutions Architect', duration: '6 Months', badge: 'Elite', icon: '🏛️' }
        ]
      }
    },
    'career': {
      name: 'Career & Leadership',
      icon: <Users className="w-5 h-5" />,
      programs: {
        beginners: [
          { name: 'Tech Career Starter', duration: '2 Months', badge: 'New', icon: '🚀' }
        ],
        experienced: [
          { name: 'Senior Developer Track', duration: '4 Months', badge: 'Popular', icon: '⭐' },
          { name: 'Technical Leadership', duration: '3 Months', badge: 'Trending', icon: '👑' }
        ],
        professionals: [
          { name: 'Engineering Manager Program', duration: '5 Months', badge: 'Premium', icon: '👨‍💼' },
          { name: 'CTO Leadership Track', duration: '6 Months', badge: 'Elite', icon: '🎯' }
        ]
      }
    }
  };

  const getBadgeColor = (badge: string | null) => {
    switch (badge) {
      case 'Most Popular': return 'bg-gradient-to-r from-red-500 to-pink-500';
      case 'Trending': return 'bg-gradient-to-r from-green-500 to-emerald-500';
      case 'Hot': return 'bg-gradient-to-r from-orange-500 to-red-500';
      case 'New': return 'bg-gradient-to-r from-blue-500 to-cyan-500';
      case 'Premium': return 'bg-gradient-to-r from-purple-500 to-indigo-500';
      case 'Elite': return 'bg-gradient-to-r from-yellow-500 to-orange-500';
      case 'Popular': return 'bg-gradient-to-r from-indigo-500 to-purple-500';
      default: return '';
    }
  };

  const renderJobOrientedMenu = () => (
    <div className="absolute top-full left-0 w-screen max-w-6xl bg-white border border-gray-200/80 rounded-2xl shadow-2xl shadow-gray-900/20 backdrop-blur-xl z-50 overflow-hidden">
      <div className="flex min-h-[500px]">
        {/* Left Panel - Categories */}
        <div className="w-80 bg-gray-50/80 border-r border-gray-200/60 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Training Categories</h3>
          <div className="space-y-2">
            {Object.entries(trainingCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`w-full flex items-center space-x-3 p-3 rounded-xl text-left transition-all duration-200 ${
                  selectedCategory === key
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                    : 'hover:bg-white hover:shadow-md text-gray-700'
                }`}
              >
                <div className={`p-2 rounded-lg ${selectedCategory === key ? 'bg-white/20' : 'bg-gray-100'}`}>
                  {category.icon}
                </div>
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Panel - Programs */}
        <div className="flex-1 p-6">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {trainingCategories[selectedCategory as keyof typeof trainingCategories].name}
            </h3>
            <p className="text-gray-600">Choose your career level to see relevant programs</p>
          </div>

          <div className="space-y-6">
            {/* For Beginners */}
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <h4 className="font-semibold text-gray-800">For Beginners</h4>
                <span className="text-sm text-gray-500">
                  ({trainingCategories[selectedCategory as keyof typeof trainingCategories].programs.beginners.length} programs)
                </span>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {trainingCategories[selectedCategory as keyof typeof trainingCategories].programs.beginners.map((program, index) => (
                  <div key={index} className="group flex items-center justify-between p-4 bg-gray-50 hover:bg-white rounded-xl border border-gray-200/60 hover:border-blue-200 hover:shadow-md transition-all duration-200 cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{program.icon}</span>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h5 className="font-medium text-gray-800 group-hover:text-blue-600">{program.name}</h5>
                          {program.badge && (
                            <span className={`px-2 py-1 text-xs font-medium text-white rounded-full ${getBadgeColor(program.badge)}`}>
                              {program.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-500">{program.duration}</p>
                      </div>
                    </div>
                    <Play className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                  </div>
                ))}
              </div>
            </div>

            {/* For Experienced */}
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <h4 className="font-semibold text-gray-800">For Experienced</h4>
                <span className="text-sm text-gray-500">
                  ({trainingCategories[selectedCategory as keyof typeof trainingCategories].programs.experienced.length} programs)
                </span>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {trainingCategories[selectedCategory as keyof typeof trainingCategories].programs.experienced.map((program, index) => (
                  <div key={index} className="group flex items-center justify-between p-4 bg-gray-50 hover:bg-white rounded-xl border border-gray-200/60 hover:border-blue-200 hover:shadow-md transition-all duration-200 cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{program.icon}</span>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h5 className="font-medium text-gray-800 group-hover:text-blue-600">{program.name}</h5>
                          {program.badge && (
                            <span className={`px-2 py-1 text-xs font-medium text-white rounded-full ${getBadgeColor(program.badge)}`}>
                              {program.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-500">{program.duration}</p>
                      </div>
                    </div>
                    <Play className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                  </div>
                ))}
              </div>
            </div>

            {/* For Working Professionals */}
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <h4 className="font-semibold text-gray-800">For Working Professionals</h4>
                <span className="text-sm text-gray-500">
                  ({trainingCategories[selectedCategory as keyof typeof trainingCategories].programs.professionals.length} programs)
                </span>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {trainingCategories[selectedCategory as keyof typeof trainingCategories].programs.professionals.map((program, index) => (
                  <div key={index} className="group flex items-center justify-between p-4 bg-gray-50 hover:bg-white rounded-xl border border-gray-200/60 hover:border-blue-200 hover:shadow-md transition-all duration-200 cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{program.icon}</span>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h5 className="font-medium text-gray-800 group-hover:text-blue-600">{program.name}</h5>
                          {program.badge && (
                            <span className={`px-2 py-1 text-xs font-medium text-white rounded-full ${getBadgeColor(program.badge)}`}>
                              {program.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-500">{program.duration}</p>
                      </div>
                    </div>
                    <Play className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Ready to Transform Your Career?</h4>
                  <p className="text-sm text-gray-600">Join 50,000+ developers who've advanced with us</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors">
                  View All Programs
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-xl hover:shadow-lg transition-all duration-200">
                  Start Learning
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderLiveTrainingMenu = () => (
    <div className="absolute top-full left-0 w-screen max-w-6xl bg-white border border-gray-200/80 rounded-2xl shadow-2xl shadow-gray-900/20 backdrop-blur-xl z-50 overflow-hidden">
      <div className="flex min-h-[500px]">
        {/* Left Panel - Categories */}
        <div className="w-80 bg-gray-50/80 border-r border-gray-200/60 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Live Training Categories</h3>
          <div className="space-y-2">
            {Object.entries(liveTrainingCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setSelectedLiveCategory(key)}
                className={`w-full flex items-center space-x-3 p-3 rounded-xl text-left transition-all duration-200 ${
                  selectedLiveCategory === key
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                    : 'hover:bg-white hover:shadow-md text-gray-700'
                }`}
              >
                <div className={`p-2 rounded-lg ${selectedLiveCategory === key ? 'bg-white/20' : 'bg-gray-100'}`}>
                  {category.icon}
                </div>
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Panel - Programs */}
        <div className="flex-1 p-6">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {liveTrainingCategories[selectedLiveCategory as keyof typeof liveTrainingCategories].name}
            </h3>
            <p className="text-gray-600">Live sessions with industry experts - choose your level</p>
          </div>

          <div className="space-y-6">
            {/* For Beginners */}
            {liveTrainingCategories[selectedLiveCategory as keyof typeof liveTrainingCategories].programs.beginners.length > 0 && (
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <h4 className="font-semibold text-gray-800">For Beginners</h4>
                  <span className="text-sm text-gray-500">
                    ({liveTrainingCategories[selectedLiveCategory as keyof typeof liveTrainingCategories].programs.beginners.length} programs)
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {liveTrainingCategories[selectedLiveCategory as keyof typeof liveTrainingCategories].programs.beginners.map((program, index) => (
                    <div key={index} className="group flex items-center justify-between p-4 bg-gray-50 hover:bg-white rounded-xl border border-gray-200/60 hover:border-cyan-200 hover:shadow-md transition-all duration-200 cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{program.icon}</span>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h5 className="font-medium text-gray-800 group-hover:text-cyan-600">{program.name}</h5>
                            {program.badge && (
                              <span className={`px-2 py-1 text-xs font-medium text-white rounded-full ${getBadgeColor(program.badge)}`}>
                                {program.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-500">{program.duration}</p>
                        </div>
                      </div>
                      <Play className="w-5 h-5 text-gray-400 group-hover:text-cyan-500 transition-colors" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* For Experienced */}
            {liveTrainingCategories[selectedLiveCategory as keyof typeof liveTrainingCategories].programs.experienced.length > 0 && (
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <h4 className="font-semibold text-gray-800">For Experienced</h4>
                  <span className="text-sm text-gray-500">
                    ({liveTrainingCategories[selectedLiveCategory as keyof typeof liveTrainingCategories].programs.experienced.length} programs)
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {liveTrainingCategories[selectedLiveCategory as keyof typeof liveTrainingCategories].programs.experienced.map((program, index) => (
                    <div key={index} className="group flex items-center justify-between p-4 bg-gray-50 hover:bg-white rounded-xl border border-gray-200/60 hover:border-cyan-200 hover:shadow-md transition-all duration-200 cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{program.icon}</span>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h5 className="font-medium text-gray-800 group-hover:text-cyan-600">{program.name}</h5>
                            {program.badge && (
                              <span className={`px-2 py-1 text-xs font-medium text-white rounded-full ${getBadgeColor(program.badge)}`}>
                                {program.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-500">{program.duration}</p>
                        </div>
                      </div>
                      <Play className="w-5 h-5 text-gray-400 group-hover:text-cyan-500 transition-colors" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* For Working Professionals */}
            {liveTrainingCategories[selectedLiveCategory as keyof typeof liveTrainingCategories].programs.professionals.length > 0 && (
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <h4 className="font-semibold text-gray-800">For Working Professionals</h4>
                  <span className="text-sm text-gray-500">
                    ({liveTrainingCategories[selectedLiveCategory as keyof typeof liveTrainingCategories].programs.professionals.length} programs)
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {liveTrainingCategories[selectedLiveCategory as keyof typeof liveTrainingCategories].programs.professionals.map((program, index) => (
                    <div key={index} className="group flex items-center justify-between p-4 bg-gray-50 hover:bg-white rounded-xl border border-gray-200/60 hover:border-cyan-200 hover:shadow-md transition-all duration-200 cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{program.icon}</span>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h5 className="font-medium text-gray-800 group-hover:text-cyan-600">{program.name}</h5>
                            {program.badge && (
                              <span className={`px-2 py-1 text-xs font-medium text-white rounded-full ${getBadgeColor(program.badge)}`}>
                                {program.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-500">{program.duration}</p>
                        </div>
                      </div>
                      <Play className="w-5 h-5 text-gray-400 group-hover:text-cyan-500 transition-colors" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* CTA Section */}
          <div className="mt-8 p-6 bg-gradient-to-r from-cyan-50 to-purple-50 rounded-xl border border-cyan-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Ready to Join Live Sessions?</h4>
                  <p className="text-sm text-gray-600">Learn with industry experts in real-time</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button className="text-cyan-600 hover:text-cyan-700 font-medium text-sm transition-colors">
                  View All Live Training
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-xl hover:shadow-lg transition-all duration-200">
                  Join Live Session
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="relative z-40 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center mr-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">ScholarHat</h1>
                  <p className="text-xs text-gray-300">TECH ACADEMY</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-3">
              {/* Live Training */}
              <button 
                onClick={() => setActiveMenu(activeMenu === 'live-training' ? null : 'live-training')}
                className="relative w-32 h-12 px-4 py-2 text-xs font-medium text-gray-300 hover:text-white bg-white/5 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 border border-white/10 hover:border-white/30 rounded-xl transition-all duration-300 flex items-center justify-center group"
              >
                <span>Live Training</span>
                <ChevronDown className="w-3 h-3 ml-1" />
              </button>
              {activeMenu === 'live-training' && renderLiveTrainingMenu()}

              {/* Job Oriented Training */}
              <div className="relative">
                <button
                  onClick={() => setActiveMenu(activeMenu === 'job-training' ? null : 'job-training')}
                  className="relative w-32 h-12 px-4 py-2 text-xs font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 border border-blue-400/50 rounded-xl transition-all duration-300 flex items-center justify-center group shadow-lg"
                >
                  <span>Job Oriented Training</span>
                  <ChevronDown className="w-3 h-3 ml-1" />
                </button>
                {activeMenu === 'job-training' && renderJobOrientedMenu()}
              </div>

              {/* Free Resources */}
              <button 
                onClick={() => setActiveMenu(activeMenu === 'free-resources' ? null : 'free-resources')}
                className="relative w-32 h-12 px-4 py-2 text-xs font-medium text-gray-300 hover:text-white bg-white/5 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 border border-white/10 hover:border-white/30 rounded-xl transition-all duration-300 flex items-center justify-center group"
              >
                <span>Free Resources</span>
                <ChevronDown className="w-3 h-3 ml-1" />
              </button>

              {/* Practice */}
              <button 
                onClick={() => setActiveMenu(activeMenu === 'practice' ? null : 'practice')}
                className="relative w-32 h-12 px-4 py-2 text-xs font-medium text-gray-300 hover:text-white bg-white/5 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 border border-white/10 hover:border-white/30 rounded-xl transition-all duration-300 flex items-center justify-center group"
              >
                <span>Practice</span>
                <ChevronDown className="w-3 h-3 ml-1" />
              </button>

              {/* Explore */}
              <button 
                onClick={() => setActiveMenu(activeMenu === 'explore' ? null : 'explore')}
                className="relative w-32 h-12 px-4 py-2 text-xs font-medium text-gray-300 hover:text-white bg-white/5 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 border border-white/10 hover:border-white/30 rounded-xl transition-all duration-300 flex items-center justify-center group"
              >
                <span>Explore</span>
                <ChevronDown className="w-3 h-3 ml-1" />
              </button>

              {/* Live Training Schedule */}
              <button 
                onClick={() => setActiveMenu(activeMenu === 'schedule' ? null : 'schedule')}
                className="relative w-32 h-12 px-4 py-2 text-xs font-medium text-gray-300 hover:text-white bg-white/5 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 border border-white/10 hover:border-white/30 rounded-xl transition-all duration-300 flex items-center justify-center group"
              >
                <span>Live Training Schedule</span>
                <ChevronDown className="w-3 h-3 ml-1" />
              </button>
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2">
              {/* Shopping Cart */}
              <button className="relative w-12 h-12 flex items-center justify-center text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 rounded-xl transition-all duration-300">
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Login/SignUp */}
              <button className="w-32 h-12 px-4 py-2 text-xs font-medium text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 border border-blue-400/50 rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg">
                Login/SignUp
              </button>

              {/* Dark Mode Toggle */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="w-12 h-12 flex items-center justify-center text-gray-300 hover:text-white bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-400/50 rounded-xl transition-all duration-300"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex items-center justify-center min-h-[calc(100vh-4rem)] px-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Master the Future of Tech
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Accelerate your career with cutting-edge training in AI, Cloud, Full-Stack Development, and more. Join the next generation of tech leaders.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Start Your Journey 🚀
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </button>
          </div>
        </div>
      </main>

      {/* Click outside to close menu */}
      {activeMenu && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setActiveMenu(null)}
        />
      )}
    </div>
  );
}

export default App;