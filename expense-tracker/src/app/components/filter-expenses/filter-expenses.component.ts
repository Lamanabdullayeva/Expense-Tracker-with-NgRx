import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { categories, Category } from '../../models/category';
import { setCategoryFilter } from '../../state/expenses.actions';

@Component({
  selector: 'app-filter-expenses',
  imports: [],
  templateUrl: './filter-expenses.component.html',
  styleUrl: './filter-expenses.component.scss',
})
export class FilterExpensesComponent {
  store = inject(Store);

  categories = ['All', categories];

  // update filter
  updateFilter(event: Event) {
    const selectedCategory = (event.target as HTMLSelectElement).value as
      | Category
      | 'All';

    this.store.dispatch(setCategoryFilter({ category: selectedCategory }));
  }
}
