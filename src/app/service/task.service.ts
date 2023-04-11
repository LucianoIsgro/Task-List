import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { TASKS } from '../mock-task';
import { Task } from '../Task';

const httpOptions={
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })

}



@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl='http://localhost:5000/tasks'

  constructor(    
    private http:HttpClient
    ) {}

  getTasks(): Observable<Task[]>{
    //const tasks=of(TASKS);
    //return tasks ==> estas dos lineas era para el mock test y la interface, que era 
    //Ahora el get esta configurado con la base de datos falsa, no con el archivo hard codeado
    //es como hacer un backend en el front

    return this.http.get<Task[]>(this.apiUrl)
                                               
  }

  deleteTask(task:Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`
    return this.http.delete<Task>(url)
    
  }

  updateTaskReminder(task:Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`
    return this.http.put<Task>(url,task,httpOptions) 
  }

  addTask(task:Task): Observable<Task>{
    return this.http.post<Task>(this.apiUrl,task,httpOptions)

  }


}
