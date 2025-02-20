import { createAction, props } from '@ngrx/store';
import { IExpense } from '../models/i-expense';

export const addExpense = createAction(
  '[Expenses] Add Expense',
  props<{ expense: IExpense }>()
);
