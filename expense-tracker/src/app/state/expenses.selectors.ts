import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ExpenseState } from './expenses.reducer';

export const selectExpenseState =
  createFeatureSelector<ExpenseState>('expenses');

export const selectExpenses = createSelector(
  selectExpenseState,
  (state) => state.expenses
);

export const selectCategoryFilter = createSelector(
  selectExpenseState,
  (state) => state.selectedCategory
);

export const selectFilteredExpenses = createSelector(
  selectExpenses,
  selectCategoryFilter,
  (expenses, category) =>
    category === 'All'
      ? expenses
      : expenses.filter((expense) => expense.category === category)
);
