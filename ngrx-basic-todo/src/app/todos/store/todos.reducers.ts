import { createReducer, on } from "@ngrx/store";
import { TodosPageActions } from ".";
import { initialTodos, Todo } from "../model";

export const todosStateFeatureKey: string  = 'featureKey'
export interface TodosState {
    // a continuacion solamente tomamos el objeto del componente  de nuestra aplicacion
    // el cual figura como estado gloal de la aplicacion
    todos: Todo[];
 }
//añadimis una constante para definir cual sera el estado inicial de este estado
const initialState: TodosState = {
    todos: [],
};

export const todosReducer = createReducer(
    // le pasamos como primer argumento el estado inicial y apartir de ahi
    // cada uno de los siquientes argumentos que le pasemos sera una de las funciones que estan en 
    // nuestro componente de aplicacion continuaremos con el reductor para la accion init
    initialState,
    // para definir un reductor usamos la funcion on de la libreria el cual acepara dos argumento 
    // siendo el primero de estos la accion que qqueremos procesar y el segundo argumento la funcion
    // reductora para crear el nuevo estado, la funcion on nos permite agrupar multiples acciones que tengan 
    // un mismo efecto en el estado y simplemente tenemos que pasar estas funciones como argumentos iniciales
    // y pasar la funcion reductora a continuacion como ultimo argumento
    //  
    on(TodosPageActions.init, (currenstate) => ({ 
        ...currenstate,
        todos: initialTodos,
    })),
    //ahora crearemos una nueva funcion on para la siguiente accion

    on(TodosPageActions.addTodo, (currentState, action) => ({
        ...currentState,
        todos: [...currentState.todos, action.todo],
      })),
      on(TodosPageActions.removeTodo, (currentState, action) => ({
        ...currentState,
        todos: currentState.todos.filter((todo) => todo.id !== action.todo.id),
      })),
      on(TodosPageActions.markAsCompleted, (currentState, action) => ({
        ...currentState,
        todos: currentState.todos.map((todo) =>
          todo.id === action.todo.id ? { ...todo, completed: true } : todo
        ),
      })),
      on(TodosPageActions.markAsPending, (currentState, action) => ({
        ...currentState,
        todos: currentState.todos.map((todo) =>
          todo.id === action.todo.id ? { ...todo, completed: false } : todo
        ),
      })),
      on(TodosPageActions.clearCompleted, (currentState) => ({
        ...currentState,
        todos: currentState.todos.filter((todo) => todo.completed === false),
      }))
    );