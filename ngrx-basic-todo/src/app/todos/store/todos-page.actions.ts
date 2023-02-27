import { createAction, props } from "@ngrx/store";
import { Todo } from "../model";

// exige como argumento el string para la propiedad Type 
// ahi se agrega el lugar donde se produjo la accion
export const init = createAction('[Todos Page] Init')
//No necesitamos añadir mas propiedades porque en el ngoninit  this.todos = initialTodos; ya se esta inicializando

export const addTodo = createAction(
    '[Todos Page] Add todo',
    // para definir propiedades extras a una accion devemos acrelo mediante la funcion props de la libreria
    // en el segundo argumento
    props<{todo:Todo}>()
);
export const removeTodo = createAction(
    '[Todos Page] Remove Todo',
   
    props<{todo:Todo}>()
);
export const markAsCompleted = createAction(
    '[Todos Page] mark As Completed',
   
    props<{todo:Todo}>()
);
export const markAsPending = createAction(
    '[Todos Page] mark As Pending',
   
    props<{todo:Todo}>()
);
export const clearCompleted = createAction('[Todos Page] Clear Completed')

// creamos una exjportacion de todas estas acciones desde el archico index.ts
// y lugo vamos hasta nuestro componente para inyectar el servicio de la store

    
    