import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IExpense } from '../../models/i-expense';
import { selectFilteredExpenses } from '../../state/expenses.selectors';
import { deleteExpense, updateExpense } from '../../state/expenses.actions';

@Component({
  selector: 'app-expense-list',
  imports: [CommonModule, FormsModule],
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

  editExpense(expense: IExpense) {
    this.expenses.set(
      this.expenses().map((e) => {
        return expense.id === e.id ? { ...e, editing: true } : e;
      })
    );
  }

  cancelEdit(expense: IExpense) {
    this.expenses.set(
      this.expenses().map((e) => {
        return expense.id === e.id ? { ...e, editing: false } : e;
      })
    );
  }

  saveEdit(expense: IExpense) {
    this.store.dispatch(updateExpense({ updatedExpense: expense }));
  }

  deleteExpenseById(id: string) {
    this.store.dispatch(deleteExpense({ id: id }));
  }
}
