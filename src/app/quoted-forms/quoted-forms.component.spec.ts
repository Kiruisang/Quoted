import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotedFormsComponent } from './s.component';

describe('QuotedFormsComponent', () => {
  let component: QuotedFormsComponent;
  let fixture: ComponentFixture<QuotedFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotedFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotedFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
