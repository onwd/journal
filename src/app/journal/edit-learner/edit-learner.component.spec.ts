import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { JournalEditLearnerPageComponent } from './edit.component';

describe('JournalEditLearnerPageComponent', () => {
  let component: JournalEditLearnerPageComponent;
  let fixture: ComponentFixture<JournalEditLearnerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        JournalEditLearnerPageComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalEditLearnerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
