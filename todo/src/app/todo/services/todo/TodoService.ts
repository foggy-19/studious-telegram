import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { TodoItem } from '../../models/TodoItem';

const url = 'http://localhost:3000/todos';

@Injectable({ providedIn: 'root' })
export class TodoService {
  constructor(private client: HttpClient) {}

  getTodos(): Observable<TodoItem[]> {
    const options = { headers: this.getStandardHeaders() };
    return this.client
      .get<TodoItem[]>(url, options)
      .pipe(catchError((err) => this.handleError(err, 'Unable to get items')));
  }

  addTodo(todo: TodoItem): Observable<TodoItem> {
    const headers = this.getStandardHeaders().set('Authorization', 'secret');
    return this.client
      .post<TodoItem>(url, todo, { headers })
      .pipe(catchError((err) => this.handleError(err, 'Unable to add item')));
  }

  removeTodo(id: string): Observable<void> {
    const headers = this.getStandardHeaders().set('Authorization', 'secret');
    return this.client
      .delete<void>(`${url}/${id}`, { headers })
      .pipe(catchError((err) => this.handleError(err, 'Unable to remove item')));
  }

  private handleError(error: HttpErrorResponse, message: string = '') {
    if (error.status === 0) {
      console.error('There is an issue with the client or network:', error.error);
    } else {
      console.error('Server-side error:', error.error);
    }

    return throwError(() => new Error(message));
  }

  private getStandardHeaders(): HttpHeaders {
    return new HttpHeaders({ 'Content-Type': 'application/json' });
  }
}
