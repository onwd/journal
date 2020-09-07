import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PublicJournalPageComponent } from './journal.component';

describe('PublicJournalPageComponent', () => {
  let component: PublicJournalPageComponent;
  let fixture: ComponentFixture<PublicJournalPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PublicJournalPageComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicJournalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
