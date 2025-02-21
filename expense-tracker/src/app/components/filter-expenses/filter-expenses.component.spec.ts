import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterExpensesComponent } from './filter-expenses.component';

describe('FilterExpensesComponent', () => {
  let component: FilterExpensesComponent;
  let fixture: ComponentFixture<FilterExpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterExpensesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
