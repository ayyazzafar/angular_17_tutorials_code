import { Component, effect, untracked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { signal } from '@angular/core';
@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent {
  complexData = signal([{ id: 1 }], {
    equal: (prev, curr) => JSON.stringify(prev) === JSON.stringify(curr),
  });

  user = signal('David');

  logEffect = effect(() => {
    const untrackedValue = untracked(() => this.user());
    console.log(`Logging without dependency: ${untrackedValue}`);
  });

  myEffect = effect((onCleanup) => {
    const timer = setTimeout(() => {
      // some logic
    }, 1000);

    onCleanup(() => clearTimeout(timer));
  });
}
