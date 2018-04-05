import { Component, OnInit } from '@angular/core';
import {TranslatorService} from '../translator.service';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent implements OnInit {
  textToTranslate = '';
  textTranslation = '';

  constructor(private translator: TranslatorService) { }

  ngOnInit() {
  }

  doTranslate() {
    this.textTranslation = 'Pig Latin: ' + this.translator.translate(this.textToTranslate);
  }

  deleteTranslation() {
    this.textTranslation = '';
  }
}
