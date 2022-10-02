import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/todos');
  }

  findById(id: number) {
    return this.httpClient.get('http://localhost:3000/todos/' + id);
  }

  save(todo: Todo) {
    return this.httpClient.post('http://localhost:3000/todos', todo);
  }

  delete(id: number) {
    return this.httpClient.delete('http://localhost:3000/todos/' + id);
  }
}
