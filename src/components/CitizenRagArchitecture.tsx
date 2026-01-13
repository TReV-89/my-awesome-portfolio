import React from 'react';
import { Mic, Database, Languages, Brain, BarChart3, ArrowDown, MessageSquare, FileText, Zap } from 'lucide-react';

const CitizenRagArchitecture = () => {
  return (
    <div className="w-full bg-black p-8">
      <div className="max-w-7xl mx-auto">
        {/* Data Collection Layer */}
        <div className="mb-8">
          <div className="bg-white rounded-lg p-6 shadow-2xl border-2 border-gray-300">
            <div className="flex items-center gap-3 mb-3">
              <Mic className="w-8 h-8 text-black" />
              <h2 className="text-2xl font-bold text-black">Data Collection Layer</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-100 rounded-lg p-4 border border-gray-300">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                  <span className="text-black font-semibold">SEMA Feedback Devices</span>
                </div>
                <p className="text-gray-700 text-sm">Voice recordings (15 sec) • Emoji ratings • Multi-location deployment • Real-time upload</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 border border-gray-300">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                  <span className="text-black font-semibold">Citizen Input</span>
                </div>
                <p className="text-gray-700 text-sm">Multilingual feedback • English & Luganda • Health centers • Public institutions</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center my-4">
            <ArrowDown className="w-8 h-8 text-gray-400" />
          </div>
        </div>

        {/* Data Processing Layer */}
        <div className="mb-8">
          <div className="bg-gray-900 rounded-lg p-6 shadow-2xl border-2 border-gray-700">
            <div className="flex items-center gap-3 mb-3">
              <Database className="w-8 h-8 text-white" />
              <h2 className="text-2xl font-bold text-white">Data Processing & Storage Layer</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span className="text-white font-semibold">Audio Storage</span>
                </div>
                <p className="text-gray-300 text-sm">Daily uploads • Audio file management • Metadata tracking</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span className="text-white font-semibold">Data Cleaning</span>
                </div>
                <p className="text-gray-300 text-sm">Quality filtering • Language categorization • Validation</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span className="text-white font-semibold">Database</span>
                </div>
                <p className="text-gray-300 text-sm">PostgreSQL • Feedback records • User analytics</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center my-4">
            <ArrowDown className="w-8 h-8 text-gray-400" />
          </div>
        </div>

        {/* AI Processing Layer */}
        <div className="mb-8">
          <div className="bg-white rounded-lg p-6 shadow-2xl border-2 border-gray-300">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="w-8 h-8 text-black" />
              <h2 className="text-2xl font-bold text-black">AI Processing Layer (Sunbird AI)</h2>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-4 mb-4 border border-gray-300">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-4 h-4 bg-black rounded-full"></div>
                <span className="text-black font-bold text-lg">Speech & Language Pipeline</span>
                <span className="ml-auto text-xs bg-black text-white px-2 py-1 rounded">AI MODELS</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
                {/* Speech-to-Text */}
                <div className="bg-white rounded-lg p-3 border-2 border-gray-400">
                  <div className="flex items-center gap-2 mb-2">
                    <Mic className="w-5 h-5 text-black" />
                    <span className="text-black font-semibold text-sm">Speech-to-Text</span>
                  </div>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• Audio transcription</li>
                    <li>• African languages ASR</li>
                    <li>• English transcription</li>
                    <li>• Whisper-based models</li>
                  </ul>
                </div>

                {/* Translation */}
                <div className="bg-white rounded-lg p-3 border-2 border-gray-400">
                  <div className="flex items-center gap-2 mb-2">
                    <Languages className="w-5 h-5 text-black" />
                    <span className="text-black font-semibold text-sm">Translation</span>
                  </div>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• Luganda to English</li>
                    <li>• Multi-language support</li>
                    <li>• Context preservation</li>
                    <li>• Neural MT models</li>
                  </ul>
                </div>

                {/* Sentiment Analysis */}
                <div className="bg-white rounded-lg p-3 border-2 border-gray-400">
                  <div className="flex items-center gap-2 mb-2">
                    <Brain className="w-5 h-5 text-black" />
                    <span className="text-black font-semibold text-sm">Sentiment Analysis</span>
                  </div>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• Keyword extraction</li>
                    <li>• Sentiment scoring</li>
                    <li>• ML-based classification</li>
                    <li>• Satisfaction metrics</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-4 border border-gray-300">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-black" />
                <span className="text-black font-semibold">RAG System</span>
              </div>
              <p className="text-gray-700 text-sm">Retrieval-Augmented Generation • Document indexing • Contextual search • Knowledge base</p>
            </div>
          </div>
          <div className="flex justify-center my-4">
            <ArrowDown className="w-8 h-8 text-gray-400" />
          </div>
        </div>

        {/* Analytics & Reporting Layer */}
        <div className="mb-8">
          <div className="bg-gray-900 rounded-lg p-6 shadow-2xl border-2 border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 className="w-8 h-8 text-white" />
              <h2 className="text-2xl font-bold text-white">Analytics & Reporting Layer</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span className="text-white font-semibold">Data Analytics</span>
                </div>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Feedback aggregation</li>
                  <li>• Language distribution</li>
                  <li>• Sentiment trends</li>
                  <li>• Location-based insights</li>
                </ul>
              </div>

              <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span className="text-white font-semibold">Report Generation</span>
                </div>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Monthly reports</li>
                  <li>• Stakeholder summaries</li>
                  <li>• Institution-specific data</li>
                  <li>• Actionable insights</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-center my-4">
            <ArrowDown className="w-8 h-8 text-gray-400" />
          </div>
        </div>

        {/* Dashboard & Interface Layer */}
        <div className="mb-8">
          <div className="bg-white rounded-lg p-6 shadow-2xl border-2 border-gray-300">
            <div className="flex items-center gap-3 mb-4">
              <MessageSquare className="w-8 h-8 text-black" />
              <h2 className="text-2xl font-bold text-black">Dashboard & Interface Layer</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-100 rounded-lg p-4 border border-gray-300">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                  <span className="text-black font-semibold">Admin Dashboard</span>
                </div>
                <p className="text-gray-700 text-sm">Feedback management • Analytics views • User admin • Settings</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 border border-gray-300">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                  <span className="text-black font-semibold">Visualizations</span>
                </div>
                <p className="text-gray-700 text-sm">Charts & graphs • Trend analysis • Real-time metrics • Custom reports</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 border border-gray-300">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                  <span className="text-black font-semibold">Stakeholder Portal</span>
                </div>
                <p className="text-gray-700 text-sm">Institution access • Monthly reviews • Performance tracking</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack & Use Cases */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-4 shadow-xl border border-gray-600">
            <h4 className="text-white font-bold mb-2">🔧 Technology Stack</h4>
            <p className="text-gray-300 text-sm">Sunbird AI API • Speech-to-Text • Machine Translation • Sentiment Analysis • PostgreSQL • Redis • Python/Django</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-4 shadow-xl border border-gray-600">
            <h4 className="text-white font-bold mb-2">🏥 Deployment Locations</h4>
            <p className="text-gray-300 text-sm">Kiswa Health Centre • Kisugu Health Centre • Public institutions • Multi-location citizen engagement</p>
          </div>
        </div>

        {/* Key Features */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-4 shadow-xl border border-gray-600">
            <h4 className="text-white font-bold mb-2">🌍 Multilingual Support</h4>
            <p className="text-gray-300 text-sm">English, Luganda, and 32+ African languages via Sunbird AI models</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-4 shadow-xl border border-gray-600">
            <h4 className="text-white font-bold mb-2">📊 Comprehensive Analysis</h4>
            <p className="text-gray-300 text-sm">Qualitative + quantitative feedback with AI-powered insights</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-4 shadow-xl border border-gray-600">
            <h4 className="text-white font-bold mb-2">🎯 Social Impact</h4>
            <p className="text-gray-300 text-sm">Improving public service delivery through citizen voice</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitizenRagArchitecture;