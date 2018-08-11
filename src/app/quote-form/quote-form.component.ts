import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Quote } from '../quote';
import { QuotesService } from '../quoteService/quotes.service';


@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css'],
  providers: [QuotesService]
})
export class QuoteFormComponent implements OnInit {

  tags = [ 'hilarious', 'thats serious', 'techy'];
  quotes: Quote[];

  formQuote = new Quote(1, 'Boyd', 'this is quote1',
    this.tags[0], 'look inspired by this quote');

  submitted = false;

  onSubmit() { this.submitted = true; }

  // get diagnostic() { return JSON.stringify(this.formQuote); }

  newQuote() {
    const quoteLength = this.quotes.length;
    this.formQuote = new Quote(quoteLength + 1, '', '', '');
    this.quotes.push(this.formQuote);
  }

  updateQuoteById(id: number): Quote {
        for (const quote of this.quotes) {
          if (quote.id === id) {
            this.formQuote = new Quote(quote.id, quote.name, quote.quote,
            quote.tag, quote.note);
            return this.formQuote;
          }
    }
  }
  constructor(quoteService: QuotesService) {
    this.quotes = quoteService.getAllQuotes();
  }

  ngOnInit() {
  }

}
