import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent {
  tasks = signal([
    { id: 1, title: 'Task 1', priority: 'High' },
    { id: 1, title: 'Task 7', priority: 'High' },
    { id: 2, title: 'Task 2', priority: 'Medium' },
    { id: 3, title: 'Task 3', priority: 'Low' },
  ]);

  urgentTasks = computed(() =>
    this.tasks().filter((task) => task.priority === 'High')
  );

  addTask() {
    this.tasks.update((tasks) => [
      ...tasks,
      {
        id: tasks.length + 1,
        title: `Task ${tasks.length + 1}`,
        priority: 'High',
      },
    ]);
  }
}
