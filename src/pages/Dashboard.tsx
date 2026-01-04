import { useData } from '../context/DataContext';
import { TrendingUp, TrendingDown, DollarSign, Target } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function Dashboard() {
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

  const netMargin = totalRevenueRealized - totalCostsRealized;
  const budgetAchievementRate = totalRevenueBudget > 0
    ? ((totalRevenueRealized / totalRevenueBudget) * 100).toFixed(1)
    : 0;

  const chartData = [
    {
      name: 'Revenue',
      Budget: totalRevenueBudget,
      Realized: totalRevenueRealized,
    },
    {
      name: 'Costs',
      Budget: totalCostsBudget,
      Realized: totalCostsRealized,
    },
  ];

  const KPICard = ({ title, value, icon: Icon, trend, color }: {
    title: string;
    value: string;
    icon: any;
    trend?: string;
    color: string;
  }) => (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-600">{title}</p>
          <h3 className={`text-3xl font-bold mt-2 ${color}`}>{value}</h3>
          {trend && (
            <p className="text-sm text-slate-500 mt-2">{trend}</p>
          )}
        </div>
        <div className={`p-3 rounded-lg ${color === 'text-emerald-600' ? 'bg-emerald-100' : color === 'text-red-600' ? 'bg-red-100' : 'bg-blue-100'}`}>
          <Icon className={color} size={24} />
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard
          title="Total Revenue"
          value={`€${totalRevenueRealized.toLocaleString()}`}
          icon={DollarSign}
          trend="Realized"
          color="text-emerald-600"
        />
        <KPICard
          title="Total Costs"
          value={`€${totalCostsRealized.toLocaleString()}`}
          icon={TrendingDown}
          trend="Realized"
          color="text-red-600"
        />
        <KPICard
          title="Net Margin"
          value={`€${netMargin.toLocaleString()}`}
          icon={TrendingUp}
          trend={netMargin >= 0 ? 'Profit' : 'Loss'}
          color={netMargin >= 0 ? 'text-emerald-600' : 'text-red-600'}
        />
        <KPICard
          title="Budget Achievement"
          value={`${budgetAchievementRate}%`}
          icon={Target}
          trend="Revenue Target"
          color="text-blue-600"
        />
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
        <h3 className="text-lg font-semibold text-slate-800 mb-6">Budget vs Realized</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="name" stroke="#64748b" />
            <YAxis stroke="#64748b" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #e2e8f0',
                borderRadius: '8px'
              }}
            />
            <Legend />
            <Bar dataKey="Budget" fill="#3b82f6" radius={[8, 8, 0, 0]} />
            <Bar dataKey="Realized" fill="#10b981" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
