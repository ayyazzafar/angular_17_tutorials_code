import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.scss',
})
export class SalesComponent {
  sales = signal([
    { id: 1, title: 'Sale 1', amount: 100 },
    { id: 2, title: 'Sale 2', amount: 200 },
    { id: 3, title: 'Sale 3', amount: 300 },
  ]);

  expenses = signal([
    { id: 1, title: 'Expense 1', amount: 50 },
    { id: 2, title: 'Expense 2', amount: 100 },
    { id: 3, title: 'Expense 3', amount: 150 },
  ]);

  profit = computed(
    () =>
      this.sales().reduce((acc, curr) => acc + curr.amount, 0) -
      this.expenses().reduce((acc, curr) => acc + curr.amount, 0)
  );

  userType = signal('guest');

  discountedPrice = computed(() => {
    if (this.userType() === 'member') {
      return this.sales().map((sale) => sale.amount * 0.9);
    }

    return this.sales();
  });
}
