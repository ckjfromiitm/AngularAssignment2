import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from '../../task';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  @Input() task: Task;
  @Output('passTask')  passTask: EventEmitter<any> = new EventEmitter<any>();
  @Output('deleteThePassedTask') deleteThePassedTask: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  saveTheEditedTask (task: Task) {
    // let task: Task = {id: this.task.id, name: }
    // console.log(task);
    // console.log(this.task);
    this.passTask.emit([task, this.task]);
  }
  deleteTheSelectedTask (task: Task){
    this.deleteThePassedTask.emit(task);
  }

}
