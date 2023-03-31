import { Injectable } from '@angular/core';
import{HttpClient,HttpHandler} from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { TASKS } from '../mock-task';
import { Task } from '../Task';

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

}
