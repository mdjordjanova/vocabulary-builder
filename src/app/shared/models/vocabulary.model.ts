import { Word } from './word.model';

export interface IVocabulary {
  words: Word[];
}

export class Vocabulary {
  words: Word[];

  constructor(words: Word[]) {
    this.words = words;
  }

  contains(word: Word) {
    return !!this.find(word);
  }

  find(word: Word) {
    return this.words.find(item => { word.en === item.en && word.nl == item.nl });
  }

  count() {
    return this.words.length;
  }
}