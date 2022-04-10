import { Component } from '@angular/core';

@Component({
  selector: 'bg-hoard-login-entry',
  template: `<bg-hoard-login></bg-hoard-login>`,
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
