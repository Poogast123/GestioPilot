import { createContext, useContext, useState, ReactNode } from 'react';
import { Transaction } from '../types';

interface DataContextType {
  transactions: Transaction[];
  addTransaction: (transaction: Omit<Transaction, 'id'>) => void;
  deleteTransaction: (id: string) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

const initialTransactions: Transaction[] = [
  {
    id: '1',
    description: 'Raw Materials Purchase',
    amount: 5000,
    category: 'Variable Cost',
    type: 'Realized',
  },
  {
    id: '2',
    description: 'Raw Materials Purchase',
    amount: 4500,
    category: 'Variable Cost',
    type: 'Budget',
  },
  {
    id: '3',
    description: 'Factory Rent',
    amount: 2000,
    category: 'Fixed Cost',
    type: 'Realized',
  },
  {
    id: '4',
    description: 'Factory Rent',
    amount: 2000,
    category: 'Fixed Cost',
    type: 'Budget',
  },
  {
    id: '5',
    description: 'Sales Revenue Product A',
    amount: 12000,
    category: 'Revenue',
    type: 'Realized',
  },
  {
    id: '6',
    description: 'Sales Revenue Product A',
    amount: 15000,
    category: 'Revenue',
    type: 'Budget',
  },
  {
    id: '7',
    description: 'Marketing Campaign',
    amount: 1500,
    category: 'Fixed Cost',
    type: 'Realized',
  },
  {
    id: '8',
    description: 'Marketing Campaign',
    amount: 1000,
    category: 'Fixed Cost',
    type: 'Budget',
  },
  {
    id: '9',
    description: 'Electricity',
    amount: 300,
    category: 'Variable Cost',
    type: 'Realized',
  },
  {
    id: '10',
    description: 'Electricity',
    amount: 250,
    category: 'Variable Cost',
    type: 'Budget',
  },
];

export function DataProvider({ children }: { children: ReactNode }) {
  const [transactions, setTransactions] = useState<Transaction[]>(initialTransactions);

  const addTransaction = (transaction: Omit<Transaction, 'id'>) => {
    const newTransaction: Transaction = {
      ...transaction,
      id: Date.now().toString(),
    };
    setTransactions([...transactions, newTransaction]);
  };

  const deleteTransaction = (id: string) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  return (
    <DataContext.Provider value={{ transactions, addTransaction, deleteTransaction }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}
