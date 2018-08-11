import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';



@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css'],
})
export class QuoteFormComponent implements OnInit {

  tags = [ 'hilarious', 'thats serious', 'techy'];
  formQuote = new Quote(1, 'Boyd', 'this is quote1',
    this.tags[0], 'look inspired by this quote');

  submitted = false;

  onSubmit() { this.submitted = true; }

  get diagnostic() { return JSON.stringify(this.formQuote); }
  constructor() {}

  ngOnInit() {
  }

}
