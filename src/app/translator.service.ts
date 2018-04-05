import { Injectable } from '@angular/core';

@Injectable()
export class TranslatorService {
  vowels = ['a', 'e', 'i', 'o', 'u'];
  BreakException = {};

  constructor() { }

  translate(sourceText: string): string {
    let result = '';
    let consonants = '';
    let previousChar = '';
    const sourceTextArray = sourceText.split('');

    try {
      sourceTextArray.forEach(element => {
        if (this.vowels.indexOf(element) === -1) { // It's a consonant
          consonants += element;
          previousChar = element;
          result = consonants + 'ay';
        } else { // It's a vowel
          if (element === 'u' && previousChar === 'q') {
            consonants += element;
            result = sourceText.substr(sourceText.indexOf(element) + 1, sourceText.length) + '-' + consonants + 'ay';
          } else {
            result = sourceText.substr(sourceText.indexOf(element), sourceText.length) + '-' + consonants + 'ay';
          }

          throw this.BreakException;
        }
      });
    } catch (e) {
      if (e !== this.BreakException) { throw e; }
    } finally {
      return result;
    }

  }

}
