import { Category } from './category';

export interface IExpense {
  id: string;
  title: string;
  amount: number;
  category: Category;
  date: string;
  editing?: boolean;
}
