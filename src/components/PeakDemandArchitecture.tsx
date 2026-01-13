import React from 'react';
import { Database, TrendingUp, Activity, Zap, ArrowDown, BarChart3, LineChart } from 'lucide-react';

const ElectricityForecastingArchitecture = () => {
  return (
    <div className="w-full bg-black p-8">
      <div className="max-w-7xl mx-auto">
        {/* Data Collection & Preparation Layer */}
        <div className="mb-8">
          <div className="bg-white rounded-lg p-6 shadow-2xl border-2 border-gray-300">
            <div className="flex items-center gap-3 mb-3">
              <Database className="w-8 h-8 text-black" />
              <h2 className="text-2xl font-bold text-black">Data Collection & Preparation Layer</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-100 rounded-lg p-4 border border-gray-300">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                  <span className="text-black font-semibold">Historical Data Sources</span>
                </div>
                <p className="text-gray-700 text-sm">Electricity consumption records • Peak demand timestamps • Load patterns • Grid measurements</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 border border-gray-300">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                  <span className="text-black font-semibold">Data Preprocessing</span>
                </div>
                <p className="text-gray-700 text-sm">Missing value handling • Outlier detection • Data normalization • Temporal alignment</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center my-4">
            <ArrowDown className="w-8 h-8 text-gray-400" />
          </div>
        </div>

        {/* Time Series Analysis Layer */}
        <div className="mb-8">
          <div className="bg-gray-900 rounded-lg p-6 shadow-2xl border-2 border-gray-700">
            <div className="flex items-center gap-3 mb-3">
              <Activity className="w-8 h-8 text-white" />
              <h2 className="text-2xl font-bold text-white">Time Series Analysis Layer</h2>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 border border-gray-600 mb-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-4 h-4 bg-white rounded-full"></div>
                <span className="text-white font-bold text-lg">Pattern Decomposition</span>
                <span className="ml-auto text-xs bg-white text-black px-2 py-1 rounded">ANALYSIS</span>
              </div>
              <p className="text-gray-300 text-sm mb-3">Decompose time series into trend, seasonal, and residual components</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
                <div className="bg-gray-700 rounded-lg p-3 border border-gray-500">
                  <div className="flex items-center gap-2 mb-2">
                    <LineChart className="w-5 h-5 text-white" />
                    <span className="text-white font-semibold text-sm">Trend Analysis</span>
                  </div>
                  <ul className="text-gray-300 text-xs space-y-1">
                    <li>• Long-term patterns</li>
                    <li>• Growth/decline trends</li>
                    <li>• Directional movement</li>
                  </ul>
                </div>

                <div className="bg-gray-700 rounded-lg p-3 border border-gray-500">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="w-5 h-5 text-white" />
                    <span className="text-white font-semibold text-sm">Seasonal Patterns</span>
                  </div>
                  <ul className="text-gray-300 text-xs space-y-1">
                    <li>• Daily variations</li>
                    <li>• Weekly cycles</li>
                    <li>• Seasonal fluctuations</li>
                  </ul>
                </div>

                <div className="bg-gray-700 rounded-lg p-3 border border-gray-500">
                  <div className="flex items-center gap-2 mb-2">
                    <Activity className="w-5 h-5 text-white" />
                    <span className="text-white font-semibold text-sm">Residual Analysis</span>
                  </div>
                  <ul className="text-gray-300 text-xs space-y-1">
                    <li>• Random variations</li>
                    <li>• Noise detection</li>
                    <li>• Irregularities</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-white" />
                <span className="text-white font-semibold">Stationarity Testing</span>
              </div>
              <p className="text-gray-300 text-sm">ADF test • KPSS test • ACF/PACF analysis • Differencing operations</p>
            </div>
          </div>
          <div className="flex justify-center my-4">
            <ArrowDown className="w-8 h-8 text-gray-400" />
          </div>
        </div>

        {/* Forecasting Models Layer */}
        <div className="mb-8">
          <div className="bg-white rounded-lg p-6 shadow-2xl border-2 border-gray-300">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-8 h-8 text-black" />
              <h2 className="text-2xl font-bold text-black">Forecasting Models Layer</h2>
            </div>
            
            {/* Models Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* Holt-Winters */}
              <div className="bg-gray-100 rounded-lg p-4 border border-gray-300">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-4 h-4 bg-black rounded-full"></div>
                  <span className="text-black font-bold text-lg">Holt-Winters Method</span>
                  <span className="ml-auto text-xs bg-black text-white px-2 py-1 rounded">EXPONENTIAL</span>
                </div>
                <p className="text-gray-700 text-sm mb-3">Triple exponential smoothing for trend and seasonality</p>
                
                <div className="bg-white rounded-lg p-3 border-2 border-gray-400">
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• Level smoothing (α)</li>
                    <li>• Trend smoothing (β)</li>
                    <li>• Seasonal smoothing (γ)</li>
                    <li>• Additive/Multiplicative models</li>
                    <li>• Short to medium-term forecasts</li>
                  </ul>
                </div>
              </div>

              {/* SARIMAX */}
              <div className="bg-gray-100 rounded-lg p-4 border border-gray-300">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-4 h-4 bg-black rounded-full"></div>
                  <span className="text-black font-bold text-lg">SARIMAX Model</span>
                  <span className="ml-auto text-xs bg-black text-white px-2 py-1 rounded">ARIMA</span>
                </div>
                <p className="text-gray-700 text-sm mb-3">Seasonal ARIMA with exogenous variables</p>
                
                <div className="bg-white rounded-lg p-3 border-2 border-gray-400">
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• AutoRegressive (p)</li>
                    <li>• Integrated (d)</li>
                    <li>• Moving Average (q)</li>
                    <li>• Seasonal components (P, D, Q, s)</li>
                    <li>• Exogenous variable support</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Model Evaluation */}
            <div className="bg-gray-100 rounded-lg p-4 border border-gray-300">
              <div className="flex items-center gap-2 mb-2">
                <BarChart3 className="w-5 h-5 text-black" />
                <span className="text-black font-semibold">Model Evaluation & Selection</span>
              </div>
              <p className="text-gray-700 text-sm">RMSE • MAE • MAPE • AIC • BIC • Cross-validation • Residual diagnostics</p>
            </div>
          </div>
          <div className="flex justify-center my-4">
            <ArrowDown className="w-8 h-8 text-gray-400" />
          </div>
        </div>

        {/* Forecasting & Visualization Layer */}
        <div className="mb-8">
          <div className="bg-gray-900 rounded-lg p-6 shadow-2xl border-2 border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-8 h-8 text-white" />
              <h2 className="text-2xl font-bold text-white">Forecasting & Visualization Layer</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span className="text-white font-semibold">Peak Demand Predictions</span>
                </div>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Future peak demand values</li>
                  <li>• Confidence intervals</li>
                  <li>• Prediction horizons</li>
                  <li>• Uncertainty quantification</li>
                </ul>
              </div>

              <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span className="text-white font-semibold">Visualization & Reports</span>
                </div>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Actual vs Predicted plots</li>
                  <li>• Decomposition charts</li>
                  <li>• Residual plots</li>
                  <li>• Performance metrics dashboard</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Application Areas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-4 shadow-xl border border-gray-600">
            <h4 className="text-white font-bold mb-2">⚡ Grid Management</h4>
            <p className="text-gray-300 text-sm">Optimize electricity generation and distribution planning</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-4 shadow-xl border border-gray-600">
            <h4 className="text-white font-bold mb-2">📊 Capacity Planning</h4>
            <p className="text-gray-300 text-sm">Infrastructure investment decisions</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-4 shadow-xl border border-gray-600">
            <h4 className="text-white font-bold mb-2">⚖️ Load Balancing</h4>
            <p className="text-gray-300 text-sm">Optimize energy distribution across grid</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-4 shadow-xl border border-gray-600">
            <h4 className="text-white font-bold mb-2">💰 Cost Optimization</h4>
            <p className="text-gray-300 text-sm">Reduce operational costs through better predictions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectricityForecastingArchitecture;