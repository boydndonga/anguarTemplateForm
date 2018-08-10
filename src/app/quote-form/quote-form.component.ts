import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';


@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css'],
})
export class QuoteFormComponent implements OnInit {

  tags = [ 'hilarious', 'thats serious', 'techy'];

  submitted = false;

  onSubmit() { this.submitted = true; }
  constructor() { }

  ngOnInit() {
  }

}
