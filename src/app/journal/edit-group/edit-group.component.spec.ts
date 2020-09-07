import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { JournalEditGroupPageComponent } from './edit-group.component';

describe('JournalEditGroupPageComponent', () => {
  let component: JournalEditGroupPageComponent;
  let fixture: ComponentFixture<JournalEditGroupPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        JournalEditGroupPageComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalEditGroupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
