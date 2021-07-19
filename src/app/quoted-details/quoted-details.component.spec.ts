import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotedDetailsComponent } from './quoted-details.component';

describe('QuotedDetailsComponent', () => {
  let component: QuotedDetailsComponent;
  let fixture: ComponentFixture<QuotedDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotedDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
