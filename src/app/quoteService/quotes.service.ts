import { Injectable } from '@angular/core';
import { Quotes } from '../quotes';
import { Quote } from '../quote';


@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor() { }

  getAllQuotes(): Quote[] {
    return Quotes;
  }


}
