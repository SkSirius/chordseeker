import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChordsComponent } from './chords/chords.component';
import { KeysComponent } from './keys/keys.component';
import { PhrasesComponent } from './phrases/phrases.component';

const appRoutes: Routes = [
  { path: 'chords', component: ChordsComponent },
  { path: '',
    redirectTo: '/chords',
    pathMatch: 'full'
  },
  { path: 'keys',
    component: KeysComponent,
    pathMatch: 'full'
  },
  {
    path: 'phrases',
    component: PhrasesComponent,
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class RoutesModule { }
