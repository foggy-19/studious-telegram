import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TodoItem } from '../shared/models/TodoItem';

const url = 'http://localhost:3000/todos';

@Injectable({ providedIn: 'root' })
export class TodoService {
  constructor(private client: HttpClient) {}

  getTodos(): Observable<TodoItem[]> {
    const options = { headers: this.getStandardHeaders() };
    return this.client.get<TodoItem[]>(url, options);
  }

  addTodo(todo: TodoItem): Observable<TodoItem> {
    const headers = this.getStandardHeaders().set('Authorization', 'secret');
    return this.client.post<TodoItem>(url, todo, { headers });
  }

  removeTodo(id: string): Observable<void> {
    const headers = this.getStandardHeaders().set('Authorization', 'secret');
    return this.client.delete<void>(`${url}/${id}`, { headers });
  }

  private getStandardHeaders(): HttpHeaders {
    return new HttpHeaders({ 'Content-Type': 'application/json' });
  }
}
