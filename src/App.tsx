import { useState } from 'react';
import { DataProvider } from './context/DataContext';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { DataEntry } from './pages/DataEntry';
import { CostAnalysis } from './pages/CostAnalysis';
import { Performance } from './pages/Performance';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'data-entry':
        return <DataEntry />;
      case 'cost-analysis':
        return <CostAnalysis />;
      case 'performance':
        return <Performance />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <DataProvider>
      <Layout currentPage={currentPage} onNavigate={setCurrentPage}>
        {renderPage()}
      </Layout>
    </DataProvider>
  );
}

export default App;
