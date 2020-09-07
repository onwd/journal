import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PublicJournalEditSubjectPageComponent } from './edit-subject.component';

describe('PublicJournalEditSubjectPageComponent', () => {
  let component: PublicJournalEditSubjectPageComponent;
  let fixture: ComponentFixture<PublicJournalEditSubjectPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PublicJournalEditSubjectPageComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicJournalEditSubjectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
