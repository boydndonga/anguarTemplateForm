import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../quoteService/quotes.service';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
  providers: [QuotesService],

})
export class QuoteComponent implements OnInit {

  constructor() {

  }
  ngOnInit() {
  }

}
