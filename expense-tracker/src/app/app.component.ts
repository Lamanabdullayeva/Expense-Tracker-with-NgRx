import { Component } from '@angular/core';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';
import { ExpenseListComponent } from './components/expense-list/expense-list.component';
import { FilterExpensesComponent } from './components/filter-expenses/filter-expenses.component';

@Component({
  selector: 'app-root',
  imports: [AddExpenseComponent, ExpenseListComponent, FilterExpensesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'expense-tracker';
}
