import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from '../../task';
import {until} from 'selenium-webdriver';
import ableToSwitchToFrame = until.ableToSwitchToFrame;

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  @Input() task: Task;
  @Output('passTask')  passTask: EventEmitter<any> = new EventEmitter<any>();
  @Output('deleteThePassedTask') deleteThePassedTask: EventEmitter<any> = new EventEmitter<any>();
  @Output('displayMessage') displayMessage: EventEmitter<string> = new EventEmitter<string>();
  emptyErrorMessage = '*Please fill out all the fields';
  empty = false;
  disableSaveButto = false;

  constructor() { }

  ngOnInit() {
  }
  saveTheEditedTask (task: Task) {
    // let task: Task = {id: this.task.id, name: }
    // console.log(task);
    // console.log(this.task);
    if (task.name === '' || task.description === '') {
        this.empty = true;
    } else {
      this.passTask.emit([task, this.task]);
      this.displayMessage.emit('Task is saved');
      this.empty = false;
    }
  }
  deleteTheSelectedTask (task: Task) {
    this.deleteThePassedTask.emit(task);
    this.displayMessage.emit('Task is deleted');
  }
  disablingSaveButton(name: string, description: string ) {
    if (name === '' || description === '') {
    this.disableSaveButto = true; } else {
      this.disableSaveButto = false;
    }
  }
}
