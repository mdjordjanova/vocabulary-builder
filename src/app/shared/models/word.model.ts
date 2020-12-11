export interface IWord {
  en: string;
  nl: string;
}

export class Word implements IWord {
  en: string;
  nl: string;

  constructor(en: string, nl: string) {
    this.en = en;
    this.nl = nl;
  }
}