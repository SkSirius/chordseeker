import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoutesModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ChordsComponent } from './chords/chords.component';
import { ChordModalComponent } from './chords/chordModal/chord-modal.component';

import { ChordService } from './chord-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ChordsComponent,
    ChordModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RoutesModule
  ],
  entryComponents: [ ChordModalComponent ],
  providers: [ChordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
