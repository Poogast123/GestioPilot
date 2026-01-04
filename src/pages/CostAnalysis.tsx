import { useData } from '../context/DataContext';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Calculator, TrendingUp } from 'lucide-react';

export function CostAnalysis() {
  const { transactions } = useData();

  const totalRevenueRealized = transactions
    .filter((t) => t.category === 'Revenue' && t.type === 'Realized')
    .reduce((sum, t) => sum + t.amount, 0);

  const fixedCostsRealized = transactions
    .filter((t) => t.category === 'Fixed Cost' && t.type === 'Realized')
    .reduce((sum, t) => sum + t.amount, 0);

  const variableCostsRealized = transactions
    .filter((t) => t.category === 'Variable Cost' && t.type === 'Realized')
    .reduce((sum, t) => sum + t.amount, 0);

  const marginOnVariableCosts = totalRevenueRealized - variableCostsRealized;
  const marginRate = totalRevenueRealized > 0 ? (marginOnVariableCosts / totalRevenueRealized) : 0;
  const breakEvenPoint = marginRate > 0 ? fixedCostsRealized / marginRate : 0;

  const pieData = [
    { name: 'Fixed Costs', value: fixedCostsRealized, color: '#ef4444' },
    { name: 'Variable Costs', value: variableCostsRealized, color: '#f97316' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-800 mb-6">Cost Distribution</h3>
          {fixedCostsRealized + variableCostsRealized > 0 ? (
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value: number) => `€${value.toLocaleString()}`}
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-[300px] flex items-center justify-center text-slate-400">
              No cost data available
            </div>
          )}

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="bg-red-50 rounded-lg p-4">
              <p className="text-sm text-red-600 font-medium">Fixed Costs</p>
              <p className="text-2xl font-bold text-red-700 mt-1">
                €{fixedCostsRealized.toLocaleString()}
              </p>
            </div>
            <div className="bg-orange-50 rounded-lg p-4">
              <p className="text-sm text-orange-600 font-medium">Variable Costs</p>
              <p className="text-2xl font-bold text-orange-700 mt-1">
                €{variableCostsRealized.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
          <div className="flex items-center space-x-2 mb-6">
            <Calculator className="text-blue-600" size={24} />
            <h3 className="text-lg font-semibold text-slate-800">Break-even Analysis</h3>
          </div>

          <div className="space-y-6">
            <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium text-emerald-700">Margin on Variable Costs (M/CV)</p>
                <TrendingUp className="text-emerald-600" size={20} />
              </div>
              <p className="text-3xl font-bold text-emerald-800">
                €{marginOnVariableCosts.toLocaleString()}
              </p>
              <p className="text-xs text-emerald-600 mt-2">
                Revenue - Variable Costs
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <p className="text-sm font-medium text-blue-700 mb-2">Margin Rate</p>
              <p className="text-3xl font-bold text-blue-800">
                {(marginRate * 100).toFixed(1)}%
              </p>
              <p className="text-xs text-blue-600 mt-2">
                (M/CV) / Revenue
              </p>
            </div>

            <div className="bg-slate-100 rounded-lg p-4 border border-slate-300">
              <p className="text-sm font-medium text-slate-700 mb-2">Break-even Point (Seuil de Rentabilité)</p>
              <p className="text-3xl font-bold text-slate-800">
                €{breakEvenPoint.toLocaleString()}
              </p>
              <p className="text-xs text-slate-600 mt-2">
                Fixed Costs / Margin Rate
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <h4 className="text-sm font-semibold text-slate-700 mb-3">Formula Breakdown:</h4>
              <div className="space-y-2 text-sm text-slate-600">
                <p>1. M/CV = Revenue - Variable Costs</p>
                <p>2. Margin Rate = M/CV / Revenue</p>
                <p>3. Break-even = Fixed Costs / Margin Rate</p>
              </div>
              <div className="mt-4 p-3 bg-blue-50 rounded border border-blue-200">
                <p className="text-xs text-blue-700">
                  <span className="font-semibold">Interpretation:</span> The business needs to generate €{breakEvenPoint.toLocaleString()} in revenue to cover all costs and reach the break-even point.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
