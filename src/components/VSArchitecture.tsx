import React from 'react';
import { FileText, Brain, Search, Users, BarChart3, Zap, ArrowDown, Shield, TrendingUp, MessageSquare, Database, Globe } from 'lucide-react';

const VSArchitecture = () => {
  return (
    <div className="w-full bg-black p-8">
      <div className="max-w-7xl mx-auto">
        {/* Input Layer */}
        <div className="mb-8">
          <div className="bg-white rounded-lg p-6 shadow-2xl border-2 border-gray-300">
            <div className="flex items-center gap-3 mb-3">
              <FileText className="w-8 h-8 text-black" />
              <h2 className="text-2xl font-bold text-black">Input Layer</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-100 rounded-lg p-4 border border-gray-300">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                  <span className="text-black font-semibold">Pitch Submissions</span>
                </div>
                <p className="text-gray-700 text-sm">Founder idea descriptions • Short pitches • Structured input forms</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 border border-gray-300">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                  <span className="text-black font-semibold">Document Attachments</span>
                </div>
                <p className="text-gray-700 text-sm">PDF • DOC • CSV parsing folded into agent context</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 border border-gray-300">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                  <span className="text-black font-semibold">Web Research Context</span>
                </div>
                <p className="text-gray-700 text-sm">Live search enrichment • Competitor data • Market signals</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center my-4">
            <ArrowDown className="w-8 h-8 text-gray-400" />
          </div>
        </div>

        {/* Quick Score Engine */}
        <div className="mb-8">
          <div className="bg-gray-900 rounded-lg p-6 shadow-2xl border-2 border-gray-700">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="w-8 h-8 text-white" />
              <h2 className="text-2xl font-bold text-white">Quick Score Engine</h2>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 border border-gray-600 mb-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-4 h-4 bg-white rounded-full"></div>
                <span className="text-white font-bold text-lg">LLM Scoring Engine</span>
                <span className="ml-auto text-xs bg-white text-black px-2 py-1 rounded">&lt; 30 SECONDS</span>
              </div>
              <p className="text-gray-300 text-sm mb-3">Calibrated scoring framework evaluating problem clarity, market fit, traction, founder fit, and strategic alignment</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-gray-700 rounded-lg p-3 border border-gray-500">
                  <span className="text-white font-semibold text-sm">Verdict Output</span>
                  <p className="text-gray-300 text-xs mt-1">Proceed / Uncertain / Archive classification</p>
                </div>
                <div className="bg-gray-700 rounded-lg p-3 border border-gray-500">
                  <span className="text-white font-semibold text-sm">Structured Analysis</span>
                  <p className="text-gray-300 text-xs mt-1">Strengths • Weaknesses • Red flags • Upside</p>
                </div>
                <div className="bg-gray-700 rounded-lg p-3 border border-gray-500">
                  <span className="text-white font-semibold text-sm">Contrarian Lens</span>
                  <p className="text-gray-300 text-xs mt-1">Second-opinion take on hidden risks and opportunities</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center my-4">
            <ArrowDown className="w-8 h-8 text-gray-400" />
          </div>
        </div>

        {/* Full Validation Pipeline */}
        <div className="mb-8">
          <div className="bg-white rounded-lg p-6 shadow-2xl border-2 border-gray-300">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="w-8 h-8 text-black" />
              <h2 className="text-2xl font-bold text-black">Full Validation Pipeline (Multi-Agent)</h2>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 mb-4 border border-gray-300">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-4 h-4 bg-black rounded-full"></div>
                <span className="text-black font-bold text-lg">Six Specialist Agents</span>
                <span className="ml-auto text-xs bg-black text-white px-2 py-1 rounded">AUDITABLE</span>
              </div>
              <p className="text-gray-700 text-sm mb-3">Each agent receives minimal, high-signal context to control cost and improve focus. All outputs persisted per case.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-white rounded-lg p-3 border-2 border-gray-400">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-5 h-5 text-black" />
                    <span className="text-black font-semibold text-sm">Problem Validator</span>
                  </div>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• Urgency & pain intensity</li>
                    <li>• Regulatory tailwinds</li>
                    <li>• "Why now" analysis</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-3 border-2 border-gray-400">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-black" />
                    <span className="text-black font-semibold text-sm">Customer Agent</span>
                  </div>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• ICP definition</li>
                    <li>• Willingness-to-pay signals</li>
                    <li>• Customer congregation points</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-3 border-2 border-gray-400">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="w-5 h-5 text-black" />
                    <span className="text-black font-semibold text-sm">Market Sizer</span>
                  </div>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• Bottom-up TAM estimates</li>
                    <li>• First-principles sizing</li>
                    <li>• Segment breakdown</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-3 border-2 border-gray-400">
                  <div className="flex items-center gap-2 mb-2">
                    <Search className="w-5 h-5 text-black" />
                    <span className="text-black font-semibold text-sm">Competitive Agent</span>
                  </div>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• Live web search mapping</li>
                    <li>• White-space identification</li>
                    <li>• Registry & data enrichment</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-3 border-2 border-gray-400">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-black" />
                    <span className="text-black font-semibold text-sm">Business Model Agent</span>
                  </div>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• Unit economics analysis</li>
                    <li>• Benchmark comparisons</li>
                    <li>• Exit pathway evaluation</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-3 border-2 border-gray-400">
                  <div className="flex items-center gap-2 mb-2">
                    <Globe className="w-5 h-5 text-black" />
                    <span className="text-black font-semibold text-sm">Synthesis Agent</span>
                  </div>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• Unified scorecard</li>
                    <li>• Contrarian second opinion</li>
                    <li>• Final recommendation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center my-4">
            <ArrowDown className="w-8 h-8 text-gray-400" />
          </div>
        </div>

        {/* Predictive ML Layer */}
        <div className="mb-8">
          <div className="bg-gray-900 rounded-lg p-6 shadow-2xl border-2 border-gray-700">
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="w-8 h-8 text-white" />
              <h2 className="text-2xl font-bold text-white">Predictive ML Layer</h2>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 border border-gray-600 mb-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-4 h-4 bg-white rounded-full"></div>
                <span className="text-white font-bold text-lg">XGBoost Success Model</span>
                <span className="ml-auto text-xs bg-white text-black px-2 py-1 rounded">DEPLOYABLE PIPELINE</span>
              </div>
              <p className="text-gray-300 text-sm mb-3">Trained on historical startup outcome data to estimate probability distributions over fail / operating / success given funding, industry, and stage characteristics.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-gray-700 rounded-lg p-3 border border-gray-500">
                  <span className="text-white font-semibold text-sm">Preprocessing</span>
                  <p className="text-gray-300 text-xs mt-1">Merged public datasets • Feature engineering • Multi-label industry encoding • 3-class outcome labels</p>
                </div>
                <div className="bg-gray-700 rounded-lg p-3 border border-gray-500">
                  <span className="text-white font-semibold text-sm">Inference</span>
                  <p className="text-gray-300 text-xs mt-1">Unified scikit-learn pipeline • Preprocessing + truncated booster • Zero training/deployment drift</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center my-4">
            <ArrowDown className="w-8 h-8 text-gray-400" />
          </div>
        </div>

        {/* Output & Delivery Layer */}
        <div className="mb-8">
          <div className="bg-white rounded-lg p-6 shadow-2xl border-2 border-gray-300">
            <div className="flex items-center gap-3 mb-4">
              <MessageSquare className="w-8 h-8 text-black" />
              <h2 className="text-2xl font-bold text-black">Output & Delivery Layer</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-100 rounded-lg p-4 border border-gray-300">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                  <span className="text-black font-semibold">Scorecards & Reports</span>
                </div>
                <p className="text-gray-700 text-sm">Structured verdicts • Activity history per case • One-pager generation for IC prep</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 border border-gray-300">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                  <span className="text-black font-semibold">Case Management</span>
                </div>
                <p className="text-gray-700 text-sm">Pipeline tracking • Document attachments • Queryable conversation memory</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 border border-gray-300">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                  <span className="text-black font-semibold">Founder Funnel</span>
                </div>
                <p className="text-gray-700 text-sm">Public submission portal • Instant scoring • Investor prep questions • Qualified lead routing</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-4 shadow-xl border border-gray-600">
            <h4 className="text-white font-bold mb-2">Frontend & UI</h4>
            <p className="text-gray-300 text-sm">React • TypeScript • Tailwind CSS • Framer Motion</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-4 shadow-xl border border-gray-600">
            <h4 className="text-white font-bold mb-2">Backend & Infra</h4>
            <p className="text-gray-300 text-sm">Firebase • Firestore • Auth • Cloud Storage</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-4 shadow-xl border border-gray-600">
            <h4 className="text-white font-bold mb-2">AI & ML</h4>
            <p className="text-gray-300 text-sm">LangChain • Multi-provider LLMs • Tavily search • XGBoost • scikit-learn</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VSArchitecture;
