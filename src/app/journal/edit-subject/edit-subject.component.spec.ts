import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { JournalEditSubjectPageComponent } from './edit-subject.component';

describe('JournalEditSubjectPageComponent', () => {
  let component: JournalEditSubjectPageComponent;
  let fixture: ComponentFixture<JournalEditSubjectPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        JournalEditSubjectPageComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalEditSubjectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
