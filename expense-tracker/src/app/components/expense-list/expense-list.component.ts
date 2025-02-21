import { Component, inject, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { IExpense } from '../../models/i-expense';
import {
  selectExpenses,
  selectExpenseState,
  selectFilteredExpenses,
} from '../../state/expenses.selectors';

@Component({
  selector: 'app-expense-list',
  imports: [],
  templateUrl: './expense-list.component.html',
  styleUrl: './expense-list.component.scss',
})
export class ExpenseListComponent {
  store = inject(Store);

  expenses = signal<IExpense[]>([]);

  constructor() {
    this.store.select(selectFilteredExpenses).subscribe((expenses) => {
      this.expenses.set(expenses);
    });
  }
}
