import { AppComponent } from './app.component';
import { AuthGuard } from 'libs/shared/auth/src';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          children: [
            {
              path: '',
              redirectTo: '/todo',
              pathMatch: 'full',
            },
            {
              path: 'todo',
              loadChildren: () =>
                import('todo/Module').then((m) => m.RemoteEntryModule),
              canActivate: [AuthGuard],
            },
            {
              path: 'login',
              loadChildren: () =>
                import('login/Module').then((m) => m.RemoteEntryModule),
            },
          ],
        },
        // {
        //   path: 'todo',
        //   loadChildren: () =>
        //     import('todo/Module').then((m) => m.RemoteEntryModule),
        // },
        // {
        //   path: 'login',
        //   loadChildren: () =>
        //     import('login/Module').then((m) => m.RemoteEntryModule),
        // },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
