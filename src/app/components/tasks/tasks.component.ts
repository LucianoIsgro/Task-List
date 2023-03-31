import { Component,OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { Task } from '../../Task';
@Component({                                                            //El servicio es lo que me va a permitir controlar la logica de la lista,Agregar tareas, sacar tareas, etc 
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
tasks: Task[]=[];

constructor(private taskService: TaskService) {
  
}

ngOnInit(): void{
  //Like promise
   this.taskService.getTasks().subscribe((tasks)=>[this.tasks=tasks]
   );

}
  

}
