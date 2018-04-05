import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TranslateComponent } from './translate/translate.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {TranslatorService} from './translator.service';

const routes: Routes =  [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: TranslateComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TranslateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [TranslatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
