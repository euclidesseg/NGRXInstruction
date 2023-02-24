import { createReducer, on } from "@ngrx/store";
import { TodosPageActions } from ".";
import { initialTodos, Todo } from "../model";

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
    on(TodosPageActions.init, () => ({todos:initialTodos }))
    // Esta función se ejecuta cuando se inicializa la página de "todos", estableciendo el estado inicial de la lista de tareas en "initialTodos".
)