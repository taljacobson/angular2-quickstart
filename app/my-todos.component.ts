import { Component } from '@angular/core';

@Component({
  selector: 'my-todos',
  template: `
  <h1>my todos</h1>
  <input type='text' [(ngModel)]="newTodo" (keyUp.enter)="setNewTodo()"/>
  <ul class="item">
  <li *ngFor = "let todo of todos ,let i = index" >
    <div (dblclick)="removeTodo(i)">{{i}} {{todo}}</div>
  </li>
  </ul>
  <button (click)="resetTodos()" >reset</button>
  `
})
export class MyTodos {
  todos:any;
  name:string;
  newTodo:string;
  constructor() {
    this.todos = ['hoen','tal','noam'];
  }
  setNewTodo(){
    if(!this.newTodo || this.newTodo.length < 3){

    }else{
      this.todos.push(this.newTodo)
    }
  }
  removeTodo(i:number){
    console.log(i);
    this.todos.splice(i , 1)
  }

  resetTodos(){
    this.todos.length = 0;
    this.newTodo = '';
  }

}
