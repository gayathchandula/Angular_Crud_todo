import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TaskListService } from './task-list.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  providers: [TaskListService],
})
export class TaskListComponent implements OnInit {
  
  todos: any;

  editing: boolean = false;

  _id: '' | undefined;

  Task = {
    title: '',
    description: '',
  };

  updateTask = {
    title: '',
    description: '',
  };

  constructor(private todoService: TaskListService) {}

  /** Display popup on edit btn click */
  updatePopup(title: string, description: string, _id: any) {
    this.updateTask.title = title;
    this.updateTask.description = description;
    this._id = _id;
    this.editing = true;
  }

  /** Close the popup */
  closePopup() {
    this.editing = false;
  }

  /** Get all the task from service */
  getTodos() {
    return this.todoService.get().subscribe((todo) => {
      this.todos = todo;
    });
  }

  /** Submit form data and create new task */
  submitForm() {
    this.todoService.create(this.Task).subscribe({
      next: (response) => {
        console.log(response);
        this.Task = {
          title: '',
          description: '',
        };
        window.location.reload();
      },
      error: (error) => console.log(error),
    });
  }

  /** Task update */
  updateOne() {
    this.todoService.update(this.updateTask, this._id).subscribe({
      next: (response) => {
        console.log(response);
        window.location.reload();
      },
      error: (error) => console.log(error),
    });
  }

  /** Task delete */
  delete(_id: any) {
    this.todoService.delete(_id).subscribe({
      next: (response) => {
        console.log(response);
        window.location.reload();
      },
      error: (error) => console.log(error),
    });
  }

  ngOnInit() {
    this.getTodos();
  }
}
