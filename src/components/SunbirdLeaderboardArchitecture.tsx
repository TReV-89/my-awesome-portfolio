import React from 'react';
import { Terminal, FlaskConical, Database, Trophy, ArrowDown, BarChart3, Globe, GitBranch } from 'lucide-react';

const SunbirdLeaderboardArchitecture = () => {
  return (
    <div className="w-full bg-black p-8">
      <div className="max-w-7xl mx-auto">

        {/* Stage 1 — Evaluation Script */}
        <div className="mb-8">
          <div className="bg-white rounded-lg p-6 shadow-2xl border-2 border-gray-300">
            <div className="flex items-center gap-3 mb-3">
              <Terminal className="w-8 h-8 text-black" />
              <h2 className="text-2xl font-bold text-black">Stage 1 — Evaluation Script</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-100 rounded-lg p-4 border border-gray-300">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                  <span className="text-black font-semibold">Model Inference</span>
                </div>
                <p className="text-gray-700 text-sm">Run open-weight models against benchmark datasets (AfriMMLU, SALT, FLORES, etc.) via vLLM / transformers</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 border border-gray-300">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                  <span className="text-black font-semibold">Metric Computation</span>
                </div>
                <p className="text-gray-700 text-sm">Accuracy, BLEU, chrF, exact match — computed per model × benchmark × language</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 border border-gray-300">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                  <span className="text-black font-semibold">10 Benchmarks</span>
                </div>
                <p className="text-gray-700 text-sm">AfriMMLU, AfriXNLI, Belebele, AfriMGSM, Global MMLU, SALT, NTREX, FLORES, internal translation</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center my-4">
            <ArrowDown className="w-8 h-8 text-gray-400" />
          </div>
        </div>

        {/* Stage 2 — MLflow Tracking */}
        <div className="mb-8">
          <div className="bg-gray-900 rounded-lg p-6 shadow-2xl border-2 border-gray-700">
            <div className="flex items-center gap-3 mb-3">
              <FlaskConical className="w-8 h-8 text-white" />
              <h2 className="text-2xl font-bold text-white">Stage 2 — MLflow Tracking</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span className="text-white font-semibold">Experiment Logging</span>
                </div>
                <p className="text-gray-300 text-sm">All evaluation runs logged with params, metrics, and artifacts for reproducibility</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span className="text-white font-semibold">Versioning & Comparison</span>
                </div>
                <p className="text-gray-300 text-sm">Track model versions across iterations; compare runs side-by-side before publishing</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center my-4">
            <ArrowDown className="w-8 h-8 text-gray-400" />
          </div>
        </div>

        {/* Stage 3 — Hugging Face Dataset */}
        <div className="mb-8">
          <div className="bg-white rounded-lg p-6 shadow-2xl border-2 border-gray-300">
            <div className="flex items-center gap-3 mb-3">
              <Database className="w-8 h-8 text-black" />
              <h2 className="text-2xl font-bold text-black">Stage 3 — Hugging Face Dataset</h2>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 mb-4 border border-gray-300">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-4 h-4 bg-black rounded-full"></div>
                <span className="text-black font-bold text-lg">Sunbird/sunflower-eval-results</span>
                <span className="ml-auto text-xs bg-black text-white px-2 py-1 rounded">PUBLIC DATASET</span>
              </div>
              <p className="text-gray-700 text-sm mb-3">Finalized results exported as JSONL files and pushed to the public HF dataset — one shard per model/benchmark combination.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-white rounded-lg p-3 border-2 border-gray-400">
                  <div className="flex items-center gap-2 mb-2">
                    <GitBranch className="w-5 h-5 text-black" />
                    <span className="text-black font-semibold text-sm">Dataset Format</span>
                  </div>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• JSONL per model/benchmark shard</li>
                    <li>• Columns: model_id, benchmark, lang, score</li>
                    <li>• HF Datasets API compatible</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-3 border-2 border-gray-400">
                  <div className="flex items-center gap-2 mb-2">
                    <Globe className="w-5 h-5 text-black" />
                    <span className="text-black font-semibold text-sm">40+ Languages</span>
                  </div>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• Ugandan: Luganda, Runyankole, etc.</li>
                    <li>• African: Swahili, Amharic, Yoruba, etc.</li>
                    <li>• Multilingual benchmarks per task</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center my-4">
            <ArrowDown className="w-8 h-8 text-gray-400" />
          </div>
        </div>

        {/* Stage 4 — Leaderboard App */}
        <div className="mb-8">
          <div className="bg-gray-900 rounded-lg p-6 shadow-2xl border-2 border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="w-8 h-8 text-white" />
              <h2 className="text-2xl font-bold text-white">Stage 4 — Leaderboard App</h2>
            </div>
            <p className="text-gray-300 text-sm mb-4">Fully client-side React app. Fetches JSONL shards in parallel from HF Hub API at page load, aggregates into a model × benchmark score matrix, computes coverage-robust Win % rankings, and renders across three views.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span className="text-white font-semibold">Leaderboard Table</span>
                </div>
                <p className="text-gray-300 text-sm">Sortable • Searchable • Coverage-robust Win % ranking • Color-coded cells • Medal icons for top 3</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span className="text-white font-semibold">Charts Tab</span>
                </div>
                <p className="text-gray-300 text-sm">Benchmark dot plot • 14B vs 32B scaling • Knowledge vs translation scatter • Per-language heatmap</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span className="text-white font-semibold">Compare Tab</span>
                </div>
                <p className="text-gray-300 text-sm">Side-by-side model comparison • Shared benchmark bar chart • Per-language delta calculations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-4 shadow-xl border border-gray-600">
            <h4 className="text-white font-bold mb-2">Frontend</h4>
            <p className="text-gray-300 text-sm">React 18 • TypeScript • Vite • Tailwind CSS • Recharts • TanStack React Table • Lucide React</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-4 shadow-xl border border-gray-600">
            <h4 className="text-white font-bold mb-2">Data Pipeline</h4>
            <p className="text-gray-300 text-sm">Python evaluation scripts • MLflow tracking • Hugging Face Datasets API • JSONL shards</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-4 shadow-xl border border-gray-600">
            <h4 className="text-white font-bold mb-2">Key Metric</h4>
            <p className="text-gray-300 text-sm">Coverage-robust Win % — pairwise head-to-head only within shared (benchmark × language) cells</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SunbirdLeaderboardArchitecture;
