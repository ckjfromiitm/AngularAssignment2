import { Component, OnInit } from '@angular/core';
import {Task} from '../task';


@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  addingTaskBoolean = false;
  warnMessageBoolean = false;
  warnMessage = '';
  selectedTask: Task;
  showChildComponent = false;
  tasks: Task[]= [{ id: 1, name: 'Mr. Nice', description: 'awesomely Nice' },
    { id: 2, name: 'Ckj', description: 'Birthday Coming' }];
  taskUniqueId = this.tasks.length;


  constructor() { }

  ngOnInit() {
  }
  saveTask(name: string, description: string) {
    if (name === '' || description === '' ) {
              this.warnMessageBoolean = true;
              this.warnMessage = '*please fill all the fields';
    }    else {
      const newTask: Task = {id: this.taskUniqueId + 1, name: name, description: description};
      this.tasks.push(newTask);
      this.addingTaskBoolean = false;
      this.warnMessageBoolean = false;
      this.taskUniqueId++;
    }
  }
  cancelTask() {
    this.addingTaskBoolean = false;
    this.warnMessageBoolean = false;
  }
  deleteTask(task: Task) {
    const taskId = this.tasks.lastIndexOf(task);
    this.tasks.splice(taskId, 1);
    this.showChildComponent = false;
    this.addingTaskBoolean = false;
  }
  addTask() {
    this.addingTaskBoolean = true;
    this.showChildComponent = false;
  }
  selectTask (task: Task) {
    this.selectedTask = task;
    this.showChildComponent = true;
    this.addingTaskBoolean = false;
  }
  saveTheEditedTask(taskSaver: any)
  {
    console.log(taskSaver);
    this.tasks[this.tasks.lastIndexOf(taskSaver[1])] = taskSaver[0];
    this.showChildComponent = false;
  }
}
