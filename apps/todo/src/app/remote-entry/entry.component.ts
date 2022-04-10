import { Component } from '@angular/core';

@Component({
  selector: 'bg-hoard-todo-entry',
  template: `<div class="todo-list">
    <h1>Todo</h1>
    <div class="list">
      <label> <input type="checkbox" name="item" /> Item </label>
    </div>
  </div> `,
  styles: [
    `
      .remote-entry {
        background-color: #143055;
        color: white;
        padding: 5px;
      }
    `,
  ],
})
export class RemoteEntryComponent {}
