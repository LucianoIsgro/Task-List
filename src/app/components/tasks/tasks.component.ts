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
   this.taskService.getTasks().subscribe((tasks)=>(this.tasks=tasks)
   );
   
}
deleteTask(task:Task){
  this.taskService.deleteTask(task)
  .subscribe(
    ()=>(
      this.tasks=this.tasks.filter( (t) =>{
      return t.id !== task.id
    })
    ))
}

toggleReminder(task:Task){
  task.reminder=!task.reminder //solo es un cambio desde el lado del front, solo visual. No cambia nada en la base de datos, lo cual yo creo que deberia pasar pero todavia no llegamos ahi
  this.taskService.updateTaskReminder(task).subscribe();
}

addTask(task:Task){
  this.taskService.addTask(task).subscribe((task)=>(
    this.tasks.push(task)

    )
  ) 
}


}
