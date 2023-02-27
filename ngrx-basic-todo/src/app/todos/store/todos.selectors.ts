
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TodosState, todosStateFeatureKey } from "./todos.reducers";

// vamos a crar un selector para extraer ellistado completo de tareas

// en el generico le pasamos la interfaz de la parte del estado que vamos a seleccioar
// y como argumento un string con el nombre de la propiedad que usamos al importar esta caracteristica
const todosState = createFeatureSelector<TodosState>(todosStateFeatureKey)

export const todos = createSelector(
    todosState,
    (todosState) => todosState.todos
);

export const hasCompletedTodos = createSelector(todos, (todos) =>
  todos.some((todo) => todo.completed)
);