import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quote'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotedComponent implements OnInit {
    title = 'Welcome to your world of quotes'
    quotes: Quotes[] = [
      new Quotes (1, 'Faith', 'Deep','The way I see it, if you  want the rainbow, you have to put up with the rain.','Dolly  Parton', new Date(2021,7,19),0,0),
      new Quotes (2,'Ilkay','Inspiration','If you want to fly   give up everything that weighs you down.','Gurubogsa',new   Date(2021,7,20),0,0),
      new Quotes (3, 'Marion','Love','Sometimes you will never  know the value of a moment until it becomes a memory.','DR   SEUSS',new Date(2021,7,18),0,0),
      new Quotes (4, 'Barbosa','Positive','When life gives you a  hundred reasons to break down and cry,show life that you   have a million reasons to smile and laugh.','FunZmo',new  Date(2021,7,19),0,0),
      new Quotes (5, 'Kiyoko','Philosophical','The way we see the   problem is the problem.','Stephen Covey',new Date(2021,7,21)  ,0,0),
    ];
  get sortQuotes(){
    return this.quotes.sort((a, b) => {
      return <any>new Date(.datePosted) - <any>new Date(a.  datePosted);
    });
  }
  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a. datePosted);
    });
  }
  addedQuote(quotes){
    let arraysize = this.quotes.length;
    quotes.id = arraysize+1;
    quotes.completeDate = new Date(quotes.completeDate)
    this.quotes.push(quotes)
  } 
  quoteDelete(isRead, index){
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }
  displayInfo(index){
    this.quotes[index].showInfo = !this.quotes[index].showInfo;
  }
    constructor() { }

    ngOnInit(): void {
    }

}
