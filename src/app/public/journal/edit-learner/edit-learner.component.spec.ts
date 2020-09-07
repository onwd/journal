import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PublicJournalEditLearnerPageComponent } from './edit.component';

describe('PublicJournalEditLearnerPageComponent', () => {
  let component: PublicJournalEditLearnerPageComponent;
  let fixture: ComponentFixture<PublicJournalEditLearnerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PublicJournalEditLearnerPageComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicJournalEditLearnerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
