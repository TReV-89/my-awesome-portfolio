import React from 'react';
import { Database, TrendingUp, Cpu, Zap, Calendar, Battery, ArrowDown, Activity } from 'lucide-react';

const EBSchedulerArchitecture = () => {
  return (
    <div className="w-full bg-black p-8">
      <div className="max-w-7xl mx-auto">
        {/* Data Collection Layer */}
        <div className="mb-8">
          <div className="bg-white rounded-lg p-6 shadow-2xl border-2 border-gray-300">
            <div className="flex items-center gap-3 mb-3">
              <Database className="w-8 h-8 text-black" />
              <h2 className="text-2xl font-bold text-black">Data Collection Layer</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-100 rounded-lg p-4 border border-gray-300">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                  <span className="text-black font-semibold">Trip Data</span>
                </div>
                <p className="text-gray-700 text-sm">Distance • Passenger count • Start/End times • Route info</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 border border-gray-300">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                  <span className="text-black font-semibold">Environmental Data</span>
                </div>
                <p className="text-gray-700 text-sm">Temperature • Traffic conditions • Terrain type (Hilly/Flat)</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 border border-gray-300">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                  <span className="text-black font-semibold">Vehicle Data</span>
                </div>
                <p className="text-gray-700 text-sm">Battery SOC • Energy consumption • Average speed • Historical trips</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center my-4">
            <ArrowDown className="w-8 h-8 text-gray-400" />
          </div>
        </div>

        {/* ML Prediction Layer */}
        <div className="mb-8">
          <div className="bg-gray-900 rounded-lg p-6 shadow-2xl border-2 border-gray-700">
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="w-8 h-8 text-white" />
              <h2 className="text-2xl font-bold text-white">ML Energy Prediction Layer</h2>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 border border-gray-600 mb-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-4 h-4 bg-white rounded-full"></div>
                <span className="text-white font-bold text-lg">EV Energy Predictor</span>
                <span className="ml-auto text-xs bg-white text-black px-2 py-1 rounded">ML MODELS</span>
              </div>
              <p className="text-gray-300 text-sm mb-3">Predicts energy consumption (kWh) for trips based on variable conditions</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
                <div className="bg-gray-700 rounded-lg p-3 border border-gray-500">
                  <div className="flex items-center gap-2 mb-2">
                    <Cpu className="w-5 h-5 text-white" />
                    <span className="text-white font-semibold text-sm">Gradient Boosting</span>
                  </div>
                  <ul className="text-gray-300 text-xs space-y-1">
                    <li>• High accuracy</li>
                    <li>• Feature importance</li>
                    <li>• Handles non-linearity</li>
                  </ul>
                </div>

                <div className="bg-gray-700 rounded-lg p-3 border border-gray-500">
                  <div className="flex items-center gap-2 mb-2">
                    <Cpu className="w-5 h-5 text-white" />
                    <span className="text-white font-semibold text-sm">Random Forest</span>
                  </div>
                  <ul className="text-gray-300 text-xs space-y-1">
                    <li>• Ensemble learning</li>
                    <li>• Robust predictions</li>
                    <li>• Outlier handling</li>
                  </ul>
                </div>

                <div className="bg-gray-700 rounded-lg p-3 border border-gray-500">
                  <div className="flex items-center gap-2 mb-2">
                    <Cpu className="w-5 h-5 text-white" />
                    <span className="text-white font-semibold text-sm">SVR</span>
                  </div>
                  <ul className="text-gray-300 text-xs space-y-1">
                    <li>• Support Vector Regression</li>
                    <li>• Pattern recognition</li>
                    <li>• Generalization</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
              <div className="flex items-center gap-2 mb-2">
                <Activity className="w-5 h-5 text-white" />
                <span className="text-white font-semibold">Feature Engineering</span>
              </div>
              <p className="text-gray-300 text-sm">Outlier removal • Categorical encoding • Feature scaling • Data preprocessing</p>
            </div>
          </div>
          <div className="flex justify-center my-4">
            <ArrowDown className="w-8 h-8 text-gray-400" />
          </div>
        </div>

        {/* Optimization Layer */}
        <div className="mb-8">
          <div className="bg-white rounded-lg p-6 shadow-2xl border-2 border-gray-300">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-8 h-8 text-black" />
              <h2 className="text-2xl font-bold text-black">Optimization Layer</h2>
            </div>
            
            {/* Scheduling Optimizer */}
            <div className="bg-gray-100 rounded-lg p-4 mb-4 border border-gray-300">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-4 h-4 bg-black rounded-full"></div>
                <span className="text-black font-bold text-lg">EB Scheduler</span>
                <span className="ml-auto text-xs bg-black text-white px-2 py-1 rounded">MILP + NSGA-II</span>
              </div>
              <p className="text-gray-700 text-sm mb-3">Generates optimal daily schedules for electric bus fleet operations</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                {/* Optimization Methods */}
                <div className="bg-white rounded-lg p-3 border-2 border-gray-400">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-5 h-5 text-black" />
                    <span className="text-black font-semibold text-sm">Optimization Methods</span>
                  </div>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• MILP (Pyomo + Gurobi)</li>
                    <li>• NSGA-II (Multi-objective)</li>
                    <li>• AMPL solver integration</li>
                    <li>• Constraint programming</li>
                  </ul>
                </div>

                {/* Objectives & Constraints */}
                <div className="bg-white rounded-lg p-3 border-2 border-gray-400">
                  <div className="flex items-center gap-2 mb-2">
                    <Battery className="w-5 h-5 text-black" />
                    <span className="text-black font-semibold text-sm">Objectives & Constraints</span>
                  </div>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• Minimize battery degradation</li>
                    <li>• Optimize fleet size</li>
                    <li>• SOC management</li>
                    <li>• Trip timing constraints</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center my-4">
            <ArrowDown className="w-8 h-8 text-gray-400" />
          </div>
        </div>

        {/* Output Layer */}
        <div className="mb-8">
          <div className="bg-gray-900 rounded-lg p-6 shadow-2xl border-2 border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-8 h-8 text-white" />
              <h2 className="text-2xl font-bold text-white">Output & Visualization Layer</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span className="text-white font-semibold">Optimal Schedules</span>
                </div>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Bus assignments per trip</li>
                  <li>• Charging schedules</li>
                  <li>• SOC trajectories</li>
                  <li>• Fleet utilization metrics</li>
                </ul>
              </div>

              <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span className="text-white font-semibold">Analytics & Reports</span>
                </div>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Energy consumption forecasts</li>
                  <li>• Battery health analysis</li>
                  <li>• Cost optimization reports</li>
                  <li>• Matplotlib visualizations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-4 shadow-xl border border-gray-600">
            <h4 className="text-white font-bold mb-2">🤖 Machine Learning</h4>
            <p className="text-gray-300 text-sm">Scikit-learn • Pandas • NumPy • Feature Engineering</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-4 shadow-xl border border-gray-600">
            <h4 className="text-white font-bold mb-2">⚡ Optimization</h4>
            <p className="text-gray-300 text-sm">Pyomo • Gurobi • AMPL • NSGA-II • MILP</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-4 shadow-xl border border-gray-600">
            <h4 className="text-white font-bold mb-2">📊 Visualization</h4>
            <p className="text-gray-300 text-sm">Matplotlib • Jupyter Notebooks • Data Analytics</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EBSchedulerArchitecture;