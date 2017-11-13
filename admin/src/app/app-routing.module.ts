import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChordsComponent } from './chords/chords.component';

const appRoutes: Routes = [
  { path: 'chords', component: ChordsComponent },
  { path: '',
    redirectTo: '/chords',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class RoutesModule { }
