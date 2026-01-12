import React from 'react';
import { Database, MessageSquare, Brain, Search, Zap, ArrowDown } from 'lucide-react';

const FoodOrderingArchitecture = () => {
  return (
    <div className="w-full bg-black p-8">
      <div className="max-w-7xl mx-auto">
        {/* User Layer */}
        <div className="mb-8">
          <div className="bg-white rounded-lg p-6 shadow-2xl border-2 border-gray-300">
            <div className="flex items-center gap-3 mb-3">
              <MessageSquare className="w-8 h-8 text-black" />
              <h2 className="text-2xl font-bold text-black">User Interface Layer</h2>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 border border-gray-300">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-black rounded-full"></div>
                <span className="text-black font-semibold">Streamlit Chat Interface</span>
              </div>
              <p className="text-gray-700 text-sm">Natural language input • Real-time conversation • Order confirmation</p>
            </div>
          </div>
          <div className="flex justify-center my-4">
            <ArrowDown className="w-8 h-8 text-gray-400" />
          </div>
        </div>

        {/* Orchestration Layer */}
        <div className="mb-8">
          <div className="bg-gray-900 rounded-lg p-6 shadow-2xl border-2 border-gray-700">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="w-8 h-8 text-white" />
              <h2 className="text-2xl font-bold text-white">Orchestration Layer</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span className="text-white font-semibold">LangGraph Workflow</span>
                </div>
                <p className="text-gray-300 text-sm">State management • Agent coordination • Conversation flow control</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span className="text-white font-semibold">LangChain Core</span>
                </div>
                <p className="text-gray-300 text-sm">Prompt templates • Chain execution • LLM integration</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center my-4">
            <ArrowDown className="w-8 h-8 text-gray-400" />
          </div>
        </div>

        {/* Agent Layer */}
        <div className="mb-8">
          <div className="bg-white rounded-lg p-6 shadow-2xl border-2 border-gray-300">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="w-8 h-8 text-black" />
              <h2 className="text-2xl font-bold text-black">Multi-Agent System</h2>
            </div>
            
            {/* Supervisor Agent */}
            <div className="bg-gray-100 rounded-lg p-4 mb-4 border border-gray-300">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-4 h-4 bg-black rounded-full"></div>
                <span className="text-black font-bold text-lg">Supervisor Agent</span>
                <span className="ml-auto text-xs bg-black text-white px-2 py-1 rounded">COORDINATOR</span>
              </div>
              <p className="text-gray-700 text-sm mb-3">Understands user intent • Routes requests • Manages conversation state • Coordinates agents</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                {/* Retrieval Agent */}
                <div className="bg-white rounded-lg p-3 border-2 border-gray-400">
                  <div className="flex items-center gap-2 mb-2">
                    <Search className="w-5 h-5 text-black" />
                    <span className="text-black font-semibold text-sm">Retrieval Agent</span>
                  </div>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• Vector search via ChromaDB</li>
                    <li>• Menu item matching</li>
                    <li>• Restaurant filtering</li>
                    <li>• Semantic similarity</li>
                    <li>• Price & dietary preferences</li>
                  </ul>
                </div>

                {/* Generator Agent */}
                <div className="bg-white rounded-lg p-3 border-2 border-gray-400">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare className="w-5 h-5 text-black" />
                    <span className="text-black font-semibold text-sm">Generator Agent</span>
                  </div>
                  <ul className="text-gray-700 text-xs space-y-1">
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
            <ArrowDown className="w-8 h-8 text-gray-400" />
          </div>
        </div>

        {/* Data Layer */}
        <div className="mb-8">
          <div className="bg-gray-900 rounded-lg p-6 shadow-2xl border-2 border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-8 h-8 text-white" />
              <h2 className="text-2xl font-bold text-white">Data & Knowledge Layer</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span className="text-white font-semibold">ChromaDB Vector Store</span>
                </div>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Menu embeddings</li>
                  <li>• Restaurant metadata</li>
                  <li>• Semantic search index</li>
                  <li>• Similarity matching</li>
                </ul>
              </div>

              <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span className="text-white font-semibold">Glovo Data Source</span>
                </div>
                <ul className="text-gray-300 text-sm space-y-1">
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