import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.html',
  styleUrls: ['home.scss'],
})
export class HomePage {
  tasks: { name: string, completed: boolean }[] = [];
  newTask: string = '';

  addTask() {
    if (this.newTask !== '') {
      this.tasks.push({ name: this.newTask, completed: false });
      this.newTask = '';
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
