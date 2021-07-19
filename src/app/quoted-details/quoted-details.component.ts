import { Quote } from '@angular/compiler';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Quotes } from '../quotes'

@Component({
  selector: 'app-quoted-details',
  templateUrl: './quoted-details.component.html',
  styleUrls: ['./quoted-details.component.css']
})
export class QuotedDetailsComponent implements OnInit {
  @Input() quoty: Quote;
  @Output() isRead = new EventEmitter<boolean>();
  deleteQuote(read:boolean){
    this.isRead.emit(read);
  }
  upvote(){
    this.quoty.likes+=1;
  }
  downvote(){
    this.quoty.dislikes+=1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
