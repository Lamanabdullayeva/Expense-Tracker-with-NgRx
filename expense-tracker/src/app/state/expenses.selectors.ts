import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ExpenseState } from './expenses.reducer';

export const selectExpenseState =
  createFeatureSelector<ExpenseState>('expenses');

export const selectExpenses = createSelector(
  selectExpenseState,
  (state) => state.expenses
);
