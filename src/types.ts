export type TransactionCategory = 'Revenue' | 'Fixed Cost' | 'Variable Cost';
export type TransactionType = 'Budget' | 'Realized';

export interface Transaction {
  id: string;
  description: string;
  amount: number;
  category: TransactionCategory;
  type: TransactionType;
}
