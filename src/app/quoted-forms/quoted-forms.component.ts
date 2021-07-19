import { Quote } from '@angular/compiler';
import { Component, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';
import { Quotes } from '../quotes'

@Component({
  selector: 'app-quoted-forms',
  templateUrl: './quoted-forms.component.html',
  styleUrls: ['./quoted-forms.component.css']
})
export class QuotedFormsComponent implements OnInit {
  quotedd = new Quote(0,"","","","", new Date(),0,0);
  @Output() add = new EventEmitter<Quote>();

  addQuote(){
    this.add.emit(this.quotedd);
    this.quotedd = new Quote(0,"","","","",new Date(),0,0);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
