import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { TASKS } from '../../mock-task';
import { faTimes } from '@fortawesome/free-solid-svg-icons'; //esto nos va a dar el icono para sacar tareas, es una cruz

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent {

@Input() task:Task=TASKS[0];
@Output() onDeleteTask:EventEmitter<Task> = new EventEmitter();
@Output() onToggleReminder:EventEmitter<Task>=new EventEmitter(); 
faTimes=faTimes; // el icono, despues le vamos a agregar las funcionalidades

constructor(){}
ngOnInit():void{}

onDelete(task:Task){
this.onDeleteTask.emit(task);

}

onToggle(task:Task){

  this.onToggleReminder.emit(task);

}

}
