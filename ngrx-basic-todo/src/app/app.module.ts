import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosModule } from './todos/todos.module';
import { StoreModule } from '@ngrx/store';
import { todosReducer } from './todos/store';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TodosModule, StoreModule.forRoot({todosState:todosReducer})],
  // para añadir nuestro estado a la store añadimos al primer argumento de la funcion ForRoot
  // un objeto con la coinstante todosReducer como propiedad, esto hara que la store el estado de las tareas
  // en una propiesd todosState dentro del objeto global del estado
 
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
