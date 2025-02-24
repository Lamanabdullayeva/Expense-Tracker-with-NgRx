import { createAction, props } from '@ngrx/store';
import { IExpense } from '../models/i-expense';
import { Category } from '../models/category';

export const addExpense = createAction(
  '[Expenses] Add Expense',
  props<{ expense: IExpense }>()
);

export const setCategoryFilter = createAction(
  '[Expense] Set Category Filter',
  props<{ category: Category | 'All' }>()
);

export const deleteExpense = createAction(
  '[Expense] Delete Expense',
  props<{ id: string }>()
);

export const updateExpense = createAction(
  '[Expense] Edit Expense',
  props<{ updatedExpense: IExpense }>()
);
