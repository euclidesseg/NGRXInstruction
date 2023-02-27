import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { createTodo, initialTodos, Todo } from './model';
import { TodoSelectors, TodosPageActions } from './store';

@Component({
  selector: 'ako-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// -------------------------Dos piesas de estdos
export class TodosComponent implements OnInit {
  todos$: Observable <Todo []> = this.store.select(TodoSelectors.todos);

  //estado calculado  apartir de la propiedad todos
    hasCompletedTodos$: Observable<boolean> = this.store.select(
      TodoSelectors.hasCompletedTodos
    )
// --------------------------- 

  constructor(private store:Store) {}

  // ahora vamos a usar el metodo dispatch de la store y por medios de ese envamos como argumento la funcion
  // init
  ngOnInit(): void {
    this.store.dispatch(TodosPageActions.init())
  }

  addTodo(description: string): void {
    const newTodo = createTodo(description);
    this.store.dispatch(TodosPageActions.addTodo({todo: newTodo}))
  }

  removeTodo(todoToRemove: Todo): void {
    this.store.dispatch(TodosPageActions.removeTodo({todo: todoToRemove}))
  }

  markAsCompleted(todoToMark: Todo): void {
    this.store.dispatch(TodosPageActions.markAsCompleted({todo:todoToMark}))
  }

  markAsPending(todoToMark: Todo): void {
    this.store.dispatch(TodosPageActions.markAsPending({todo:todoToMark}))
  }

  clearCompleted(): void {
    this.store.dispatch(TodosPageActions.clearCompleted())
  }
}
