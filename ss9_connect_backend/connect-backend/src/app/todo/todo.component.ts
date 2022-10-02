import { Component, OnInit } from '@angular/core';
import {Todo} from '../model/todo';
import {FormControl} from '@angular/forms';
import {TodoService} from '../service/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  content = new FormControl();
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getAll().subscribe( next => this.todos = next);
  }

  detele(id: number){
    this.todoService.delete(id).subscribe(next => this.ngOnInit());
  }

  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }

  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        id: null,
        content: value,
        complete: false
      };
      this.todoService.save(todo).subscribe(next => this.ngOnInit());
      this.content.reset();
    }
  }
}
