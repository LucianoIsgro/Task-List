import { Component,Input } from '@angular/core';
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
faTimes=faTimes; // el icono, despues le vamos a agregar las funcionalidades

}
