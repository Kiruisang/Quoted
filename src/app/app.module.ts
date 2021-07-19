import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from 'angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotedComponent } from './quoted/quoted.component';
import { QuotedDetailsComponent } from './quoted-details/quoted-details.component';
import { QuotedFormsComponent } from './quoted-forms/quoted-forms.component';
import { DatePipe } from './date.pipe';
import { HighlightQuoteDirective } from './highlight-quote.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuotedComponent,
    QuotedDetailsComponent,
    QuotedFormsComponent,
    DatePipe,
    HighlightQuoteDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
