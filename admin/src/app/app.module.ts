import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoutesModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ChordsComponent } from './chords/chords.component';
import { ChordModalComponent } from './chords/chordModal/chord-modal.component';
import { KeysComponent } from './keys/keys.component';
import { KeyModalComponent } from './keys/keyModal/key-modal.component';
import { PhrasesComponent } from './phrases/phrases.component';
import { PhraseModalComponent } from './phrases/phraseModal/phrase-modal.component'

import { ChordService } from './chord-service.service';
import { KeyService } from './key-service.service';
import { PhraseService } from './phrase-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ChordsComponent,
    ChordModalComponent,
    KeysComponent,
    KeyModalComponent,
    PhrasesComponent,
    PhraseModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RoutesModule
  ],
  entryComponents: [ ChordModalComponent ],
  providers: [ChordService, KeyService, PhraseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
