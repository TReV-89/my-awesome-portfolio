import { Database, MessageSquare, Brain, Search, Zap, ArrowDown } from 'lucide-react';

const FoodOrderingArchitecture = () => {
  return (
    <div className="w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8 rounded-lg">
      <div className="max-w-7xl mx-auto">
        {/* User Layer */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 shadow-2xl border-2 border-blue-400">
            <div className="flex items-center gap-3 mb-3">
              <MessageSquare className="w-8 h-8 text-white" />
              <h2 className="text-2xl font-bold text-white">User Interface Layer</h2>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-white font-semibold">Streamlit Chat Interface</span>
              </div>
              <p className="text-blue-100 text-sm">Natural language input • Real-time conversation • Order confirmation</p>
            </div>
          </div>
          <div className="flex justify-center my-4">
            <ArrowDown className="w-8 h-8 text-purple-400 animate-bounce" />
          </div>
        </div>

        {/* Orchestration Layer */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-6 shadow-2xl border-2 border-purple-400">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="w-8 h-8 text-white" />
              <h2 className="text-2xl font-bold text-white">Orchestration Layer</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <span className="text-white font-semibold">LangGraph Workflow</span>
                </div>
                <p className="text-purple-100 text-sm">State management • Agent coordination • Conversation flow control</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <span className="text-white font-semibold">LangChain Core</span>
                </div>
                <p className="text-purple-100 text-sm">Prompt templates • Chain execution • LLM integration</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center my-4">
            <ArrowDown className="w-8 h-8 text-green-400 animate-bounce" />
          </div>
        </div>

        {/* Agent Layer */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg p-6 shadow-2xl border-2 border-green-400">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="w-8 h-8 text-white" />
              <h2 className="text-2xl font-bold text-white">Multi-Agent System</h2>
            </div>
            
            {/* Supervisor Agent */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-4 h-4 bg-red-400 rounded-full"></div>
                <span className="text-white font-bold text-lg">Supervisor Agent</span>
                <span className="ml-auto text-xs bg-red-500 text-white px-2 py-1 rounded">COORDINATOR</span>
              </div>
              <p className="text-green-100 text-sm mb-3">Understands user intent • Routes requests • Manages conversation state • Coordinates agents</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                {/* Retrieval Agent */}
                <div className="bg-green-700/30 rounded-lg p-3 border border-green-400/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Search className="w-5 h-5 text-cyan-300" />
                    <span className="text-white font-semibold text-sm">Retrieval Agent</span>
                  </div>
                  <ul className="text-green-100 text-xs space-y-1">
                    <li>• Vector search via ChromaDB</li>
                    <li>• Menu item matching</li>
                    <li>• Restaurant filtering</li>
                    <li>• Semantic similarity</li>
                    <li>• Price & dietary preferences</li>
                  </ul>
                </div>

                {/* Generator Agent */}
                <div className="bg-green-700/30 rounded-lg p-3 border border-green-400/30">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare className="w-5 h-5 text-yellow-300" />
                    <span className="text-white font-semibold text-sm">Generator Agent</span>
                  </div>
                  <ul className="text-green-100 text-xs space-y-1">
                    <li>• Natural language responses</li>
                    <li>• Context-aware replies</li>
                    <li>• Format recommendations</li>
                    <li>• Order confirmations</li>
                    <li>• Conversational flow</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center my-4">
            <ArrowDown className="w-8 h-8 text-orange-400 animate-bounce" />
          </div>
        </div>

        {/* Data Layer */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-lg p-6 shadow-2xl border-2 border-orange-400">
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-8 h-8 text-white" />
              <h2 className="text-2xl font-bold text-white">Data & Knowledge Layer</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  <span className="text-white font-semibold">ChromaDB Vector Store</span>
                </div>
                <ul className="text-orange-100 text-sm space-y-1">
                  <li>• Menu embeddings</li>
                  <li>• Restaurant metadata</li>
                  <li>• Semantic search index</li>
                  <li>• Similarity matching</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  <span className="text-white font-semibold">Glovo Data Source</span>
                </div>
                <ul className="text-orange-100 text-sm space-y-1">
                  <li>• Restaurant listings</li>
                  <li>• Menu items & prices</li>
                  <li>• Promotions & deals</li>
                  <li>• Dietary information</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodOrderingArchitecture;
