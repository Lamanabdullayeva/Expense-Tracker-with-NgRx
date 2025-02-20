import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IExpense } from '../../models/i-expense';
import { addExpense } from '../../state/expenses.actions';

@Component({
  selector: 'app-add-expense',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.scss',
})
export class AddExpenseComponent {
  store = inject(Store);
  title = '';
  amount = 0;
  category = '';

  submitExpense() {
    if (!this.title || this.amount <= 0 || !this.category) return;

    const expense: IExpense = {
      id: crypto.randomUUID(),
      title: this.title,
      amount: this.amount,
      category: this.category,
      date: new Date().toISOString(),
    };

    this.store.dispatch(addExpense({ expense }));
    this.resetForm();
  }

  
  resetForm() {
    this.title = '';
    this.amount = 0;
    this.category = '';
  }
}
