import { useData } from '../context/DataContext';
import { Target, Zap, Lightbulb, TrendingUp, TrendingDown, CheckCircle, AlertCircle } from 'lucide-react';

export function Performance() {
  const { transactions } = useData();

  const totalRevenueRealized = transactions
    .filter((t) => t.category === 'Revenue' && t.type === 'Realized')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalRevenueBudget = transactions
    .filter((t) => t.category === 'Revenue' && t.type === 'Budget')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalCostsRealized = transactions
    .filter((t) => t.category !== 'Revenue' && t.type === 'Realized')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalCostsBudget = transactions
    .filter((t) => t.category !== 'Revenue' && t.type === 'Budget')
    .reduce((sum, t) => sum + t.amount, 0);

  const revenueAchievement = totalRevenueBudget > 0
    ? ((totalRevenueRealized / totalRevenueBudget) * 100)
    : 0;

  const costEfficiency = totalCostsBudget > 0
    ? ((totalCostsRealized / totalCostsBudget) * 100)
    : 0;

  const isEffective = revenueAchievement >= 100;
  const isEfficient = costEfficiency <= 100;

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Triangle of Performance</h2>
        <p className="text-blue-100">
          Evaluate your business performance across three key dimensions: Effectiveness, Efficiency, and Strategic Relevance.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-emerald-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-3 bg-emerald-100 rounded-lg">
              <Target className="text-emerald-600" size={28} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800">Efficacité</h3>
              <p className="text-sm text-slate-600">Effectiveness</p>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-sm text-slate-600 mb-3">
              Did we reach our sales objective?
            </p>
            <div className="bg-slate-50 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-600">Revenue Budget</span>
                <span className="font-semibold text-slate-800">
                  €{totalRevenueBudget.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Revenue Realized</span>
                <span className="font-semibold text-emerald-600">
                  €{totalRevenueRealized.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-lg border border-emerald-200">
              <span className="text-sm font-medium text-emerald-700">Achievement Rate</span>
              <span className="text-2xl font-bold text-emerald-800">
                {revenueAchievement.toFixed(1)}%
              </span>
            </div>
          </div>

          <div className={`flex items-center space-x-2 p-3 rounded-lg ${
            isEffective ? 'bg-emerald-100 text-emerald-700' : 'bg-orange-100 text-orange-700'
          }`}>
            {isEffective ? (
              <>
                <CheckCircle size={20} />
                <span className="text-sm font-medium">Sales objective achieved!</span>
              </>
            ) : (
              <>
                <AlertCircle size={20} />
                <span className="text-sm font-medium">Below sales target</span>
              </>
            )}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-blue-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Zap className="text-blue-600" size={28} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800">Efficience</h3>
              <p className="text-sm text-slate-600">Efficiency</p>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-sm text-slate-600 mb-3">
              Did we use fewer resources than planned?
            </p>
            <div className="bg-slate-50 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-600">Costs Budget</span>
                <span className="font-semibold text-slate-800">
                  €{totalCostsBudget.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Costs Realized</span>
                <span className="font-semibold text-red-600">
                  €{totalCostsRealized.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
              <span className="text-sm font-medium text-blue-700">Resource Usage</span>
              <span className="text-2xl font-bold text-blue-800">
                {costEfficiency.toFixed(1)}%
              </span>
            </div>
          </div>

          <div className={`flex items-center space-x-2 p-3 rounded-lg ${
            isEfficient ? 'bg-emerald-100 text-emerald-700' : 'bg-orange-100 text-orange-700'
          }`}>
            {isEfficient ? (
              <>
                <CheckCircle size={20} />
                <span className="text-sm font-medium">Resources optimized!</span>
              </>
            ) : (
              <>
                <AlertCircle size={20} />
                <span className="text-sm font-medium">Budget exceeded</span>
              </>
            )}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-slate-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-3 bg-slate-100 rounded-lg">
              <Lightbulb className="text-slate-600" size={28} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800">Pertinence</h3>
              <p className="text-sm text-slate-600">Strategic Relevance</p>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-sm text-slate-600 mb-4">
              Are we pursuing the right objectives aligned with our strategy?
            </p>

            <div className="space-y-4">
              <div className="bg-slate-50 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-slate-700 mb-2">Key Questions:</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-0.5">•</span>
                    <span>Are our goals aligned with market trends?</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-0.5">•</span>
                    <span>Do our investments support long-term strategy?</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-0.5">•</span>
                    <span>Are we focusing on the right priorities?</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h4 className="text-sm font-semibold text-blue-700 mb-2">Strategic Notes:</h4>
                <p className="text-sm text-blue-600 leading-relaxed">
                  Regular strategic reviews ensure that operational activities remain aligned with broader business objectives and market conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Overall Performance Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <div className="flex items-center space-x-3">
                {revenueAchievement >= 100 ? (
                  <TrendingUp className="text-emerald-600" size={24} />
                ) : (
                  <TrendingDown className="text-orange-600" size={24} />
                )}
                <div>
                  <p className="text-sm text-slate-600">Revenue Performance</p>
                  <p className="font-semibold text-slate-800">
                    {revenueAchievement >= 100 ? 'Above Target' : 'Below Target'}
                  </p>
                </div>
              </div>
              <span className={`text-xl font-bold ${
                revenueAchievement >= 100 ? 'text-emerald-600' : 'text-orange-600'
              }`}>
                {revenueAchievement >= 100 ? '+' : ''}{(revenueAchievement - 100).toFixed(1)}%
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <div className="flex items-center space-x-3">
                {costEfficiency <= 100 ? (
                  <TrendingUp className="text-emerald-600" size={24} />
                ) : (
                  <TrendingDown className="text-red-600" size={24} />
                )}
                <div>
                  <p className="text-sm text-slate-600">Cost Performance</p>
                  <p className="font-semibold text-slate-800">
                    {costEfficiency <= 100 ? 'Under Budget' : 'Over Budget'}
                  </p>
                </div>
              </div>
              <span className={`text-xl font-bold ${
                costEfficiency <= 100 ? 'text-emerald-600' : 'text-red-600'
              }`}>
                {costEfficiency <= 100 ? '-' : '+'}{Math.abs(costEfficiency - 100).toFixed(1)}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
